const db_uri = require('./secret.js');
const express = require("express")

var app = express()
app.get("/",function(request,response){
  response.send("Hello World!")
})

app.listen(10000, function () {
  console.log("Started application on port %d", 10000)
});

const { MongoClient } = require('mongodb');

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

const uri = db_uri; 

async function main(){
  const client = new MongoClient(uri);

  try {
    await client.connect();

    await listDatabases(client);

    await createUser(client,
            {
                name: "Ernesto Giovannardi",
                carplate: "SA1234FG",
                birthdate: "11/02/1998"
            }
        );

  } catch (e) {
    console.error(e);
  } finally {
    await client.close(); 
  } 
}

async function createUser(client, newUser){
  const result = await client.db("myFirstDatabase").collection("userRegistered").insertOne(newUser);
}

main().catch(console.error);
