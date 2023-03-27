const express = require("express");
const cors = require("cors");
require('dotenv').config();

//environment variables
PORT = process.env.PORT || 5001;
API_KEY = process.env.API_KEY;

const app = express()

//middleWares
app.use(cors())

//api routes
app.get("/api", async (req,res)=>{
  
  let json;
  const term = req.query.term;
  const url = `https://newsapi.org/v2/everything?q=${term}&apiKey=${API_KEY}`;
  
  try {
        const response = await fetch(url);
        json = await response.json();
        console.log(response)
      } catch (error) {
        console.log("error", error);
      }
  res.send({data:json})
})

app.listen(PORT, (err)=>{
  if(err){
    console.log(err)
  }else{
    console.log(`Server is listening on port ${PORT}`)
  }
})