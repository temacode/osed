const config = require('@taiga-ui/prettier-config');

module.exports = {
	...config,
	singleAttributePerLine: false,
	overrides: [
		...config.overrides,
		{
			files: ['*.js', '*.ts'],
			options: {
				printWidth: 120,
			},
		},
	],
}; 