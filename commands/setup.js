const description = 'Send a pong message to check if the bot is on.'

const init = (interaction, client) => {

    const exampleEmbed = {
        "type": "rich",
        "title": `Bot Setup`,
        "description": `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a leo eget velit pretium porttitor pulvinar ut erat. Nam mi ante, ultricies non tempor quis, facilisis in purus. Ut pellentesque fermentum metus a laoreet. Pellentesque bibendum orci dictum lectus convallis, id posuere metus eleifend. Maecenas in consectetur nisi. Sed venenatis, ipsum quis efficitur commodo, lacus augue rutrum neque, id porttitor enim mauris ac mauris. Sed eget nulla sed velit accumsan mattis ac sit amet felis. Integer dictum enim ante, in dapibus nisl tempor sed. Mauris odio mauris, semper vehicula porttitor ac, tincidunt eget dolor. Sed pharetra augue nunc.

        Vivamus vel porttitor metus. Phasellus rhoncus vel mauris in pharetra. Phasellus scelerisque mauris vitae iaculis pulvinar. Vivamus tincidunt sapien quis turpis lacinia ullamcorper. Donec vitae placerat lectus. Vivamus a faucibus tortor. Donec venenatis, sapien in commodo consequat, felis mi dignissim velit, at condimentum massa ante eget ante. Ut justo nunc, volutpat quis dignissim non, congue eget elit. Nam laoreet tempus congue.`,
        "color": 0x00FFFF,
        "author": {
            "name": `McQuack`,
            "icon_url": `https://i.ibb.co/zZLxJsS/Codemaine-an-icon-for-a-discord-bot-named-Mc-Quacky-in-a-cartoon-8c4d6170-6acb-4040-b2c7-f62db6d9f1d.png`
        }
    
    }
    interaction.reply({ embeds: [exampleEmbed] })
}

module.exports = { init, description }