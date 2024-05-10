function kthSmallest(matrix, k) {
  const flatten = matrix.reduce((acc, row) => acc.concat(row), []);
  flatten.sort((a, b) => a - b);
  return flatten[k - 1];
}
