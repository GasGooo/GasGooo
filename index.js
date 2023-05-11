require('dotenv').config()

//const db_uri = 
const express = require("express")
const User = require("./model/User");
const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');

const app = express();
app.get("/",function(request,response){
  response.send("Hello World!")
})

app.listen(10000, function () {
  console.log("Started application on port %d", 10000)
});


main().catch(err => console.log(err));


async function main(){
  await mongoose.connect(process.env.DB_URI);



  const GiangaleazzoVisconti = new User({
    name: 'Giangaleazzo',
    surname: 'Visconti',
    birthdate: new Date('2023-05-09'),
    email: 'giangi@gmail.com',
    password: 'passwMegaSicura',
    address: 'Rome'
  });

  
  await GiangaleazzoVisconti.save();
  console.log(GiangaleazzoVisconti.name);

//  const visconti = await User.find();
//  console.log(visconti);


  const readline = require('readline-sync');

let choice = readline.question("Inserisci 1 se vuoi creare un account, 2 se vuoi eliminare l'account, 3 se vuoi cercare un account \n");

  switch(choice) {
    case 1:
      let name = readline.question("Inserisci il nome \n");
      let surname = readline.question("Inserisci il cognome \n");
      let birthdate = readline.question("Inserisci la data di nascita in formato GG-MM-AAAA \n");
      let email = readline.question("Inserisci la email \n");
      let passw = readline.question("Inserisci la passw \n");
      let address = readline.question("Dove abiti? \n");
      let userNew = createUser(name, surname, birthdate, email, passw, address);
      break;
    case 2:
      break;
    case 3:
    
    default:
      console.log("Errore");
  } 
}

async function createUser(name, surname, birthdate, mail, password, address) {
  const newUser = new User({
    name: name,
    surname: surname,
    birthdate: new Date(birthdate),
    email: email,
    password: passw,
    address: address
  });

  return newUser;
}

async function findUserByEmail(email) {    
 //TODO 
}


main().catch(console.error);
