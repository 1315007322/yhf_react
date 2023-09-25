//react 打包 脚本文件

import generatePackageJson from 'rollup-plugin-generate-package-json';
import { getBaseRollupPlugins, resolvePkgPath } from './utils';

const { name, module } = getPackageJSON('react');

//react 包所在 路径   (打包前)
const pkgPath = resolvePkgPath(name);
//react 包产物的 路径 (打包后)
const pkgDistPath = resolvePkgPath(name, true);

export default [
	{
		input: `${pkgPath}/${module}`,
		output: {
			file: `${pkgDistPath}/index.js`,
			name: 'index.js',
			format: 'umd'
		},
		plugins: [
			...getBaseRollupPlugins(),
			generatePackageJson({
				inputFolder: pkgPath,
				outputFolder: pkgDistPath,
				baseContents: ({ name, description, version }) => ({
					name,
					description,
					version,
					main: 'index.js'
				})
			})
		]
	},
	// jsx-runtime
	{
		input: `${pkgPath}/src/jsx.ts`,
		output: [
			// jsx-runtime
			{
				file: `${pkgDistPath}/jsx-runtime.js`,
				name: 'jsx-runtime.js',
				formate: 'umd'
			},
			// jsx-dev-runtime
			{
				file: `${pkgDistPath}/jsx-dev-runtime.js`,
				name: 'jsx-dev-runtime.js',
				formate: 'umd'
			}
		],
		plugins: getBaseRollupPlugins()
	}
];
