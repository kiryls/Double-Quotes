require('dotenv').config();

const Discord = require('discord.js');

const Client = Discord.Client();

const Config = {
	token: process.env.TOKEN,
	prefix: process.env.PREFIX
};

console.log('Hello world!' + '...and the prefix is ' + Config.prefix);


Client.login(Config.token);