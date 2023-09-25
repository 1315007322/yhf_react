import path from 'path';
import fs from 'fs';

import ts from 'rollup-plugin-typescript2';
import cjs from '@rollup/plugin-commonjs';

const distPath = path.resolve(__dirname, '../../dist/node_modules');
const pkgPath = path.resolve(__dirname, '../../packages');

//获取 包名 所在 文件夹的位置
export function resolvePkgPath(pkgName, isDist) {
	//获取 该包产物的位置
	if (isDist) {
		return `${distPath}/${pkgName}`;
	}

	//否则  获取 该包 所在位置

	return `${pkgPath}/${pkgName}`;
}

/**
 * @param {*} pkgName 包名
 * @returns  该包的 package 内容  Object 形式
 */
export function getPackageJson(pkgName) {
	//获取 该包的 package 文件 位置
	const pkgJsonPath = `${resolvePkgPath(pkgName)}/package.json`;

	//读取该json 内容
	return JSON.parse(fs.readFileSync(pkgJsonPath, 'utf-8'));
}

// 基础的插件 rollup
export function getBaseRollupPlugins({ typescript = {} } = {}) {
	return [cjs(), ts(typescript)];
}
