import express from "express";
import { connect } from "./config/db";
import { config } from "./config/config";
import version from "./v1/route";
import multer from "multer";
import { error as resError } from "./helper/responseH";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import cors from "cors";
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import JWT from "jsonwebtoken";
import user from "./model/user";
import * as _ from "lodash";
import cluster from "cluster";
import os from "os";
import net from "net";

const app = express();
const numCpu = os.cpus().length;

const options = {
  origin: "http://localhost",
  credentials: true,
};

app.use(cors(options));

const port = config.APP_PORT;

// DB connection
const db = connect();

if (db) {
  db.once("open", async () => {
    console.log("Connected to database");

    // Implement cluster for Zero down time and utilize multiple CPU on same port with different pid
    if (cluster.isMaster) {
      for (let i = 0; i < numCpu; i++) {
        cluster.fork();
      }
      cluster.on("exit", (worker, code, signal) => {
        console.log(`process died ${worker.process.pid}`);
      });
    } else {
      app.listen(port, () => {
        return console.log(
          `server is listening on ${port} process ${process.pid}`
        );
      });
    }
  });
}

// Body parser for POST params
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.raw());

// For File Upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, config.UPLOAD_PATH);
  },
  filename: (req, file, cb) => {
    cb(null, uuidv4() + path.extname(file.originalname));
  },
});
app.use(multer({ storage }).single("file"));

// Routes
app.use("/v1", version);

// Centralized error handler
app.use((err: any, req: any, res: any, next: any) => {
  // Joi error handler for json response
  if (err && err.error && err.error.isJoi) {
    return res
      .status(400)
      .json(resError(err.error.toString(), 400, err.error?.details));
  } else {
    next(err);
  }
});

// Default Route for index page
app.get("/", (req, res) => {
  res.send("App working");
});

// Socket Server
const httpServer = createServer();
const io = new Server(httpServer, {
  path: "/socket.io",
  transports: ["polling"],
  cors: {
    origin: "http://localhost",
    credentials: true,
  },
});

// Socket Middleware
io.use((socket, next) => {
  const authHeader = socket.handshake.headers.authorization;

  if (authHeader) {
    JWT.verify(authHeader, config.JWT_KEY, async (err: any, userD: any) => {
      if (err) {
        return new Error("Invalid token");
      }
      const vuser = await user.findOne({ email: userD.userData.email });
      if (vuser && vuser.verified === false) {
        return new Error("User email not verified");
      }
      socket.handshake.query = { user: userD.userData };
      next();
    });
  } else {
    return new Error("Token not available");
  }
});

// Handle socket connection
io.on("connection", (socket) => {
  socket.on("msg", (msg) => {
    console.log("Socket connected", socket.id);
    console.log(socket.handshake.query.user);
    console.log(msg);
  });
});

// Check is port number is alreay in use
const isPortFree = (sPort: number) => {
  return new Promise((resolve) => {
    const server = require("http")
      .createServer()
      .listen(sPort, () => {
        server.close();
        resolve(true);
      })
      .on("error", () => {
        resolve(false);
      });
  });
};

// If given port is free then only start socket server
isPortFree(3200).then((res: any) => {
  if (res) {
    httpServer.listen(3200);
  }
});

export default app;
