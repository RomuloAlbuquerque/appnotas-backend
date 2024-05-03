import client from "../6-db/db.js";

const dao = {

  //métodos notas

  readAllNotes: async (iduser) => {
    const result = await client.query('select * from public.notas where iduser = $1',
      [iduser])

    return result.rows
  },

  readByParam: async (param) => {
    const result = await client.query(`select * from public.notas where titulo = $1`,
      [param])
    return result.rows[0]
  },

  create: async (object) => 
    await client.query(`insert into public.notas (titulo, nota, iduser) values ($1, $2, $3)`,
      [object.titulo, object.nota, object.iduser]),

  update: async (param, object) => {
    return await client.query(`update public.notas set titulo = $1, nota = $2, iduser = $3 where id = $4`,
    [object.titulo, object.nota, object.iduser, param])
  },

  delete: async (idnota) => await client.query(`delete from public.notas where id = $1`,
    [idnota]),


  //métodos usuários

  readUserByParam: async (param) => {
    const result = await client.query(`select * from public.usuarios where id = $1`,
      [param])
    return result.rows[0]
  },

  createUser: async (object) =>
    await client.query(`insert into public.usuarios (nome, email, senha) values ($1, $2, $3)`,
      [object.nome, object.email, object.senha]),

  deleteUser: async (param) => await client.query(`delete from public.usuario where id = $1`,
    [param]),

  checkLogin: async (object) => {
    const result = await client.query(`select id, nome, email from public.usuarios where email = $1 and senha = $2`,
      [object.email, object.senha])
    return result.rows[0]
  }
}

export default dao