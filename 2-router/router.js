import express from "express";
import controller from "../3-controller/controller.js";

const local = express();

const router = () => {
  return (
    local.get("/", controller.read),
    local.get("/readAllNotes", controller.readAllNotes),
    local.get("/readByParam/:param", controller.readByParam),
    local.post("/create", controller.create),
    local.put("/update/:param", controller.update),
    local.delete("/remove/:param", controller.remove)
  );
};

export default router;