import express from "express";
import cors from "cors";
import jsonServer from "json-server";

const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json());

const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

app.use(middlewares);

// Use PATCH support for partial updates
app.use("/", router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});