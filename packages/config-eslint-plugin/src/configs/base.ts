import { existsSync } from 'fs'
import { join } from 'path'
import { msHeader } from './msHeader'

const HEADER_OVERRIDE = join(process.cwd(), 'header.js')
const headerFile = existsSync(HEADER_OVERRIDE) ? HEADER_OVERRIDE : msHeader

/** Essex Rule Overrides */
const essexRules: any = {
	'header/header': [2, headerFile],
}

const commonRuleSets: any[] = [
    'prettier'
]
const tsRuleSets: string[] = [
	'plugin:import/typescript',
	'plugin:@typescript-eslint/recommended',
]

const baseConfig = {
	plugins: [
        'eslint-plugin-header',
		'eslint-plugin-import',
		'eslint-plugin-jsx-a11y',
		'eslint-plugin-react',
		'eslint-plugin-react-hooks',
		'eslint-plugin-jest',
		'@typescript-eslint/eslint-plugin',
	],
    parser: '@typescript-eslint/parser',
    extends: [...commonRuleSets],
    env: {
		browser: true,
		commonjs: true,
		es6: true,
		node: true,
		'jest/globals': true,
	},
	settings: {
		react: {
			version: 'detect',
		},
		jest: {
			version: 26,
		},
	},
    overrides: [
		{
			files: ['**/*.ts?(x)'],
			parser: '@typescript-eslint/parser',
			extends: [...commonRuleSets, ...tsRuleSets],
			parserOptions: {
				ecmaVersion: 2018,
				sourceType: 'module',
				ecmaFeatures: {
					jsx: true,
				},
				// typescript-eslint specific options
				warnOnUnsupportedTypeScriptVersion: true,
			},
			// If adding a typescript-eslint version of an existing ESLint rule,
			// make sure to disable the ESLint rule here.
			rules: {
                ...essexRules,
            }
        },
        {
            files: ['**/*.js?(x)'],
			extends: [...commonRuleSets],
			parser: 'babel-eslint',
			parserOptions: {
				ecmaVersion: 2018,
				sourceType: 'module',
				ecmaFeatures: {
					jsx: true,
				},
			},
			// If adding a typescript-eslint version of an existing ESLint rule,
			// make sure to disable the ESLint rule here.
            rules: {
                ...essexRules,
            },
        },
    ],
}

export default baseConfig