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
    return request(server).get('/rooms/4/reviews').then(response => {
      expect(response).toBeDefined();
    });
  });
  test('Data format should be an array', () => {
    return request(server).get('/rooms/4/reviews').then(response => {
      expect(Array.isArray(response.body)).toBeTruthy();
    });
  });
  test('Data should contain user informations/reviews/comments', () => {
    return request(server).get('/rooms/4/reviews').then((response) => {
      expect(Object.keys(response.body[0])).toEqual(["name", "picture", "date", "comment", "accuracy", "communication", "cleanliness", "location", "check_in", "value", "average"]);
    });
  });
});

