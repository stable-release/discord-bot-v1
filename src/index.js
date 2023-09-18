require("dotenv").config();
const { ShardingManager } = require("discord.js");
const logger = require("./utils/logger");

const manager = new ShardingManager(`${__dirname}/App.js`, { token: process.env.TOKEN });

manager.on("shardCreate", shard => logger.info(`Launched shard ${shard.id}`));

manager.spawn();