const { Client, Intents } = require('discord.js')
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] })
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '.env') })
const TOKEN = process.env.TOKEN

client.on('ready', () => {
  console.log("connected as " + client.user.tag)
})

client.on('message', msg => {
  if (msg.content === '!test') {
    msg.reply('Test!')
  }
})

client.on("ready", () => {
  console.log("- Game changed ");
  client.user.setActivity("Javascript", { type: "PLAYING" });
})



client.login(TOKEN);
