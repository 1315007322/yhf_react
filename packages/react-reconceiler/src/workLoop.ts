import beginWork from './beginWork';
import completeWork from './completeWork';
import { FiberNode } from './fiber';

let workInProcess: FiberNode | null = null;

function prepareFreshStack(fiber: FiberNode) {
	workInProcess = fiber;
}

function renderRoot(root: FiberNode) {
	//初始化 挂载 root

	prepareFreshStack(root);

	do {
		try {
			workLoop();
			break;
		} catch (error) {
			console.log('', error);
			workInProcess = null;
		}
	} while (true);
}

function workLoop() {
	while (workInProcess != null) {
		performUnitOfWork(workInProcess);
	}
}

//单元工作
function performUnitOfWork(fiber: FiberNode) {
	//向下递
	const next = beginWork(fiber);

	//??
	fiber.memoizedProps = fiber.pendingProps;

	if (next != null) {
		//向上归
		completeUnitOfWork(fiber);
	} else {
		workInProcess = null;
	}
}

function completeUnitOfWork(fiber: FiberNode) {
	const node: FiberNode | null = fiber;

	do {
		completeWork(node);
		const sibling = node.sibling;
		if (sibling != null) {
			workInProcess = sibling;
			return;
		}
		workInProcess = node.return;
	} while (node != null);
}
