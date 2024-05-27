'use strict'

import conn from "./db/conn.js";
import express from "express";
import cors from "cors";
import auth from './routes/authRoutes.js'
const app = express()

const PORT = 3000

app.use(express.json())
app.use(express.static('public'))
app.use(cors())

app.use('/auth', auth)

conn.sync().then(
    app.listen(PORT,console.log(`Servidor Rodando no localhost:${PORT}`))
).catch((err)=>{
    console.error(err)
})