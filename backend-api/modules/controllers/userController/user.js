const UserModel = require('../../model/userSchema')
const jwt = require('jsonwebtoken')

const register = async (req, res)=>{
    try{
        let user = await UserModel.create({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password
        });
        res.send(user)
    }catch(err){
        res.json(err)
    }
}
const find = async (req, res)=>{
    try{
        let user = await UserModel.findOne({
            email:req.body.email,
            password:req.body.password
        });
        if(user){
            let token = jwt.sign({
                name:user.name,
                email:user.email,
            },'secretKey@1996')
            res.send({status:'200', token:token})
        }
    }catch(err){
        res.json(err)
    }
}


module.exports ={register,find}