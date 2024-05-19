import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const key = process.env.SECRET

const security = {
    authenticate: (obj) => {
        if (obj) {
            obj.token = jwt.sign(obj, key, { expiresIn: '1h' })
            return obj
        } else {
            'Unknow User'
        }

    },

    authorize: (token) => {
        let result = { auth: false, message: '', id: null }
        if (!token) {
            result.message = 'No token provided'
        } else {
            jwt.verify(token, key, (err, decoded) => {
                if (err) {
                    result.message = err.message
                } else {
                    result.auth = true
                    result.message = 'Success'
                    result.id = decoded.id
                }
            })
        }
        return result
    },

    encrypt: async (pass) => await bcrypt.hash(pass, 1)
        .then((passHashed) =>
            passHashed
        ),

    check: async (pass, hashed) => {

        //buscando no banco a senha do usuário

        const match = await bcrypt.compare(pass, hashed)

        if (match) {
            console.log(match)
            console.log('Granted!')
        } else {
            console.log('Access Denied')
        }
    }
}

export default security