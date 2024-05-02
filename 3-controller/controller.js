import service from "../4-service/service.js";

const controller = {
  read: (req, res) => res.json(service.read()),
  readAllNotes: async (req, res) => res.json(await service.readAllNotes()),
  readByParam: async (req, res) => res.json(await service.readByParam(req.params.param)),
  create: async (req, res) => res.json(await service.create(req.body)),
  update: async (req, res) => res.json(await service.update(req.params.param, req.body)),
  remove: async (req, res) => res.json(await service.remove(req.params.param)),
}

export default controller;
