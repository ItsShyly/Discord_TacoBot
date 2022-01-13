
//client.on('guildMemberAdd', async member => {
//  const channel = member.guild.channels.cache.get('930116729709936651');
//  if (!channel) return;
//
//// inside a command, event listener, etc.
//  const exampleEmbed = new MessageEmbed()
//    .setColor('#ff8800')
//    .setTitle('Willkommen auf dem Server! @' +  member.user.username)
////    .setImage(member.user.avatarURL)
////    .setDescription(member.user.username + 'ist dem Server beigetreten')
//.setTimestamp()
//    .setFooter({ text: 'Viel Spaß auf dem Server!', iconURL: 'https://i.imgur.com/AfFp7pu.png' });
//
//  channel.send({ embeds: [exampleEmbed] })
//
//});
//const Guild = client.guilds.cache.get("GuildID"); // Getting the guild.
//const Member = Guild.members.cache.get("UserID"); // Getting the member.
//
//client.on('voiceStateUpdate', (newState, oldState) => {
//
//    if (newState.member.id === '429730636517867530') {
//
//      const Member = Guild.members.cache.get("429730636517867530")
//      if (Member.voice.channel) { // Checking if the member is connected to a VoiceChannel.
//        // The member is connected to a voice channel.
//        // https://discord.js.org/#/docs/main/stable/class/VoiceState
//        console.log(`${Member.user.tag} is connected to ${Member.voice.channel.name}!`)
//
//        console.log('Joined')
//
//      } else {
//        console.log('Test')
//      }
//    }
//
//  }
//)


//todo: rework