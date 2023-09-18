const { Shoukaku, Connectors } = require("shoukaku");
const client = require("./client");

// Nodes for Lavalink service
const Nodes = [{
    name: "Localhost",
    url: "localhost:2333",
    auth: `${process.env.LAVALINK_AUTH}`,
}]

// Initialize Shoukaku Client
const shoukaku = new Shoukaku(new Connectors.DiscordJS(client), Nodes);

module.exports = shoukaku;