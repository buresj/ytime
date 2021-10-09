const path = require("path")
const express = require("express")
const app = express()
var cors = require("cors")
const port = 3000

app.use(cors())

app.use("/static", express.static(path.join(__dirname, "public")))

app.get("/", (req, res) => {
  res.send("YTime up")
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
