const Mock = require('mockjs');

module.exports = (req, res) => {
	res.json(
		Mock.mock({
			data: {
				'goods|6-10': [
					{
						id: '@id',
						title: '@csentence(3, 9)',
						label: '@cword(3,6)',
						price: {
							ultimately: '@float(3000,1,0,2)',
							original: '@float(3000,1,0,2)',
						},
						mean_rate: '@float(5,1,0,1)',
						cover: 'https://api.adorable.io/avatars/285' + '/@id()' + '.png',
					},
				],
			},
		}),
	);
};
