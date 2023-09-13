const { SlashCommandBuilder } = require("discord.js");
const logger = require("../../utils/logger");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Replies with Pong"),
    async execute(interaction) {
        logger.info("Command request: Ping!");
        await interaction.reply("Pong!");
        logger.info("Command response: Pong!");
    },
};
