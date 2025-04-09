import express from "express";
import doctores from "./src/router/doctores.js"

const app = express();
app.use(express.json())
export default app

app.use ("/api/doctores", doctores)
