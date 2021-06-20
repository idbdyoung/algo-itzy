export function TreeNode(val, left, right) {
  this.val = (val===undefined ? null : val);
  this.left = (left===undefined ? null : left);
  this.right = (right===undefined ? null : right);
}

const arrayToBinaryTree = (array) => {
  const shouldInspected = [];
  const nodes = array.reduce((acc, node) => {
    if (node !== null) {
      const newNode = new TreeNode(node);
      return [...acc, newNode];
    }

    return [...acc, null];
  }, []);

  const root = nodes.shift();
  shouldInspected.push(root);

  const loop = (node) => {
    let inspectNodeLeft = false;

    while (nodes.length > 0) {
      if (node === null) return;

      if (!inspectNodeLeft) {
        inspectNodeLeft = true;
        const shifted = nodes.shift();
        node.left = shifted;
        shouldInspected.push(node.left);
      } else {
        const shifted = nodes.shift();
        node.right = shifted;
        shouldInspected.push(node.right);
        return;
      }
    }
  };

  while (shouldInspected.length > 0) {
    const node = shouldInspected.shift();
    loop(node);
  }

  return root;
};

export default arrayToBinaryTree;
