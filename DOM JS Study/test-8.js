
function app(nums, target){
  const result=[]
   nums.forEach((element, index) => {
    // console.log(index)
    nums.forEach((element2, index2) => {
      if ((index2>index)&& (element+element2 === target))  {
        result.push([element, element2])
      }
    })
   })
   return result
}

console.log(app([ 1,9,5,0,20,-4,12,16,7], 5))