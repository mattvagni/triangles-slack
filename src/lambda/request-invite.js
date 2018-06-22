import config from '../config';

export function handler(event, context, callback) {
  const data = event.body;

  const errorResponse = () => {
    callback(null, {
      statusCode: 500,
      body: 'error'
    });
  }

  if (!data.email || !data.link) {
    return errorResponse();
  }

  web.chat.postMessage({
    channel: config.adminChannelId,
    text: ':woman-raising-hand: New invite request:',
    attachments: [{
      color: '#FF0000',
      fields: [
        {
          title: 'Email',
          value: data.email,
        },
        {
          title: 'Link',
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
