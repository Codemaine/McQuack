const { SlashCommandBuilder } = require("discord.js")
const exampleEmbed = {
        "type": "rich",
        "title": `Thanks for adding McQuack`,
        "description": `McQuack brings the fun to your server, by offering a wide range of games!

        **Get Started**
        To begin, someone with the Manage Server permission can use the **/setup** command add to set a channel for each game.
        Once that's set, your members can use the **/start** command to start a game! (If slash commands aren't showing up, make sure you have permission to Use Application Commands in this server)`,
        "color": 0x00FFFF,
        "author": {
            "name": `McQuack`,
            "icon_url": `https://i.ibb.co/zZLxJsS/Codemaine-an-icon-for-a-discord-bot-named-Mc-Quacky-in-a-cartoon-8c4d6170-6acb-4040-b2c7-f62db6d9f1d.png`
        }   
}

module.exports = { data: new SlashCommandBuilder()
                             .setName('hello')
                             .setDescription('Explains the purpose of the bot'), 
                            execute(interaction) {
                                interaction.reply({ embeds: [exampleEmbed] })
                            }
}