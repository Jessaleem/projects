function solve(weight) {
  // Write your code here
  // To debug: console.error('Debug messages...');
  let maxWeight = 0;

  for (let i = 0; i < weight.length; i++){
      if(weight[i] > maxWeight){
          maxWeight = weight[i]
      }
  }

  return weight.indexOf(maxWeight);
}

console.log(solve([100,20,40,10]))