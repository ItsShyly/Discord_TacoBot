//import path from 'path'
//import dotenv from 'dotenv'
//dotenv.config()
////import 'dotenv'.config({ path: path.resolve(__dirname, '.env') })
////import 'dotenv'.config()
//const TOKEN = process.env.TOKEN
////const { Swiftcord } = require("swiftcord");
////const cord = new Swiftcord();

const { Client, Intents, MessageEmbed, MessageAttachment, VoiceChannel } = require('discord.js')
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_VOICE_STATES] })
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '.env') })
const TOKEN = process.env.TOKEN
const prefix = process.env.prefix
const Discord = require("discord.js");
const fs = require('fs');


//commands module
client.commands = new Discord.Collection()
const commandFiles = fs.readdirSync('./functions/commands').filter(file => file.endsWith('js'))
for (const file of commandFiles) {
  const command = require(`./functions/commands/${file}`)

  client.commands.set(path.parse(file).name, command)
}

//on message
client.on('message', msg => {
  client.commands.get('test').execute(msg)
})

//automations module
client.automations = new Discord.Collection()
const automatedFiles = fs.readdirSync('./functions/automated').filter(file => file.endsWith('js'))
for (const file of automatedFiles) {
  const automations = require(`./functions/automated/${file}`)

  client.automations.set(path.parse(file).name, automations)
}

//On Ready
client.on('ready', () => {
  console.log("connected as " + client.user.tag)
  client.user.setActivity("Javascript", { type: "PLAYING" })
  console.log("game changed to Javascript")
  console.log(client.user.tag + ' is ready')
  console.log('prefix:' + prefix)
})

// Join to Create
client.on('voiceStateUpdate', (oldState, newState) => {

  if (newState.channel?.id === '930545206753886248') {

    console.log(`- JTC: ${oldState.member.user.tag} connected to ${newState.channel.name}`)

    newState.guild.channels.create(`🧡︱${newState.member.user.username}'s Channel`, {



      type: 'GUILD_VOICE',
      parent: '741651275795398806',
      position: 11
    }).then(vc => {
      newState.setChannel(vc)
    })
    console.log(`- JTC: Temp Channel has been created`)
    console.log(`- JTC: ${oldState.member.user.tag} connected to 🧡︱${newState.member.user.username}'s Channel`)

  } else {
    if (oldState.channel?.name.startsWith('🧡︱')) {
      oldState.channel?.delete()

      console.log('- JTC: ' + oldState.member.user.tag + ' left temp channel')
      console.log(`- JTC: Temp Channel has been deletet`)

    }
  }

})

// On Air
client.on("voiceStateUpdate", (oldState, newState) => { // Listening to the voiceStateUpdate event

  const newJoined = newState.channel
  const oldJoined = oldState.channel

  if (newJoined && newState.member.user.id === '429730636517867530' && newJoined.name === '⚫︱Offline' && newJoined.parent.id === '741005927641251932') { // The member connected to a channel.

    console.log(`- ON AIR JOIN: ${oldState.member.user.tag} connected to ${newState.channel.name}`)

    newJoined.setName('🔴︱On Air')

    console.log('- ON AIR JOIN: changed' + newJoined.name + ' to 🔴︱On Air')

  } else {

    if (oldJoined && oldState.member.user.id === '429730636517867530' && oldJoined.name === '🔴︱On Air') { // The member disconnected from a channel.
      console.log(`- ON AIR LEFT: ${oldState.member.user.tag} disconnected from ${oldState.channel.name}`)

      newState.guild.channels.create('⚫︱Offline', {

        type: 'GUILD_VOICE',
        parent: '741005927641251932',
        position: 1
      })

      oldState.channel?.delete()

      console.log('- ON AIR LEFT: ' + oldJoined.name + ' has been deleted')
      console.log('- ON AIR LEFT: ⚫︱Offline has been created')
    }
  }

})








client.login(TOKEN);
