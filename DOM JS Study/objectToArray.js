function objectToArray(obj) {
  const arr = [];
  for (let i in obj) {
    arr.push(obj[i]);
  }
  return arr;
}

console.log(objectToArray({ 0: 1, 1: 2, 2: 3, 3: 4 }));
console.log(objectToArray({ 0: 'a', 1: 'b', 2: 'c', 3: 'd' }));
