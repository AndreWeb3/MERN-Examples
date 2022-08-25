const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
const helloRouter = require('./api/routes/hello');

app.use(cors());
app.use(express.json());
app.use('/hello', helloRouter);



app.listen(port, () => {
console.log(`Server is running on port: ${port}`);
});