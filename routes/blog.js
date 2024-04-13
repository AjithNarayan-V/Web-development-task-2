const express=require('express')
const router=express.Router()

router.get('/',(req,res)=>{
    res.send('Blog home page')
})

router.get('/about',(req,res)=>{
    res.send('about blog')
})

router.get('/blogpost/:slug',(req,res)=>{
    res.send(`fetch the blogpost for ${req.params.slug}`)
})

module.exports=router
