function arrayToObject(arr) {
  const obj = {};
  for (let i in arr) {
    obj[i] = arr[i];
  }
  return obj;
}

console.log(arrayToObject([1, 2, 3, 4]));
console.log(arrayToObject(['a', 'b', 'c', 'd']));
