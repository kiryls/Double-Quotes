require('dotenv').config();

const Discord = require("discord.js");

const client = new Discord.Client();

const conf = {
	token: process.env.TOKEN,
	prefix: process.env.PREFIX
};

const people = require("../assets/approved.json");

const unito_logo = "https://i.imgur.com/6Q7LKpZ.png";


client.on("ready", () => {
	console.log(`'Double Quotes' has started. . .`);

	client.user.setActivity(`...with wisdom`);
});

client.on("guildCreate", guild => {
	// This event triggers when the bot joins a guild.
	console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members.`);
	client.user.setActivity(`with wisdom...`);
})

client.on("guildDelete", guild => {
	// This event triggers when the bot is removed from a guild.
	console.log(`I have been removed from: ${guild.name} (id: ${guild.id}).`);
	client.user.setActivity(`Serving ${client.guilds.size} servers.`);
})

// ##############################################################################
// ################################## MESSAGES ##################################
// ##############################################################################

client.on("message", async message => {
	if (message.author.bot)
		return;

	if (message.content.indexOf(conf.prefix) !== 0)
		return;

	const args = message.content.slice(conf.prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();

	for (let i = 0; i < people.length; i++) {
		const id = people[i].id;
		if (command === id) {

			if (args[0] === "-s")
				message.delete().catch(O_o => { });


			var img = unito_logo;
			if (people[i].image != null)
				img = people[i].image;


			const embed = new Discord.MessageEmbed()
				.setColor(people[i].color)
				.setTitle(people[i].quotes[Math.floor(Math.random() * people[i].quotes.length)])
				.setDescription("\u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b ~ " + people[i].first + " " + people[i].last)
				.setThumbnail(img);

			message.channel.send(embed);
		}
	}

	if (command === "sneak") {
		const sayMessage = args.join(" ");
		message.delete().catch(O_o => { });
		message.channel.send(sayMessage);
	}

	if (command === "info") {
		const embed = new Discord.MessageEmbed()
			.setColor('#0099ff')
			.setTitle('~ Double Quotes ~')
			.setAuthor('kiryls', 'https://i.imgur.com/PQ0IdSo.jpg', 'https://discord.js.org')
			.setDescription('A small bot with great wisdom.')
			.setThumbnail('https://i.imgur.com/4zb5wNj.png')
			.addFields(
				{ name: '\u200B', value: '\u200B' },
				{ name: '``?sneak <something>``', value: 'Just try it...' },
				{ name: "``?person [-s]``", value: "Retrieve a random quote of a person if there is such an instance in the database. **-s** option makes it sneaky ;)" },
				{ name: '``?suggest <person> <quote>``', value: 'Soon...' },
				{ name: '``?all``', value: 'See all the people currently in the database.' }
			)
			.setTimestamp()
			.setFooter('');


		const exampleEmbed = {
			color: 0x0099ff,
			title: '~ Double Quotes ~',
			author: {
				name: 'kiryls',
				icon_url: 'https://i.imgur.com/PQ0IdSo.jpg',
				url: 'https://discord.js.org/kiril#7092',
			},
			description: 'A small bot with great wisdom.',
			thumbnail: {
				url: 'https://i.imgur.com/4zb5wNj.png',
			},
			fields: [
				{
					name: '\u200b',
					value: '\u200b',
				},
				{
					name: '``?sneak <something>``',
					value: 'Just try it...',
				},
				{
					name: "``?person [-s]``",
					value: "Retrieve a random quote of a person if there is such an instance in the database. **-s** option makes it sneaky ;)",
				},
				{
					name: '``?suggest <person> <quote>``',
					value: 'Soon...',
				},
				{
					name: '``?all``',
					value: 'See all the people currently in the database.',
				},
				
			],
			timestamp: new Date(),
			footer: {
				text: 'Add me kiril#7092 | [github page](https://github.com/kiryls/Double-Quotes)',
			},
		};




		message.channel.send({embed : exampleEmbed});
	}

	if (command === "all") {
		let allThePeople = "";

		for (let i = 0; i < people.length; i++)
			allThePeople += "**" + people[i].id + "**" + ": " + people[i].first + " " + people[i].last + '\n';

		message.channel.send(allThePeople);
	}

});

client.login(conf.token);

