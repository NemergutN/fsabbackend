import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import { db } from "./util/firebaseinit.js";
import {collection, getDocs} from "firebase/firestore";


const app = express();
const port = 8080;

app.use(express.json());
app.use(
    cors({
        origin: "hhtp://localhost:3000",
    })
);

app.get("/", async(req, res) => {
    res.send("working!");
});

app.get("/fortunes", async (req, res) => {
    const collectionRef = collection(db, "Fortunes");
    const collectionSnap = await getDocs(collectionRef);
    const fortunelist = [];
    collectionSnap.forEach( (doc) => {
        fortunelist.push(doc.data());
    });
    res.send(fortunelist);
});

app.listen(port, () => {
    console.log("listening on port", port);
});