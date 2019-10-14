const Mock = require('mockjs');

// const type = ['fresh', '2', '5', '10'];

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
							ultimately: '@float(1,3000,0,2)',
							original: '@float(1,3000,0,2)',
						},
						fresh: req.query.type === 'fresh',
						'type|1':
							req.query.type === 'fresh'
								? [2, 5, 10]
								: req.query.type.split(','),
						mean_rate: '@float(1, 4, 0, 1)',
						cover: 'https://api.adorable.io/avatars/285' + '/@id()' + '.png',
						'pictures|2-6': [
							{
								url: 'https://api.adorable.io/avatars/285' + '/@id()' + '.png',
								alt: '@csentence(3, 9)',
							},
						],
					},
				],
			},
			status: true,
		}),
	);
};
