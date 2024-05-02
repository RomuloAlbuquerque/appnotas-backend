import patternService from "../4-service/patternService.js";

const userController = {
  read: (req, res) => res.json(patternService.read()),
  readAllNotes: async (req, res) => res.json(await patternService.readAllNotes()),
  readByParam: async (req, res) => res.json(await patternService.readByParam(req.params.param)),
  create: async (req, res) => res.json(await patternService.create(req.body)),
  update: async (req, res) => res.json(await patternService.update(req.params.param, req.body)),
  remove: async (req, res) => res.json(await patternService.remove(req.params.param)),
}

export default userController;
