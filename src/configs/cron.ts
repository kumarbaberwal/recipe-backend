import { CronJob } from 'cron'
import https from 'https'
import { ENV } from './env'

const cronJob = new CronJob(
    '*/14 * * * *', // Runs every 14 minutes
    () => {
        https
            .get(ENV.API_URL, (res) => {
                if (res.statusCode === 200) {
                    console.log('Cron job executed successfully');
                } else {
                    console.error(`Cron job failed with status code: ${res.statusCode}`);
                }
            })
            .on("error", (err) => {
                console.error('Error executing cron job:', err);
            });
    }
)


export default cronJob;