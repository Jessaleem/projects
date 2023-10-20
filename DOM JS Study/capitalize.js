function capitalize(string) {
  const words = string.split(' ');
  console.log(words);
  for (let i = 0; i < words.length; i++) {
    let word = words[i].toLowerCase();
    console.log(word);
    if (word.length > 2) {
      const code = word.charCodeAt(0);
      console.log(code);
      let result = String.fromCharCode(code - 32);
      console.log(result);
      for (let j = 1; j < word.length; j++) {
        result += word[j];
      }
      word = result;
    }
    words[i] = word;
  }
  return words.join(' ');
}

console.log(capitalize('wOrD1 tHe title'));
