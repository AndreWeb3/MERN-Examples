import express, { json } from 'express';
import cors from 'cors';
import mongoose from "mongoose";
import locationsRouter from './api/locations.js';
import 'dotenv/config'

const mongoDB = process.env.MONGODB;

const app = express();
const { connect, connection } = mongoose;
const port = process.env.PORT || 5000;

app.use(cors());
app.use(json());
app.use('/locations', locationsRouter);

mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error: '));
db.once('open', function () {
  console.log('Connected to MongoDB');
});

app.listen(port, () => {
console.log(`Server is running on port: ${port}`);
});