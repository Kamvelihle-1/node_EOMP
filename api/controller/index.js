const express = require('express')
const bodyParser = require('body-parser')
// const {verifyToken} = require('../middleware/AuthonticateUser')
const routes = express.Router()
//import all model's objects
const {users,products} = require('../model')

//User routes
routes.get('/users',(req,res)=>{
    users.getUsers(req,res)
})
routes.get('/user/:id',(req,res)=>{
    users.getUser(req,res)
})

//======Product routes=====
routes.get('/products',(req,res)=>{
    products.getProducts(req,res)
})
routes.get('/product/:id',(req,res)=>{
    products.getProduct(req,res)
})

module.exports ={
    express,
    routes
}