import jsonwebtoken from 'jsonwebtoken'

const key = process.env.SECRET

const security = {
    authenticate: (obj) => {
        if(obj){
            obj.token = jsonwebtoken.sign(obj, key, { expiresIn: '30s' })
            return obj
        }else{
            'Unknow User'
        }
         
    },

    authorize: (token) => {
        let result
        if(!token){
            result = {auth: false, message: 'No token provided'}
        }else{
            jsonwebtoken.verify(token, key, (err, decoded) => {
                if(err){
                    result = {auth: false, message: err.message}
                }else{
                    result = {auth: true, id: decoded.id}
                }
            })
        
        }
        return result
    }

}

export default security