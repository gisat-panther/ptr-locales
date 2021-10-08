import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import filesize from 'rollup-plugin-filesize';
import json from '@rollup/plugin-json';

const env = process.env.NODE_ENV;
const pkg = require('./package.json');

const lodashExternal = ['lodash/forIn'];

export default {
	input: 'src/index.js',
	external: [
		'react',
		'i18next',
		'react-i18next',
		/@babel\/runtime/,
		...lodashExternal,
	],
	output: {
		file: {
			es: pkg.module,
			cjs: pkg.main,
		}[env],
		format: env,
		globals: {
			// 'lodash/random': '_.random'
		},
		exports: 'named' /** Disable warning for default imports */,
		sourcemap: true,
	},
	plugins: [
		babel({
			plugins: ['lodash'],
			babelHelpers: 'runtime',
		}),
		commonjs({
			include: 'node_modules/**',
		}),
		json(),
		filesize(),
	],
};
