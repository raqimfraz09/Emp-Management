const express = require('express');
const app = express();
const bodyParser = require('body-parser');

require('dotenv').config();
const PORT = process.env.PORT || 5000;
require('./Models/db');
const EmployeeRouter = require('./Routes/EmployeeRoutes');



app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('EmpManagement Server is Running ');
});


app.use('/api/employees', EmployeeRouter)


app.listen(PORT, ()=>{
    // connectDB();
    console.log(`SERVER IS RUNNING AT PORT ${PORT}`);
})


