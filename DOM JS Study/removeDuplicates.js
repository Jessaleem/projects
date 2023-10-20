function removeDuplicates(arr) {
  const result = [];
  const memo = {};
  for (let i in arr) {
    if (!memo[arr[i]]) {
      result.push(arr[i]);
    }
    memo[arr[i]] = i;
  }
  return result;
}

console.log(removeDuplicates([1, 1, 2, 2, 3, 3]));
console.log(removeDuplicates([6, 2, 4, 6, 1, 4, 3, 6, 6, 2, 1]));
