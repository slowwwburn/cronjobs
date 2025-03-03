const axios = require('axios');

const SERVICES = [
    'https://sharelink-auth.onrender.com/health',
    'https://sharelink-campaigns.onrender.com/health',
    'https://sharelink-integrations.onrender.com/health',
    'https://sharelink-notifications.onrender.com/health',
    'https://sharelink-wallet.onrender.com/health'
];

async function wakeUp() {
    for (const url of SERVICES) {
        try {
            const response = await axios.head(url);
            console.log(`Wake-up ping sent to ${url}. Status: ${response.status}`);
        } catch (error) {
            console.error(`Error waking up ${url}:`, error.message);
        }
    }
}

// Run the job every 10 minutes
setInterval(wakeUp, 10 * 60 * 1000);

console.log('Render cron job started...');
