import supertest from 'supertest'

describe('Entry Pausa', () =>{
  it('Return Entry', async() => {
    const {body, status } = await supertest(app).post('/entry')
    expect(status).toBe(200)
    expect(body).toBe({
      "date": "2021-04-18",
      "time": "04:00",
      "meridiem": "PM",
      "id":"1"
    })
  })
})