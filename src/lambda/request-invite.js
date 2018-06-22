import { WebClient } from '@slack/client';
import config from '../config';

const token = process.env.SLACK_TOKEN;
const web = new WebClient(token);

export function handler(event, context, callback) {
  let data = {};

  const errorResponse = () => {
    console.error('event', event);
    console.error('data', data);
    callback(null, {
      statusCode: 500,
      body: 'error'
    });
  }

  try {
    data = JSON.parse(event.body);
  } catch (error) {
    console.log(error);
    return errorResponse();
  }

  if (!data.email || !data.link) {
    return errorResponse();
  }

  web.chat.postMessage({
    channel: config.adminChannelId,
    text: ':woman-raising-hand: New invite request:',
    attachments: [{
      fields: [
        {
          title: 'Email',
          value: data.email,
        },
        {
          title: 'URL',
          value: data.link,
        },
      ]
    }]
  })
  .then(() => {
    callback(null, {
      statusCode: 200,
      body: 'nice'
    });
  })
  .catch(err => {
    console.error(err);
    errorResponse();
  });
}
