const Mock = require('mockjs');

module.exports = (req, res) => {
	res.json(
		Mock.mock({
			'data|4-8': [
				{
					user_id: '@id',
					nickname: '@cname',
					label: '@cword(3,6)',
					'gender|1': [1, 2],
					age: '@natural(16, 45)',
					adress: '@city',
					'service|1-5': [
						{
							game: '英雄联盟',
							rank: '最强王者',
						},
					],
					price: '@float(1, 100, 0, 2)',
					audio: {
						url: 'https://ywm.leigod.com/voicesamples.m4a',
						duation: 7,
					},
					avatar: 'https://api.adorable.io/avatars/285' + '/@id()' + '.png',
				},
			],
			status: true,
		}),
	);
};
