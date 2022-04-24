const { configure } = require('@essex/webpack-config')

const extendConfiguration = config => ({
	...config,
	entry: ['@babel/polyfill', './src/index.tsx'],
})

const webpackConfig = configure({
	pnp: true,
	extendConfiguration,
})

module.exports = webpackConfig