const Mock = require('mockjs');

module.exports = (req, res) => {
	res.json(
		Mock.mock({
			data: {
				nickName: '@cname',
				imageUrl: 'https://api.adorable.io/avatars/285' + '/@id()' + '.png',
				memberNo: '@guid',
			},
		}),
	);
};
