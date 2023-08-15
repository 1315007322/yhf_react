/*
 * @Author: yanhengfu yanhengfu@jimengio.com
 * @Date: 2023-08-11 17:52:32
 * @LastEditors: yanhengfu yanhengfu@jimengio.com
 * @LastEditTime: 2023-08-11 18:22:36
 * @FilePath: \yhf_react\packages\shared\ReactTypes.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export type Type = any;
export type Key = any;
export type Ref = any;
export type Props = any;
export type ElementType = any;

export interface ReactElement {
	$$typeof: symbol | number;
	type: Type;
	key: Key;
	ref: Ref;
	props: Props;
	_mark: string;
}
