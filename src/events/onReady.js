const { Events } = require("discord.js");
const logger = require("../utils/logger");

module.exports = {
    name: Events.ClientReady,
    once: true,
    async execute(client) {
        logger.info(`${client.user.tag} connected!`);
        logger.info("Awaiting Events...");
    }
}