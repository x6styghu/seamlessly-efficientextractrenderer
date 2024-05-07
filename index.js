function isValidBST(root) {
  let prev = null;
  return inorder(root);
  function inorder(node) {
    if (!node) return true;
    if (!inorder(node.left)) return false;
    if (prev !== null && node.val <= prev) return false;
    prev = node.val;
    return inorder(node.right);
  }
}
