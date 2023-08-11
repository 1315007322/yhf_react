/*
 * @Author: yanhengfu yanhengfu@jimengio.com
 * @Date: 2023-08-11 14:51:31
 * @LastEditors: yanhengfu yanhengfu@jimengio.com
 * @LastEditTime: 2023-08-11 18:19:17
 * @FilePath: \yhf_react\packages\react\src\jsx.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { REACT_ELEMENT_TYPE } from 'shared/ReactSymbols';
import { Key, Props, Ref, Type, ReactElement } from 'shared/ReactTypes';

//RectElement 构造函数
const ReactElement = (
	type: Type,
	key: Key,
	ref: Ref,
	props: Props
): ReactElement => {
	const Element = {
		$$typeof: REACT_ELEMENT_TYPE,
		type,
		key,
		ref,
		props,
		_mark: 'yhf'
	};
	return Element;
};
