import express from "express";

import cors from "cors";
import patternRouter from "../2-router/patternRouter.js";

const app = express();

const server = () => {

  const port = app.set("port", 3001).get("port");

  app.listen(port, () => console.log("Rodando na porta ", port));

  app.use(cors());

  app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next(); 
  });

  app.use(express.urlencoded({ extended: true }));

  app.use(express.json({ limit: "1mb" }));

  app.use(patternRouter())

};

export default server();