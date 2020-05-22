require('dotenv').config();

const Discord = require('discord.js');

const client = new Discord.Client();

const conf = {
	token: process.env.TOKEN,
	prefix: process.env.PREFIX
};

console.log('Hello world!' + '...and the prefix is ' + conf.prefix);


client.login(conf.token);

//"url": "git+https://github.com/kiryls/Double-Quotes.git"