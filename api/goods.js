const Mock = require('mockjs');

// const type = ['fresh', '2', '5', '10'];

module.exports = (req, res) => {
	const types = req.query.type.split(',');
	res.json(
		Mock.mock({
			data: {
				'goods|6-10': [
					{
						id: '@id',
						title: '@csentence(3, 9)',
						label: '@cword(3,6)',
						price: {
							ultimately: '@float(1,3000,0,2)',
							original: '@float(1,3000,0,2)',
						},
						types,
						mean_rate: '@float(1,5,0,1)',
						cover: 'https://api.adorable.io/avatars/285' + '/@id()' + '.png',
					},
				],
			},
			status: true,
		}),
	);
};
