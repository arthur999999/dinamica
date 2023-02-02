import supertest from "supertest";
import app from "index";

describe('testando listagem de frutas', ()=> {

    it('requsição GET', async ()=> {

        const idFruit = 1

        const result = await supertest(app).get(`/fruits/${idFruit}`)

        console.log(result.body)

        expect(result.status).toBe(200)

        expect(result.body).toEqual(
            
            expect.objectContaining({
                    id: expect.any(Number),
                    name: expect.any(String),
                    price: expect.any(Number)
            })
        )

    })

})