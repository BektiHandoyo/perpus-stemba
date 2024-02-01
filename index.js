import express from "express"
import dotenv from "dotenv"
import { allClasses } from "./models/index.js";
import db from "./config/Database.js";
import bodyParser from "body-parser";
import router from "./routes/web.js";
dotenv.config();

// console.log(process.env);
const port = process.env.APP_PORT || 5000
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

app.listen(port, () => {
    console.log(`Server Running on Port ${port}`);
})

