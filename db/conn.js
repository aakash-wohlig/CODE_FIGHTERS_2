const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/SellerDashboard",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Connection successful!");
}).catch((e)=>{
    console.log("connection failed!",e);
});