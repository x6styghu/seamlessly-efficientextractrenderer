function buildTree(preorder, inorder) {
  if (preorder.length === 0 || inorder.length === 0) return null;
  const rootVal = preorder[0];
  const root = new TreeNode(rootVal);
  const index = inorder.indexOf(rootVal);
  const leftInorder = inorder.slice(0, index);
  const rightInorder = inorder.slice(index + 1);
  const leftPreorder = preorder.slice(1, 1 + leftInorder.length);
  const rightPreorder = preorder.slice(1 + leftInorder.length);
  root.left = buildTree(leftPreorder, leftInorder);
  root.right = buildTree(rightPreorder, rightInorder);
  return root;
}
