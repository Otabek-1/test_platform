const { Telegraf } = require("telegraf");
require("dotenv").config();
const fs = require("fs");

const bot = new Telegraf(process.env.BOT_TOKEN);

if (!fs.existsSync("code.json")) {
    fs.writeFileSync("code.json", JSON.stringify({}), "utf8");
}

function generateCode() {
    return Math.floor(Math.random() * 100000);
}

function saveCode(code) {
    const data = JSON.parse(fs.readFileSync("code.json", "utf8"));
    data["code"] = code;
    fs.writeFileSync("code.json", JSON.stringify(data, null, 2), "utf8");
}

bot.start(async (ctx) => {
    await ctx.reply(`Sizning ID: ${ctx.message.from.id}`);
});

bot.command("code", async (ctx) => {
    const is_admin = process.env.ADMIN_ID == ctx.message.from.id;
    if (is_admin) {
        const code = generateCode();
        saveCode(code);
        await ctx.reply(`Code for test: <code>${code}</code>`, { parse_mode: "HTML" });
    }
});

bot.launch();
console.log("Bot is live 🚀");

module.exports = bot
