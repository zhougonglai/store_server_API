const Mock = require('mockjs');

module.exports = (req, res) => {
	res.json(
		Mock.mock({
			'data|4-8': ['@image(822x220, @color, #FFF, png, @csentence(3, 7))'],
			status: true,
		}),
	);
};
