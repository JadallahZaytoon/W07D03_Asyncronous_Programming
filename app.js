const fs = require("fs");
const axios = require("axios");
const express = require("express");
const app=express();
const PORT=3000;

const readFile = () => {
    
    fs.readFile(`./data.txt`,(err,data)=>{
        if(err){
            throw err;
        }

        console.log(data.toString());

    })
  };

  readFile()

  app.get('/', (req,res) => {
      res.send('hello')
  })

  app.listen(PORT, () => {
    console.log('SERVER IS WORKING ON http://localhost:' + PORT);
  });