require("dotenv").config();
const fs = require("node:fs");
/**
 * Logging Order:
 * Fatal
 * Error
 * Warn
 * Info
 * Debug
 * Trace
 *
 * ie. logging.info() shows Fatal logs but will not show Debug logs
 */
const logger = require("./utils/logger");

const {
    Client,
    Collection,
    Events,
    GatewayIntents,
    GatewayIntentBits,
} = require("discord.js");

// New client instance with Intents: [GatewayIntent: Guilds]
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// Commands handling
client.commands = new Collection();

const foldersPath = `${__dirname}/commands`;
const commandsFolders = fs.readdirSync(foldersPath);

for (const folder of commandsFolders) {
    const commandsPath = `${foldersPath}/${folder}`;
    const commandFiles = fs
        .readdirSync(commandsPath)
        .filter((file) => file.endsWith(".js"));
    for (const file of commandFiles) {
        const filePath = `${commandsPath}/${file}`;
        const command = require(filePath);
        // Create a new item in collection with key: command name, value: exported module
        if ("data" in command && "execute" in command) {
            client.commands.set(command.data.name, command);
        } else {
            logger.warn(
                `The command at ${filePath} is missing a required "data" or "execute" property.`
            );
        }
    }
}

// Events handler
const eventsPath = `${__dirname}/events`;
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const filePath = `${eventsPath}/${file}`;
	const event = require(filePath);
    logger.info(`Event loaded ${file}`)
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}

// Log in to Discord with token
client
    .login(process.env.TOKEN)
    .then(logger.info("Initiating connection..."))
    .catch((err) =>
        logger.error(err, "An unexpected error occurred while connecting")
    );