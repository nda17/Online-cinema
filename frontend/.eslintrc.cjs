module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:prettier/recommended',
		'extends:next/core-web-vitals'
	],
	overrides: [
		{
			env: {
				node: true
			},
			files: ['.eslintrc.{js,cjs}'],
			parserOptions: {
				sourceType: 'script'
			}
		}
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: ['react'],
	rules: {
		'no-var': 'error',
		'prefer-const': 'warn',
		'react/prop-types': 'off',
		'react/react-in-jsx-scope': 'off',
		'prettier/prettier': [
			'warn',
			{
				endOfline: 'lf'
			}
		]
	}
}
