const generateUniqueId = require('../../src/utils/generateUniqueId');

describe('Generate unique id', () => {
	it('should generate an unique id', () => {
		const id = generateUniqueId();

		expect(id).toHaveLength(8);
	});
});
