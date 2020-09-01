/*
npm init
npm install express
npm install ejs
node main.js
*/

const express = require("express")

const sample = require("./routes/sample")

const app = express()
app.set("view engine", "ejs")
app.use(express.static('public'))

app.use("/", sample)

app.listen(3000, () =>{
   console.log("Start express server by specifying port 3000.")
})
