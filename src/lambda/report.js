import { parse } from 'querystring';
import { WebClient } from '@slack/client';
import config from '../config';

const token = process.env.SLACK_TOKEN;
const web = new WebClient(token);

export function handler(event, context, callback) {
  const requestBody = parse(event.body);
  const isChannelPublic = requestBody.channel_name === 'privategroup';

  web.chat.postMessage({
    channel: config.adminChannelId,
    text: 'New report <!channel>',
    attachments: [{
      color: '#EB3636',
      fields: [
        {
          title: 'From',
          value: `<@${requestBody.user_id}>`,
        },
        isChannelPublic ? {
          title: 'Channel',
          value: `<#${requestBody.channel_id}|${requestBody.channel_name}>`,
        } : null,
        requestBody.text ? {
          title: 'Message',
          value: requestBody.text,
        } : null,
      ]
    }]
  })
  .then(() => {
    callback(null, {
      statusCode: 200,
      body:
        'The admins have been notified of your report. They will address it and respond as soon as possible'
    });
  })
  .catch(err => {
    console.error(err);
    callback(null, {
      statusCode: 200,
      body: 'Something went technically awry. Please try and contact one of the admins directly.'
    });
  });
}
