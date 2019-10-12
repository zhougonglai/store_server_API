const Mock = require('mockjs');

module.exports = (req, res) => {
	res.json(
		Mock.mock({
			'data|4-8': ['https://dummyimage.com/828x440/02adea&text=@cword(3,6)'],
			status: true,
		}),
	);
};
