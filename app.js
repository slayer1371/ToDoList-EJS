const express=require("express");
const bodyparser=require("body-parser");

const app=express();

let items=["Buy Food","Cook Food","Eat Food"];

app.set('view engine', 'ejs');
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static('public'));

app.get("/",function(req,res){
    let today=new Date();

    let options={
        weekday:"long",
        day:"numeric",
        month:"long"
    };

    let day=today.toLocaleDateString("en-US",options);

    res.render("list", {kindOfDay:day,newlistitem:items});
})

app.post("/",(req,res)=>{
    let item=req.body.newitem;

    items.push(item);

    res.redirect("/");
})

app.listen(3000,function(){
    console.log("Server is running at port 3000!");
});

// let currentday=today.getDay();
// let day=""

// switch(currentday){
//     case 1:
//         day="Monday";
//         break;
//     case 2:
//         day="Tuesday";
//         break;
//     case 3:
//         day="Wednesday";
//         break;
//     case 4:
//         day="Thursday";
//         break;
//     case 5:
//         day="Friday";
//         break;
//     case 6:
//         day="Saturday";
//         break;
//     case 0:
//         day="Sunday";
//         break;
// }