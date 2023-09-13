const now = new Date();
const pino = require("pino");
const logger = pino({
    transport: {
        targets: [
            {
                target: "pino-pretty",
                options: {
                    colorize: false,
                    destination: `${__dirname}/logs/${now.getFullYear()}-${now.getMonth()}-${now.getDate()} ${now.getTime()}.log`,
                    minimumLevel: "trace",
                },
            },
            {
                target: "pino-pretty",
                options: {
                    colorize: true,
                    destination: 1,
                },
            },
        ],
    },
});

module.exports = logger;