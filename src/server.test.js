import { initServer } from './server';
import request from 'superagent';

const doRequest = (url, query) => new Promise((resolve, reject) => {
  request
  .get(url)
  .query(query) // query string
  .end((err, res) => {
    if (err) reject(err);
    resolve(res);
  });
})

function randomInt (low, high) {
  return Math.floor(Math.random() * (high - low) + low);
}

const port = randomInt(10000,20000);
const urlBase = `http://localhost:${port}/`;

let server;
beforeAll(() => {
  server = initServer(['test', 'case'], { port })
})
afterAll(() => server.stop())

it('should return matched OK', () => {
  return doRequest(urlBase, { text: 'test' })
  .then(resp => expect(resp.body).toEqual(['test']));
});

it('should return misses OK', () => {
  return doRequest(urlBase, { text: 'buffalo' })
  .then(resp => expect(resp.body).toEqual([]));
})
