const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');

// Simulating the app
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

// Add API endpoint
app.post('/api/add', (req, res) => {
  const num1 = parseFloat(req.body.num1) || 0;
  const num2 = parseFloat(req.body.num2) || 0;
  const result = num1 + num2;
  res.json({ result });
});

// Subtract API endpoint
app.post('/api/subtract', (req, res) => {
  const num1 = parseFloat(req.body.num1) || 0;
  const num2 = parseFloat(req.body.num2) || 0;
  const result = num1 - num2;
  res.json({ result });
});

describe('Calculator API Tests', () => {

  it('should add two numbers correctly', async () => {
    const response = await request(app)
      .post('/api/add')
      .send('num1=3&num2=2') // Form-urlencoded data
      .expect('Content-Type', /json/)
      .expect(200);
    expect(response.body.result).toBe(5);
  });

  it('should subtract two numbers correctly', async () => {
    const response = await request(app)
      .post('/api/subtract')
      .send('num1=5&num2=3') // Form-urlencoded data
      .expect('Content-Type', /json/)
      .expect(200);
    expect(response.body.result).toBe(2);
  });

  it('should handle blank inputs as zero', async () => {
    const response = await request(app)
      .post('/api/add')
      .send('num1=&num2=5') // One input is blank
      .expect('Content-Type', /json/)
      .expect(200);
    expect(response.body.result).toBe(5);
  });

});