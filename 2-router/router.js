import express from "express";
import controller from "../3-controller/controller.js";

const local = express();

const router = () => {
  return (

    //métodos notas
    local.get("/", controller.read),
    local.get("/readAllNotes/:iduser", controller.readAllNotes),
    local.get("/readByParam/:param", controller.readByParam),
    local.post("/create", controller.create),
    local.put("/update/:param", controller.update),
    local.delete("/remove/:idnota", controller.remove),

    //métodos usuários
    local.get('/readUserByParam/:param', controller.readUserByParam),
    local.post('/createUser', controller.createUser),
    local.delete('/removeUser/:param', controller.removeUser),
    local.post("/checkLogin", controller.checkLogin)
  );
};

export default router;