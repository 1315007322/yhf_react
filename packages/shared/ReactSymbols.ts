/*
 * @Author: yanhengfu yanhengfu@jimengio.com
 * @Date: 2023-08-11 15:14:51
 * @LastEditors: yanhengfu yanhengfu@jimengio.com
 * @LastEditTime: 2023-09-07 16:21:33
 * @FilePath: \yhf_react\packages\shared\ReactSymbols.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

export let REACT_ELEMENT_TYPE: any = 0xeac7;

if (typeof Symbol === 'function' && Symbol.for) {
	const symbolFor = Symbol.for;

	REACT_ELEMENT_TYPE = symbolFor('react.Element');
}
