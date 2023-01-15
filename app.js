const Express=require('express')
const Bodyparser=require('body-parser')
const Cors=require('cors')
const Mongoose=require('mongoose')


var app=Express()


app.get("/",(req,res)=>{
res.send("welcome")
})

app.get("/add",(req,res)=>{
    res.send("add books")
    })


    app.get("/search",(req,res)=>{
        res.send("search book")
        })

        app.get("/edit",(req,res)=>{
            res.send("edit book")
            })

            app.get("/delete",(req,res)=>{
                res.send("delete book")
                })

              


app.listen(2000)