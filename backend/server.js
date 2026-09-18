const express=require('express');
const app=express();
const main=require("./database");
const Url =require("./models/Url")
const cors=require('cors');
const {nanoid} =require("nanoid");

require('dotenv').config();


app.use(cors());
app.use(express.json());

//home route
app.get("/",(req,res)=>{
    res.send("URL Shortner Backend Running");
})

//create short url
app.post("/api/url/shorten",async (req,res)=>{
    try{
        const {originalUrl}=req.body;

        if(!originalUrl){
            return res.status(400).json({
                message:"URL is required"
            })
        }

        //generate short code
        const shortCode=nanoid(6);


        //save in mongodb
        const newUrl=await Url.create({
            originalUrl:originalUrl,
            shortCode:shortCode
        });

        //send response
        res.status(201).json({
            message:"URL shortend Successfully",
            originalUrl:newUrl.originalUrl,
            shortUrl:`http://localhost:5000/${newUrl.shortCode}`
        });

    }catch(e){
        console.log("Error: "+e);
        res.status(500).json({
            message: "Internal Server Error"
        });
    }
});

////Redirect short url
app.get("/:shortCode",async(req,res)=>{
    try{
        const {shortCode}=req.params;

        //find url
        const url=await Url.findOne({shortCode:shortCode});

        //URl not found
        if(!url){
            return res.status(404).send("Short URL not found");
        }

        //increase clicks
        url.clicks=url.clicks+1;
        await url.save();

        // Redirect
        res.redirect(url.originalUrl);
    }catch(e){
        console.log(e);
        res.status(500).send("Internal Server Error");
    }
});

main()
.then(()=>{
    app.listen(5000,()=>{
        console.log("Listening at port 5000");
    })
}).catch((e)=>{
    console.log(e);
})