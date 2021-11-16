const mongoose = require('mongoose');
const dbName= "chatroom";
mongoose
    .connect(`mongodb://localhost/novgroupproject`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    })
    .then(()=> 
    console.log(`Establihed a connection to the database!`)
    )
    .catch((err)=>
    console.log("Something went wronf when connecting to the database", err)
    );