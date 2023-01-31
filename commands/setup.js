const description = 'Send a pong message to check if the bot is on.'

const init = (interaction, client) => {
    interaction.reply('Setup working!')
}

module.exports = { init, description }