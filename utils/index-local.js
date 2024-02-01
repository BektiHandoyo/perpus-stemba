import express from "express"
import dotenv from "dotenv"
import { allClasses } from "./models/index.js";
import db from "./config/Database.js";
import bodyParser from "body-parser";
import router from "./routes/web.js";
dotenv.config();

const {APP_PORT, APP_HOST, APP_PROTOCOL} = process.env;
// console.log(process.env);
const app = express();

try {
    await db.authenticate();
    for(let modelClass of allClasses){
        modelClass.sync();
    }
} catch (error) {
    console.log(error);
}

app.use(express.json());
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(router)

app.listen(APP_PORT, APP_HOST, () => {
    console.log(`Server Running on ${APP_PROTOCOL}://${APP_HOST}:${APP_PORT}`);
})

