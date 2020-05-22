require('dotenv').config();

const Discord = require('discord.js');

const client = new Discord.Client();

const conf = {
	token: process.env.TOKEN,
	prefix: process.env.PREFIX
};

console.log('press "' + conf.prefix + '" and type a command for your bot!');


client.login(conf.token);

