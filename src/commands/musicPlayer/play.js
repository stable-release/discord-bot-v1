const { SlashCommandBuilder } = require("discord.js");
const logger = require("../../utils/logger");
const shoukaku = require("../../client/shoukaku");

module.exports = {
    data: new SlashCommandBuilder().setName("play").setDescription("play link")
        .addStringOption(option =>
            option.setName("track")
            .setDescription("song field")),
    async execute(interaction) {
        const node = shoukaku.getNode("auto");
        const player = await node.joinChannel({
            guildId: "1151497949679992843",
            channelId: "1151497949679992847",
            deaf: true
        });
    },
};
