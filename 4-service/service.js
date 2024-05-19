import dao from "../5-dao/dao.js";
import security from "./security/security.js";

const service = {

  //métodos notas

  read: () => {
    const result = "Olá Rômulo,\n você está usando nosso codebase básico \n que contém uma estrutura de server, rotas, controller, service, dao; \n e utilizando servidor express"
    return result
  },

  readAllNotes: async (token) => {
    const result = security.authorize(token)
    if (result.auth == false) {
      return result
    } else {
      result.list = await dao.readAllNotes(result.id)
      return result
    }
  },

  readByParam: async (param) => {
    let result = await dao.readByParam(param)
    return { titulo: result.titulo, nota: result.nota }
  },

  create: async (object) => {
    const result = await dao.create(object)
    const msg = { message: "" }
    result.rowCount > 0 ? msg.message = "data entered successfully" : msg.message = "Error persisting data"
    return msg
  },

  update: async (param, object) => {
    const result = await dao.update(param, object)
    const msg = { message: "" }
    result.rowCount > 0 ? msg.message = "data updated successfully" : msg.message = "Error updating data"
    return msg
  },

  remove: async (idnota) => {
    const result = await dao.delete(idnota)
    const msg = { message: `${result.rowCount} patterns data deleted` }
    return msg
  },



  //métodos usuários

  readUserByParam: async (param) => {
    let result = await dao.readUserByParam(param)
    // return {nome: result.nome, email: result.email}
  },

  createUser: async (object) => {
    object.senha = await security.encrypt(object.senha)
    const result = await dao.createUser(object)
    const msg = { message: "" }
    result.rowCount > 0 ? msg.message = "data entered successfully" : msg.message = "Error persisting data"
    return msg
  },

  removeUser: async (param) => {
    const result = await dao.deleteUser(param)
    const msg = { message: `${result.rowCount} patterns data deleted` }
    return msg
  },

  checkLogin: async (object) => {
    const list = await dao.readAllUsers()
    const user = list.filter(x => x.email == object.email && security.check(object.senha, x.senha))[0]
    const result = security.authenticate(user)
    return result
  }
}

export default service;