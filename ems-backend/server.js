import express from "express";
import cors from "cors";
import jsonServer from "json-server";

const app = express();

app.use(cors());

app.use(express.json());


const router = jsonServer.router("db.json");

const middlewares = jsonServer.defaults();


app.use(middlewares);


app.use("/", router);


// ERROR HANDLER
app.use((err,req,res,next)=>{

console.log("SERVER ERROR:",err);

res.status(500).json({
 error:err.message
});

});


const PORT = process.env.PORT || 5000;


app.listen(PORT,()=>{

console.log(
"Server running on port",
PORT
);

});