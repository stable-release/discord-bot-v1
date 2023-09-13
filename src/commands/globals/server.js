const { SlashCommandBuilder } = require("discord.js");
const logger = require("../../utils/logger");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("server")
        .setDescription("Provides information about the server"),
    async execute(interaction) {
        logger.info("Command request: server");
        const reply = `This server is ${interaction.guild.name} and has ${interaction.guild.memberCount} members`;
        await interaction.reply(reply);
        logger.info(`Command response: ${reply}`);
    },
};
