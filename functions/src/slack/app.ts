import * as functions from 'firebase-functions';
import { App, ExpressReceiver } from '@slack/bolt';

const config = functions.config();

export const expressReceiver = new ExpressReceiver({
    signingSecret: config.slack.secret,
    endpoints: '/events',
    processBeforeResponse: true,
});

const app = new App({
    receiver: expressReceiver,
    token: config.slack.token,
});

app.message(/ドーナツ|ドーナッツ/, async ({ message, client }) => {
    await client.reactions.add({
        name: 'doughnut',
        channel: message.channel,
        timestamp: message.ts,
    })
});