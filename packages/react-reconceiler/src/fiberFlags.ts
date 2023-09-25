/*
 * @Author: yanhengfu yanhengfu@jimengio.com
 * @Date: 2023-09-25 13:37:57
 * @LastEditors: yanhengfu yanhengfu@jimengio.com
 * @LastEditTime: 2023-09-25 13:38:11
 * @FilePath: \yhf_react\packages\react-reconceiler\src\fiberFlags.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

//定义 fiber 操作 事件
export type Flags = number;

//无操作
export const NoFlags = 0b0000001;
//新增
export const Placement = 0b0000010;
//更新
export const Update = 0b0000100;
//删除子节点
export const ChildDeletion = 0b0001000;
