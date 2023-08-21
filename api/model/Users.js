const db = require('../config')

class Users{
    getUsers(req,res){
        const query =`
        SELECT userID, CONCAT(firstName,'',lastName) 'User Fullname',userAge,
        Gender,userRole,emailAdd,userProfile
        FROM Users
        `
        db.query(query,(err,results)=>{
            if(err) throw err
            res.json({
                status:res.statusCode,
                results
            })
        })
    }
    getUser(req,res){
        const query =`
        SELECT userID, CONCAT(firstName,'',lastName) 'User Fullname',userAge,
        Gender,userRole,emailAdd,userProfile
        FROM Users
        WHERE userID = ${req.params.id}
        `
        db.query(query,(err,results)=>{
            if(err) throw err
            res.json({
                status:res.statusCode,
                results
            })
        })
    }

}
module.exports = Users