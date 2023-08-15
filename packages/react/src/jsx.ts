/*
 * @Author: yanhengfu yanhengfu@jimengio.com
 * @Date: 2023-08-11 14:51:31
 * @LastEditors: yanhengfu yanhengfu@jimengio.com
 * @LastEditTime: 2023-08-15 09:46:37
 * @FilePath: \yhf_react\packages\react\src\jsx.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { REACT_ELEMENT_TYPE } from 'shared/ReactSymbols';
import {
	Key,
	Props,
	Ref,
	Type,
	ReactElement,
	ElementType
} from 'shared/ReactTypes';

//RectElement 构造函数
const ReactElement = (
	type: Type,
	key: Key,
	ref: Ref,
	props: Props
): ReactElement => {
	const element = {
		$$typeof: REACT_ELEMENT_TYPE,
		type,
		key,
		ref,
		props,
		_mark: 'yhf'
	};
	return element;
};

export const jsx = (type: ElementType, config: any, ...maybeChildren: any) => {
	let key: Key = null;
	let ref: Ref = null;
	const props: Props = {};

	for (const _key in config) {
		const val: any = config[_key];
		if (_key === 'key') {
			key = val + '';
			continue;
		}
		if (key === 'ref') {
			ref = val;
			continue;
		}

		if (Object.prototype.hasOwnProperty.call(config, _key)) {
			props[_key] = val;
		}
	}

	const maybeChildrenLength = maybeChildren.length;
	if (maybeChildrenLength) {
		if (maybeChildrenLength === 1) {
			props['children'] = maybeChildren[0];
		} else {
			props['children'] = maybeChildren;
		}
	}

	return ReactElement(type, key, ref, props);
};

export const jsxDev = jsx;
