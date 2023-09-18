const {
    Client,
    GatewayIntentBits,
} = require("discord.js");

// New client instance with Intents: [GatewayIntent: Guilds]
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

module.exports = client;