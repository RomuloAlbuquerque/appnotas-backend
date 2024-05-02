import client from "../6-db/db.js";

const patternDAO =  {

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
    [param])
}

export default patternDAO