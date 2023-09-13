const { SlashCommandBuilder } = require("discord.js");
const logger = require("../../utils/logger");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("user")
        .setDescription("Provides information about the user"),
    async execute(interaction) {
        logger.info("Command request: user");
        const reply = `This command was run by ${interaction.user.username}, who joined on ${interaction.member.joinedAt}`;
        await interaction.reply(
            reply
        );
        logger.info(`Command response: ${reply}`)
    },
};
