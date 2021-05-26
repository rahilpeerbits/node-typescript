import request from "supertest-as-promised";
import server from "../../app";
describe("POST /login", () => {
  it("login user", async () => {
    const body = {
      email: "rahil3002@gmail.com",
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
