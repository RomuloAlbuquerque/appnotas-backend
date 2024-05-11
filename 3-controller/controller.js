import service from "../4-service/service.js";

const controller = {

  //métodos notas
  read: (req, res) => res.json(service.read()),
  readAllNotes: async (req, res) => res.json(await service.readAllNotes(req.headers['x-access-token'])),
  readByParam: async (req, res) => res.json(await service.readByParam(req.params.param)),
  create: async (req, res) => res.json(await service.create(req.body)),
  update: async (req, res) => res.json(await service.update(req.params.param, req.body)),
  remove: async (req, res) => res.json(await service.remove(req.params.idnota)),


  //métodos usuários
  readUserByParam: async (req, res) => res.json(await service.readUserByParam(req.params.param)),
  createUser: async (req, res) => res.json(await service.createUser(req.body)),
  removeUser: async (req, res) => res.json(await service.removeUsser(req.body)),
  checkLogin: async (req, res) => res.json(await service.checkLogin(req.body))
}

export default controller;
