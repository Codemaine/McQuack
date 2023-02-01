const { SlashCommandBuilder, ChannelType } = require("discord.js")
const { execute } = require("./hello")

const description = 'Explains the purpose of the bot'
const options = [{
    name: "game",
    description: "Select the type of game you want for the channel",
    type: 3,
    required: true,
    autocomplete: true,
    choices: { name: "Truth or Dare" }
}]

const init = (interaction, client) => {
    interaction.reply("Hey there! I'm the setup function")
}

module.exports = {
    data: new SlashCommandBuilder()
        .setName('setup')
        .setDescription('Setup the channels for the games!')
        .addStringOption(option =>
            option.setName('game')
                .setDescription('Select the game for the channel')
                .setRequired(true)
                .addChoices(
                    { name: 'Truth Or Dare', value: 'T or D' },
                    { name: 'Trivia', value: 'T' },
                    { name: 'Never Have I Ever', value: 'NHIE' },
                ))
        .addChannelOption(option =>
            option.setName('channel')
                .setDescription('The channel for the game')
                .setRequired(true)
                .addChannelTypes(ChannelType.GuildText)),
    execute(interaction) {
        console.log(interaction.options)
        interaction.reply(`Hey! You picked ${interaction.options.getString("game")} for #${interaction.options.getChannel("channel").name}`)
    }


}