import { config } from './wdio.conf';

exports.config = {
    ...config,
    ...{
        user: process.env.SAUCE_USERNAME,
        key: process.env.SAUCE_ACCESS_KEY,
        region: process.env.SAUCE_REGION,
        services: ['sauce'],
        capabilities: [{
            maxInstances: 5,
            browserName: 'chrome',
            browserVersion: 'latest',
            platformName: 'Windows 10',
        }]
    },
};