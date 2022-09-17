require('./utils/dotenv')
const app = require('./app')
const connectToMongo = require('./Mongo/db')
const config = require('./config/default').app


app.listen(config.port,()=>{
    connectToMongo();
    console.log(`Server is running on http://localhost:${config.port}`)
})

process.on('uncaughtException',(err)=>{
    console.error(`Error: ${err.message}`)
    process.exit(1);
})