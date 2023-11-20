const bcrypt=require("bcrypt")


function hashGenerator(plaintextPassword){
    console.log(plaintextPassword)
    const saltRounds=10
    const salt=bcrypt.genSaltSync(saltRounds)

    const hashedPassword=bcrypt.hashSync(plaintextPassword,salt)
    return hashedPassword
}


function hashVerifier(plaintextPassword,hashedPassword){
    //we take the hashed password from the database
    const passwordmatch=bcrypt.compareSync(plaintextPassword,hashedPassword)
    if(passwordmatch){
        return true
    }else{
        return false
    }
}
module.exports={
    hashGenerator:hashGenerator,
    hashVerifier:hashVerifier
}