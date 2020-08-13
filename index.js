const express = require('express');
const cors = require('cors');
const connectDatabase = require('./config/db');

const app = express();
const PORT = process.env.PORT || 4000;

connectDatabase();
app.use( cors() );
app.use(express.json());
app.use('/api/data', require('./routes/data'));

app.listen(PORT, '0.0.0.0',()=>{
    console.log('Server running on port ', PORT);
});