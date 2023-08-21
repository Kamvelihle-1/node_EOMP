const express = require('express')
const bodyParser = require('body-parser')
// const {verifyToken} = require('../middleware/AuthonticateUser')
const routes = express.Router()
const {users,products} = require('../model')

//User routes
routes.get('/users',(req,res)=>{
    users.getUsers(req,res)
})
routes.get('/user/:id',(req,res)=>{
    users.getUser(req,res)
})
routes.post('/user',bodyParser.json(),(req,res)=>{
    users.loginUser(req,res)
})
routes.post('/user',bodyParser.json(),(req,res)=>{
    users.registerUser(req,res)
})
routes.patch('/user/:id',bodyParser.json(),(req,res)=>{
    users.updateUser(req,res)
})
routes.delete('/user/:id',(req,res)=>{
    users.deleteUser(req,res)
})


//======Product routes=====
routes.get('/products',(req,res)=>{
    products.getProducts(req,res)
})
routes.get('/product/:id',(req,res)=>{
    products.getProduct(req,res)
})
routes.post('/product',bodyParser.json(),(req,res)=>{
    products.addProduct(req,res)
})
routes.patch('/product/:id',bodyParser.json(),(req,res)=>{
    products.productUpdate(req,res)
})
routes.delete('/product/:id',(req,res)=>{
    products.deleteProduct(req,res)
})

module.exports ={
    express,
    routes
}