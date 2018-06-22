import { parse } from 'querystring';

export function handler(event, context, callback) {
  const parsedBody = parse(event.body);
  console.log(event);
  console.log(parsedBody);

  setTimeout(() => {
    callback(null, {
      statusCode: 200,
      body: 'ok',
    });
  }, 500);
}
