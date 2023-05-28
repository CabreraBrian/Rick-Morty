const app = require("../src/app");
const session = require("supertest");
const agent = session(app) 

describe("test de RUTAS", ()=>{
    describe('GET /rickandmorty/character/:id', ()=>{
        it( 'Responde con status: 200', async ()=>{
            await agent.get('/rickandmorty/character/1').expect(200);
        });
        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async ()=>{
            const response = (await agemt.get('/rickandmorty/character/1')).body;
            expect(response).toHaveProperty("id");
            expect(response).toHaveProperty("name");
            expect(response).toHaveProperty("species");
            expect(response).toHaveProperty("gender");
            expect(response).toHaveProperty("status");
            expect(response).toHaveProperty("origin");
            expect(response).toHaveProperty("image");
        });
    });
});