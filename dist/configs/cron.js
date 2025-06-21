"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cron_1 = __importDefault(require("cron"));
const https_1 = __importDefault(require("https"));
const env_1 = require("./env");
const cronJob = new cron_1.default.CronJob('*/14 * * * *', // Runs every day at midnight
() => {
    https_1.default
        .get(env_1.ENV.API_URL, (res) => {
        if (res.statusCode === 200) {
            console.log('Cron job executed successfully');
        }
        else {
            console.error(`Cron job failed with status code: ${res.statusCode}`);
        }
    })
        .on("error", (err) => {
        console.error('Error executing cron job:', err);
    });
});
exports.default = cronJob;
