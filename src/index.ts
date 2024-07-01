import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

const app = new Hono<{
  Bindings:{
    DATABASE_URL: string;
  }
}>();

// Routes
app.post("/api/v1/user/signup", async(c) => {
  const body = await c.req.json();
  const prisma = new PrismaClient({
    //datasourceUrl: c.env.DATABASE_URL,
    datasourceUrl:
    "prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiOTUzNmYyM2QtNGY1YS00YTVmLTlkYmQtMmE4MWY2NWU1Yjc2IiwidGVuYW50X2lkIjoiMzE1MWVkMGQwMTA5YTI2YzFiYzllZTlhZjRiYmYwNzI3ZTQwMjNmMmJiNDg2OWFmN2Y0OTNhZTg1MmQzNTEzNyIsImludGVybmFsX3NlY3JldCI6IjQ2Y2RiMjk3LWZiMDItNDAxYy05ODg3LTY4NjZhMDY1OGM0OCJ9.hsqmL4RNVZuhkPLEz3GMmQ5T6PVRWilhbqb8uFbtwP4"
  }
    try {
    await prisma.user.create({
      data: {
        username: body.username,
        password: body.password,
        name: body.name,
      },
    });
      return c.text("Signed Up");
  } catch (e) {
    console.log(e);
    c.status(411);
    return c.json({ error: "Invalid" });
  }

});
app.post("/api/v1/user/signin", (c) => {
  return c.text("Hello Hono!");
});
app.post("/api/v1/user/blog", (c) => {
  return c.text("Hello Hono!");
});
app.put("/api/v1/blog", (c) => {
  return c.text("Hello Hono!");
});
app.get("/api/v1/blog", (c) => {
  return c.text("Hello Hono!");
});
app.post("/api/v1/signup", (c) => {
  return c.text("Hello Hono!");
});
app.get("/api/v1/user/blog/blog", (c) => {
  return c.text("Hello Hono!");
});
export default app;

