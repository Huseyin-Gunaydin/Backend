import express from "express";
const app = express();

app.listen(4321, () => console.log("listening on port 4321"));

app.get("/", (req,res)=>{
    res.json("test")
});