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

  readFile();

//   app.get('/', (req,res) => {
//       res.send('hello')
//   })

const writeFile = () => {
    let waitingData=`A new file has been created`
    fs.writeFile(`./data.txt`,waitingData,(err)=>{

        if (err) {
            console.log(err);
          }
    });
  };

  writeFile();



//   const getPost = (id) => {
//     axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
//     .then((response) => {
//         console.log(response.data);
//       })

//       .catch((err) => {
//         throw err;
//       })
//   };
  
//   getPost(1);
//   getPost(50);

  const getPost = async(id) => {
    await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((response) => {
        console.log(response.data);
      })

      .catch((err) => {
        throw err;
      })
  };
  
  getPost(1);
  getPost(50);

  app.listen(PORT, () => {
    console.log('SERVER IS WORKING ON http://localhost:' + PORT);
  });