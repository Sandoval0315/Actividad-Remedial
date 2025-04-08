import express from "express";

import doctores from "./src/router/doctores.js"

const app = express();
app.use(express.json())

app.use ("/api/doctores", doctores)
