require("dotenv").config()
const express = require("express")
const cors = require("cors")
const fs = require("fs")
const bot = require("./bot")
const tests = require("./tests")
const multer = require("multer");
const axios = require("axios");

const app = express()

app.use(cors())
app.use(express.json())

const upload = multer({ dest: "uploads/" });

function getCode() {
    const data = JSON.parse(fs.readFileSync("code.json", "utf8"));
    return data["code"]
}

async function sendResult() {
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

app.get("/tests", (req, res) => {
  try {
    const { limit } = req.query;
    let tests_arr = [];

    while (tests_arr.length < limit && tests_arr.length < tests.length) {
      const test = tests[Math.floor(Math.random() * tests.length)];
      const exists = tests_arr.some(t => t.id === test.id); // ✅ to‘g‘rilandi
      if (!exists) {
        tests_arr.push(test);
      }
    }

    res.send(tests_arr);
  } catch (error) {
    console.log("Error in /tests:", error);
    res.status(500).send({ error: "Server error" });
  }
});


app.post("/submit", upload.single("file"), async (req, res) => {
  const filePath = req.file.path;
  const originalName = req.file.originalname || "test.pdf"; // ← bu satr qo‘shildi
  const newPath = `uploads/${originalName}`; // ← yangi fayl nomi
  const BOT_TOKEN = process.env.BOT_TOKEN;
  const CHANNEL_ID = process.env.CHANNEL_ID;

  try {
    // vaqtinchalik faylni original nom bilan qayta nomlash
    await fs.promises.rename(filePath, newPath);

    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendDocument`;

    const FormData = require("form-data");
    const form = new FormData();
    form.append("chat_id", CHANNEL_ID);
    form.append("document", fs.createReadStream(newPath)); // ← endi newPath
    form.append("caption", "📄 Yangi PDF fayl yuklandi!");

    const response = await axios.post(url, form, {
      headers: form.getHeaders(),
    });

    // ✅ Telegramga yuborilgandan keyin faylni o‘chir
    await fs.promises.unlink(newPath);

    res.status(200).json({
      message: "Fayl yuborildi va uploads dan o‘chirildi ✅",
      telegramResponse: response.data,
    });
  } catch (error) {
    console.error("Telegramga yuborishda xatolik:", error.response?.data || error);
    
    // ❗ Xatolik bo‘lsa ham faylni o‘chir
    try {
      await fs.promises.unlink(newPath);
    } catch (e) {
      console.warn("Faylni o‘chirishda muammo:", e.message);
    }

    res.status(500).json({ error: "Fayl yuborishda xatolik yuz berdi ❌" });
  }
});


app.listen(process.env.PORT || 4000, () => { console.log(`Server is live on: http://localhost:${process.env.PORT || 4000}`) })