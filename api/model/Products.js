const db = require('../config')

class Products{
    getProducts(req,res){
        const query =`
        SELECT prodID, prodName,quantity,amount,Category,prodUrl
        FROM Products
        `
        db.query(query,(err,results)=>{
            if(err) throw err
            res.json({
                status:res.statusCode,
                results
            })
        })
    }
    getProduct(req,res){
        const query =`
        SELECT prodID, prodName,quantity,amount,Category,prodUrl
        FROM Products
        WHERE prodID = ${req.params.id}
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
module.exports = Products