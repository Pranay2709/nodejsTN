let express = require("express");
let app = express();

require("dotenv").config();

//to convert data in JSON format which is coming from frontend
app.use(express.json());

//create array for store products
let products=[];

app.post('/CreateProduct',(req,res)=>{
    try {
        //req.body is for 
    let obj=req.body;
    //For unique ID
    obj.id=products.length+1;
    //set and add flag to soft delete logic. 
    obj.isDeleted=false;
    //To push in array
    products.push(obj);
    //To print all products in array
    console.log( products)
    res.status(201).send({
        msg:"Product added Successfully"
    })

    } catch (error) {
        res.status(500).send({
            msg:error
        })
    }
    
})
    //to get the data
    app.get("/getproduct",(req,res)=>{
        try {
            //res.send(products);
           let NotDeleted=products.filter((val)=>{
            if(val.isDeleted==false){
                return true
            }
        } )
        res.status(200).send(NotDeleted)
            
        } catch (error) {
            res.status(500).send({
                msg:error
            })
        }

    })

app.put("/updateproduct",(req,res)=>{
    try {
        let id = req.query.id; //id aave che
        let obj=req.body; // je update karvanu che a aave che 
         let searchProduct=products.find((val)=>(val.id==id));  //je id aae che query ma a sodhi ne aave che
         
         if(!(searchProduct && searchProduct.ProductName) || (searchProduct && searchProduct.isDeleted==true)){
            res.status(404).send({
                msg:"Product Not Found"
            })
         }
         else{
         searchProduct.ProductName=obj.ProductName?obj.ProductName:searchProduct.ProductName; 
         searchProduct.Cost=obj.Cost?obj.cost:searchProduct.cost; 
         searchProduct.ProductDescription=obj.ProductDescription?obj.ProductDescription:searchProduct.ProductDescription;
         //to respons on postman
         res.send(200).send({
             msg:"Product Updated Successfully"
            })
        }
    } catch (error) {
       

        res.status(500).send({
            msg:error
        })
    }
})

app.delete("/DeleteProduct",(req,res)=>{
    try {
        let id = req.query.id;
        let searchProduct=products.find((val)=>(val.id==id));
        searchProduct.isDeleted=true;
        
        res.send(200).send({
            msg:"Product deleted Successfully"
        })
        
    } catch (error) {
        res.status(500).send({
            msg:error
        })
    }
})

app.get("/SortProduct",(req,res)=>{
    try {
        let ord=req.query.sort

        let arr=products.sort((a,b)=>{
            if(ord=="asc"){
                return a.Cost - b.Cost
            }else if(ord=="dsc"){
                return b.Cost - a.Cost
            }
            else{
                res.status(404).send({

                    msg:"Wrong input ! Enter asc/des "
                })
            }
        })
        res.status(200).send(arr)
       
    } catch (error) {
        res.status(500).send({
            msg:error
        })
    }
})


app.listen(process.env.PORT,(err)=>{
    if(!err){
        console.log("server running on PORT " + process.env.PORT );
    }
});

