function computeClosestToZero(ts) {
  // Write your code here
  if (ts.length === 0){
      return 0
  }
  let closestPositive = 10000
  let closestNegative = -10000
  for(let i= 0; i< ts.length; i++){
      if (ts[i] > 0 ){
          if(ts[i] < closestPositive){ 
              closestPositive = ts[i]
          }
      } else if (ts[i] < 0){
          if(ts[i] > closestNegative){
              closestNegative = ts[i]
          }
      }
  }
  console.log(closestPositive)
  console.log(closestNegative)
  
  if(closestPositive === (closestNegative*(-1))){
      return closestPositive
  } else if (closestPositive < (closestNegative*(-1))){
    return closestPositive
  } else {
    return closestNegative
  }
}

console.log(computeClosestToZero([7, -10, 13, 8, 4, -7, -12, -3, 3, -9, 6, -6, 7]))