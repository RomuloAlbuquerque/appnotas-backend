import client from "../6-db/db.js";

const dao = {

  //métodos notas

  readAllNotes: async () => {
    const result = await client.query('select * from public.notas')
    return result.rows
  },

  readByParam: async (param) => {
    const result = await client.query(`select * from public.notas where titulo = $1`,
      [param])
    return result.rows[0]
  },

  create: (object) =>
    client.query(`insert into public.notas (titulo, nota) values ($1, $2)`,
      [object.titulo, object.nota]),

  update: (param, object) => client.query(`update public.notas set titulo = $1, nota = $2 where id = $3`,
    [object.titulo, object.nota, param]),

  delete: (param) => client.query(`delete from public.notas where id = $1`,
    [param]),


  //métodos usuários

  readUserByParam: async (param) => {
    const result = await client.query(`select * from public.usuarios where id = $1`,
      [param])
    return result.rows[0]
  },

  createUser: (object) =>
    client.query(`insert into public.usuarios (nome, email, senha) values ($1, $2, $3)`,
      [object.nome, object.email, object.senha]),

  deleteUser: (param) => client.query(`delete from public.usuario where id = $1`,
    [param]),

  checkLogin: (object) =>
    client.query(`select id, nome from public.usuarios where email = $1 and senha = $2`,
      [object.email, object.senha])
}

export default dao