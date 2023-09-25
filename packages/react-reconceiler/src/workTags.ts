export type WorkTag =
	| typeof FunctionComponent
	| typeof HostRoot
	| typeof HostComponent
	| typeof HostText;

//工作 类型 tag

//函数式组件
export const FunctionComponent = 0;
//根节点
export const HostRoot = 3;

//根节点 组件
export const HostComponent = 5;

//根节点 文本
export const HostText = 6;
