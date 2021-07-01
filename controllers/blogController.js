const appModel = require("../models/appModel");

const see=(req,res)=>{
    res.render('addblog.ejs');
}
const add=async(req,res)=>{
  let owner=req.body.owner;
  let blogname=req.body.blogname;
  let blogdetail=req.body.blogdetail;
  let add=await appModel.add_blog(owner,blogname,blogdetail);
  res.redirect('/');
}
const display=async(req,res)=>{
    let display=undefined;
    let count=await appModel.displayCount();
    if(count!=0){
        display =await appModel.display();
    }
    data ={display}
    res.render('view.ejs',{data});
}
const Delete=async(req,res)=>{
    let blogid =req.query.bid;
    console.log('id:'+blogid);
    let display=await appModel.display();
    data ={display}
    let deleteblog=await appModel.delete_blog(blogid);
    console.log("done");
    res.redirect('/display');
}
const addblog=async(req,res)=>{
    res.render('addblog.ejs');
}
module.exports={
    see,
    add,
    display,
    Delete,
    addblog
}