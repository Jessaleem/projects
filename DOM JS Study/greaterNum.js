function greater(arr){
  let max = 0;
  for (let i=0; i<arr.length; i++){
    if(arr[i]>max){
      max= arr[i]
    }
  }
  return max
}
console.log(greater([2,5,20,2,1,50]))