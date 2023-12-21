const mongoose = require('mongoose');
require('dotenv').config();

const app = require ('./app');

const dbUser = process.env.DB_USER
const dbPass = process.env.DB_PASS
const dbHost = process.env.DB_HOST
const ipServer = process.env.IP_SERVER
const apiVersion = process.env.API_VERSION
const port = 3977;

const conectDB = async () => {
    
    try {
        await mongoose.connect (`mongodb+srv://${dbUser}:${dbPass}@${dbHost}/`);
        app.listen(port, () => {
            console.log('API XD');
            console.log(`http://${ipServer}:${port}/api/${apiVersion}`)
        })
    } catch (error) {
        console.log('error al conectar a mongoDB', error);
    }
};

conectDB();