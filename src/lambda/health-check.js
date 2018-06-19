import { parse } from 'querystring';

export function handler(event, context, callback) {
  const parsedBody = parse(event.body);
  console.log(event);
  console.log(parsedBody);

  callback(null, {
    statusCode: 200,
    body: `Hey! It's all good.`,
  });
}
