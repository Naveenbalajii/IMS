const express = require("express");
const dbconnect = require("./data");
const model = require("./structure");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get('/get',async(req,res) => {
    try{
        const get = await model.find()
        res.json(get);
    }
    catch(err){
        res.send('Error' + err)
    }
})

app.get('/get/:id',async(req,res) => {
    try{
        console.log(req.params);
        const {id} = req.params;
        const user = await model.findById({_id:id});

        res.json(user);
    }
    catch(err){
        res.send('Error' + err)
    }
})


app.post('/create',async(req,res)=>{
    const post = new model({
        laptopname: req.body.laptopname,
        laptopmodel: req.body.laptopmodel,
        stockcount: req.body.stockcount,
        price: req.body.price,
        description: req.body.description
    })
    try{
        const a = await post.save();
        res.json(a);
    }
    catch(err){
        res.send('Error' + err)
    }
})

app.put('/edit/:id',async (req,res)=>{
    try 
    {
        const id = req.params.id;
        const update = req.body;
       const updateddata = model.findByIdAndUpdate(id,update,{new:true})
       .then((data)=>console.log(data))
       res.send({
        status:"Update Success",
        data:updateddata
       })
    }
    catch(err) 
    {
            res.send({
                status:"Failed",
                data:err
            })
    }
})

app.delete("/delete/:id",async(req,res)=>{
    try 
    {
      const id=req.params.id;
      const details = req.body;
      await model.findByIdAndDelete(id)
      .then(()=>console.log("User with"+id+"got deleted"))
      res.send({
        status:"Success",
        data:details
      })
    }
    catch(err)
    {
        res.send({
            status:"Failed",
            data:err
        })
    }
})

app.listen(9000,()=>{
    console.log("Port Connected Successfully");
})