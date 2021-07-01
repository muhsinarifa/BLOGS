const {query} = require("../helper/db");

let add_blog=async(owner,blogname,blogdetail)=>{
let sqlCommand1="INSERT INTO `blogs`( `blog_owner`, `blog_name`, `blog_detail`) VALUES ('"+owner+"','"+blogname+"','"+blogdetail+"');"
let result= await query(sqlCommand1);
return result;
}

let display=async()=>{
let sqlCommand1="SELECT * FROM `blogs`"
let result= await query(sqlCommand1);
return result;
}

let delete_blog=async(blogid)=>{
let sqlCommand1="DELETE FROM `blogs` WHERE id='"+blogid+"';"
let result= await query(sqlCommand1);
return result;
}

let displayCount=async()=>{
    let sqlCommand1="SELECT COUNT(*) AS c FROM `blogs`"
    let result= await query(sqlCommand1);
    return result[0].c;
    }
    
module.exports={
add_blog,
display,
delete_blog,
displayCount
}