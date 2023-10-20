let arr = [10, 8, 4, 7, 5, 9, 13, 12]

for (let i = 0; i<arr.length; i++){
  for (let j = i+1; j<arr.length; j++){
    if (arr[j]<arr[i]){
      let aux = arr[i];
      arr[i] = arr[j];
      arr[j] = aux;
    }
  }
}

console.log(arr)