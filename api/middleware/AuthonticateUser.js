const {sign,verify} = require('jsonwebtoken')
require('dotenv').config()
const key = process.env.SECRET_KEY

// Token Creation
function tokenCreate(user) {
    return sign({
        emailAdd:user.emailAdd,
        userPass:user.userPass
        },key,
        {expiresIn:'1h'}
        )
}

//Token Verification
function verifyToken(req,res,next){
    const token = req.headers["authorization"]

    return verify(token,key,(err,decoded)=>{
        if(err){
            res.json({
                msg:"Token authontication failed."
            })
        }
        req.decoded = decoded
        next();
    })
} 

module.exports ={
    tokenCreate,
    verifyToken
}