const express = require("express")
const cors = require("cors")
const app = express()
const QR_Router = require("./routers/QR_Router")
require("dotenv").config();
const port = process.env.PORT || 5000;
app.use(express.json())
app.use(cors())
app.use("/api", QR_Router);
app.use("/api/qrcodes", express.static("qrcodes"));
app.listen(port,() => {
    console.log(`APP running on PORT = ${port}`)
})