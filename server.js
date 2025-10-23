require("dotenv").config()
const express = require("express")
const cors = require("cors")
const fs = require("fs")
const bot = require("./bot")

const app = express()

app.use(cors())
app.use(express.json())

function getCode() {
    const data = JSON.parse(fs.readFileSync("code.json", "utf8"));
    return data["code"]
}

async function sendResult(){
    await bot.telegram.sendMessage(process.env.ADMIN_ID, "Sended message")
}

app.get("/", async (req, res) => {
    res.send("Server is live.")
})

app.post("/verify", (req, res) => {
    try {
        const { code } = req.body;
        res.status(code == getCode() ? 200 : 403).send({ "access": code == getCode() })
    } catch (error) {
        res.status(500).send({ "message": "Erro on verifying code." })
        console.log(error)
    }
})


app.listen(process.env.PORT || 4000, () => { console.log(`Server is live on: http://localhost:${process.env.PORT || 4000}`) })