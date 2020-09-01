const express = require("express")

// routes の読み込み
const sample = require("./routes/sample")
const users = require("./routes/users")

const app = express()
app.set("view engine", "ejs")
app.use(express.static('public'))

// path と routes の紐付け
app.use("/", sample)
app.use("/users", users)

app.listen(3000, () =>{
   console.log("Start express server by specifying port 3000.")
})
