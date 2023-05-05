import express from "express";
import * as dotenv from "dotenv";

import router from "./router.js";

const start = async () => {
  try {
    dotenv.config();
    const PORT = process.env.PORT || 5500;
    const app = express();

    app.use(express.json());
    app.use("/api", router);
    app.listen(PORT, () => console.log("SERVER STARTED ON PORT " + PORT));
  } catch (e) {
    console.log(e);
  }
};

start();
