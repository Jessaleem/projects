function countFrequencies(words) {
  // Write your code here
  let result = [];
  let sortedWords = words.sort()
  console.log(sortedWords)
  
  for(let i = 0; i< sortedWords.length; i++){
    let counter = 1;
    let value = sortedWords[i]
    console.log(sortedWords.indexOf(value))
    if(sortedWords.indexOf(value) < 0){
      result.push(1)
    } else {
      result.push(2)
    }
  }
  
  return result;
}

console.log(countFrequencies(['the', 'dog', 'got', 'the', 'bone']))