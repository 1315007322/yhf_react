import { Key, Props, Ref } from 'shared/ReactTypes';
import { WorkTag } from './workTags';
import { Flags, NoFlags } from './fiberFlags';

export class FiberNode {
	type: any;
	tag: WorkTag;
	pendingProps: Props;
	key: Key;
	stateNode: any;
	ref: Ref;

	return: FiberNode | null;
	sibling: FiberNode | null;
	child: FiberNode | null;
	index: number;

	memoizedProps: Props | null;
	alternate: FiberNode | null;
	flags: Flags;

	constructor(tag: WorkTag, pendingProps: Props, key: Key) {
    //创建实例
    this.key = key
    this.tag = tag


    this.stateNode = null
    this.type = null

    //构成树状结构
    this.index = 0
    this.child = null
    this.sibling = null
    this.return = null
    this.ref = null


    //工作单元
    this.pendingProps = pendingProps
    this.memoizedProps = null
    this.alternate = null


    //副作用
    this.flags = NoFlags
  }
}
