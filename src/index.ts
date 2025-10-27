import express, { json, urlencoded } from "express";
import cors from "cors";

import { findPort } from "./config/port";
import { connectionDB } from "./config/connection";
import routerUser from "./routes/user";
import morgan from "morgan";
import { PORT as APP_PORT } from "./config/env";

const app = express();
const PORT: number | string = APP_PORT ?? 4000;

app.disable("x-powered-by");
app.use(cors({ origin: "*" }));
app.use(urlencoded({ extended: true }));
app.use(json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  const data = { metodo: req.method, url: req.url };

  res.status(200).json({ msg: "Welcome to my api TS", data });
});

app.use(routerUser);

connectionDB();

findPort(PORT)
  .then((port) => {
    app.listen(port, "0.0.0.0", () =>
      console.log(`App running in the port: ${port}`),
    );
  })
  .catch((err) => console.log("Erorr:", err));
