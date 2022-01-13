const prefix = process.env.prefix
module.exports.name = 'test';
module.exports.execute = async (msg, args) => {

  if (msg.content === prefix + 'test') {
    msg.reply('Test erfolgreich!')
  }
};

