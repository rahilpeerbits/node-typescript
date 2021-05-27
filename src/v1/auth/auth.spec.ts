import request from "supertest-as-promised";
import server from "../../app";
import user from "../../model/user";

describe("POST /register", () => {
  it("register user", async () => {
    const body = {
      email: "testDB@gmail.com",
      password: "123456",
      firstName: "Tester",
      lastName: "Jest",
    };
    const res = await request(server)
      .post("/v1/auth/register")
      .send(body)
      .expect(200);
  });
  describe("POST /login", () => {
    it("login user", async () => {
      const body = {
        email: "testDB@gmail.com",
        password: "123456",
      };
      const res = await request(server).post("/v1/auth/login").send(body);
      expect(res.body.body.userData.email).toBe(body.email);

      const failedBody = {
        email: "rahil3002+1@gmail.com",
        password: "123456",
      };
      await request(server).post("/v1/auth/login").send(failedBody).expect(404);
    });
  });
  describe("DELETE USER", () => {
    it("Remove from DB", async () => {
      const d = await user.find({ email: "testDB@gmail.com" }).remove().exec();
      expect(d.ok).toBe(1);
    });
  });
});
