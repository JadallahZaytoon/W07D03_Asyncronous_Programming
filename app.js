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

//   const getPost = async(id) => {
//     await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
//     .then((response) => {
//         console.log(response.data);
//       })

//       .catch((err) => {
//         throw err;
//       })
//   };
  
//   getPost(1);
//   getPost(50);


  const appendToFile = (data) => {
    fs.appendFile(`./data.txt`,`
    Passed data`,(err)=>{

        if (err) {
            console.log(err);
          }
    });
    
    

  };

  appendToFile();


  const copyFile = (fileName) => {
    try {
    fs.promises.copyFile(`./data.txt`,`copy_of_data.txt`);
  } catch {
    console.log('The file could not be copied');
  }

  };
  copyFile();


  const post = JSON.stringify({
    title: "JavaScript Basics",
    body: "This post contains information about javaScript ",
    // the id of the user who is going to create the post
    userId: 1,
  });
  
  const createPost = (post) => {
    axios.post('/user', {
        firstName: 'Fred',
        lastName: 'Flintstone'
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

};

createPost();


  app.listen(PORT, () => {
    console.log('SERVER IS WORKING ON http://localhost:' + PORT);
  });