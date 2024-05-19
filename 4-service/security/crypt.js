import bcrypt from 'bcrypt'

const crypt = {

  encrypt : (pass) => {

//examinando o hash de 2^10 até 2^20
for (let saltRounds = 2; saltRounds <= 4; saltRounds++) { 
  bcrypt.hash(pass, saltRounds)
  .then((passHashed)=> {
    console.time(`Time: ${saltRounds}`);
        console.log(passHashed);
    console.timeEnd(`Time: ${saltRounds}`);
  });
}

//informado no formulário

  },

check : async (pass, hashed) => {

    //buscando no banco a senha do usuário
    
    const match = await bcrypt.compare(pass, hashed )

    if(match) {
      console.log(match)
        console.log('Granted!')
    }else {
        console.log('Access Denied')
    }
}


}

export default crypt