import patternDAO from "../5-dao/patternDAO.js";

const patternService = {
  read: () => {
    const result = "Olá Rômulo,\n você está usando nosso codebase básico \n que contém uma estrutura de server, rotas, controller, service, dao; \n e utilizando servidor express"
    return result
  },

  readAllNotes: async () => {
    const result = await patternDAO.readAllNotes()
    return result
  },

  readByParam: async (param) => {
    let result = await patternDAO.readByParam(param)
    return {titulo: result.titulo, nota: result.nota}
  },

  create: async (object) => {
    const result = await patternDAO.create(object)
    const msg = {message: ""}
    result.rowCount > 0 ? msg.message = "data entered successfully" : msg.message = "Error persisting data"
    return msg
  },

  update: async (param, object) => {
    const result = await patternDAO.update(param, object)
    const msg = {message: ""}
    result.rowCount > 0 ? msg.message = "data updated successfully" : msg.message = "Error updating data"
    return msg
  },

  remove: async (param) => {
    const result = await patternDAO.delete(param)
    const msg = {message: `${result.rowCount} patterns data deleted`}
    return msg 
  }
}

export default patternService;