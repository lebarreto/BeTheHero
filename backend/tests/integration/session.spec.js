const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('SESSION', () => {
	beforeEach(async () => {
		await connection.migrate.rollback();
		await connection.migrate.latest();
	});

	afterAll(async () => {
		await connection.destroy();
	});

	it('should be able to log in the system', async () => {
		const response = await request(app)
			.post('/sessions')
			.send({
				id: 'ef71b58d'
			});

		expect(200);
	});
});
