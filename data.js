const mongoose = require('mongoose')

const dbconnect = async(req,res) => {
    try{
        await mongoose.connect("mongodb+srv://naveenbalaji:6f0egafi9RnEVsoG@ims.wwv1dxj.mongodb.net/")
        console.log("connect")
    }
    catch{
        console.log(err);
    }

}

dbconnect();