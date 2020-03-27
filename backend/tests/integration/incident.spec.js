const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('INCIDENT', () => {
	beforeEach(async () => {
		await connection.migrate.rollback();
		await connection.migrate.latest();
	});

	afterAll(async () => {
		await connection.destroy();
	});

	it('should be able to create a new incident', async () => {
		await request(app)
			.post('/incidents')
			.set('Authorization', 'ef71b58d')
			.send({
				title: 'Caso 10',
				description: 'Detalhes do caso',
				value: 40
			})
			.expect(200);
	});

	it('should be able to list all incidents', async () => {
		await request(app)
			.get('/incidents')
			.expect(200);
	});

	it('should list all incidents by profile', async () => {
		await request(app)
			.get('/profile')
			.set('Authorization', 'ef71b58d')
			.expect(200);
	});
});
