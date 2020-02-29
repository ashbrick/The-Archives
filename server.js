// ----- Dependencies ----- //
const express =require('express');
const mongoose =require('mongoose');
const path =require('path');
const config =require('config');

const app = express();

// ----- Middleware ----- //
app.use(express.json());

// // ----- DB Config ----- //
// const db = config.get('mongoURI');

// // ----- Mongoose Congfig ----- //
// mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology:true, useFindAndModify:false, useCreateIndex: true })
//     .then(()=> console.log('MongoDB connected ...'))
//     .catch(err=> console.log('Error connecting to MongoDB'))

// ----- Components Config ----- //


// ----- Listner  ----- //
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));  