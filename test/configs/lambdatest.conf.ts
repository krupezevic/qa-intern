import { config } from './wdio.conf';

exports.config = {
     ...config,
    user: process.env.LT_USERNAME,
    key: process.env.LT_ACCESS_KEY,
    logFile : './logDir/api.log',
    services: [
        ['lambdatest', {
            tunnel: true
        }]
    ],
};