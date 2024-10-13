import { Hono } from "npm:hono";
const app = new Hono();

app.get("/", (c) => c.html("Hello from Hono!"));

export default app;
