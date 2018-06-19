import { parse } from 'querystring';
import { WebClient } from '@slack/client';

const token = process.env.SLACK_TOKEN;
const web = new WebClient(token);

export function handler(event, context, callback) {
  const requestBody = parse(event.body);

  web.groups
    .list()
    .then(res => {
      return res.groups.find(group => group.name === 'admins');
    })
    .then(adminGroup => {
      const isPrivateChannel = requestBody.channel_name === 'privategroup';

      const text = [
        ':warning: <!channel> New report:',
        `*From:* <@${requestBody.user_id}>`,
        isPrivateChannel ? null : `*Channel:* <#${requestBody.channel_id}|${requestBody.channel_name}>`,
        requestBody.text ? `*Message:* ${requestBody.text}` : null,
      ].filter(Boolean).join('\n');

      return web.chat.postMessage({
        channel: adminGroup.id,
        text
      });
    })
    .then(() => {
      callback(null, {
        statusCode: 200,
        body:
          'Your message has been shared with the admins. When one of them is next available - they will respond.'
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
