const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
	beforeEach(async () => {
		await connection.migrate.rollback();
		await connection.migrate.latest();
	});

	afterAll(async () => {
		await connection.destroy();
	});

	it('should be able to create a new ONG', async () => {
		const response = await request(app)
			.post('/ongs')
			.send({
				name: 'APAD2',
				email: 'contato@apad.com.br',
				whatsapp: '70302933712',
				city: 'Rio do Sul',
				uf: 'SC'
			});

		expect(response.body).toHaveProperty('id');
		expect(response.body.id).toHaveLength(8);
	});

	it('should list all ONGs', async () => {
		await request(app)
			.get('/ongs')
			.set('Accept', 'application/json')
			.expect('Content-Type', /json/)
			.expect(200);
	});
});
