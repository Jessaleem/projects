// function countFrequencies(words) {
//   // Write your code here
//   let result = [];
//   let sortedWords = words.sort()
//   console.log(sortedWords)

//   for(let i = 0; i< sortedWords.length-1; i++){
//     let counter = 1;
//     if(sortedWords[i] === sortedWords[i+1]){
//       result.push(counter+1)
//     } else {
//       result.push(counter)
//     }
//   }
  
//   return result;
// }

// function countFrequencies(words) {
//   // Write your code here
//   const response = words.reduce((acc, word) => {acc[word]? acc[word] ++ : acc[word] = 1; 
//   return acc;}, []);
//   console.log(response)
  
// }

// function countFrequencies(words) {
//   // Write your code here
//   const response = words.reduce((acc, word) => {acc[word]? acc[word] ++ : acc[word] = 1; 
//   return acc;}, []);
//   console.log(response)
  
// }

// function countFrequencies(words) {
//   let result = [];
//   sortedWords = words.sort()
//   for (let i = 0; i < words.length-1; i++){
//     let counter = 1;
//       if(sortedWords[i] === sortedWords[i+1]){
//         counter++
//         result.push(counter)
//       }else {
//         result.push(counter)
//       }

//   }
//   return result
// }

function countFrequencies(words) {
  const sortedWords = words.sort();
  const freqWords = {}

  sortedWords.forEach((word)=>{
    freqWords[word] = !freqWords[word] ? 1 : freqWords[word] +=1
  })

  return Object.values(freqWords)
}

console.log(countFrequencies(['the', 'got', 'the', 'bone']))

