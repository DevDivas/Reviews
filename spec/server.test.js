const request = require('supertest');
const server = require('../server/app');

test('testing jest', () => {
  expect(true).toBe(true);
});

describe('Test for path', () => {
  test('It should response to GET method', () => {
    return request(server).get('/rooms/4/reviews').then(response => {
      expect(response.statusCode).toBe(201);
    });
  });
  test('Data should exist', () => {
    return request(server).get('/rooms/1/reviews').then(response => {
      expect(response).toBeDefined();
    });
  });
});
