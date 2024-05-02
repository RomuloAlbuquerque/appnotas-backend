import express from "express";
import patternController from "../3-controller/patternController.js";

const local = express();

const userRouter = () => {
  return (
    local.get("/", patternController.read),
    local.get("/readAllNotes", patternController.readAllNotes),
    local.get("/readByParam/:param", patternController.readByParam),
    local.post("/create", patternController.create),
    local.put("/update/:param", patternController.update),
    local.delete("/remove/:param", patternController.remove)
  );
};

export default userRouter;