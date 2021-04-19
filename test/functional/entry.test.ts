describe('Main Test', () => {
  it('Return Start', async () => {
    const { body, status } = await global.testRequest.post('/start');
    expect(status).toBe(200);
    expect(body).toEqual({
      date: '2021-04-18',
      id: '1',
      meridiem: 'PM',
      time: '04:00',
    });
  });
  it('Return pause', async () => {
    const { body, status } = await global.testRequest.post('/pause');
    expect(status).toBe(200);
    expect(body).toEqual({
      date: '2021-04-18',
      id: '1',
      meridiem: 'PM',
      time: '04:00',
    });
  });
});
