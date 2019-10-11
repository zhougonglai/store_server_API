const Mock = require('mockjs');

module.exports = (req, res) => {
	res.json(
		Mock.mock({
			'data|4-8': [
				'https://imgslim.geekpark.net/uploads/image/file/57/43/5743dbbad9f70f1ed9fc42b4c6ae6ea9.jpg',
			],
			status: true,
		}),
	);
};
