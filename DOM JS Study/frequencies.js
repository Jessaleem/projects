function frequencies(str) {
  const freqs = {};
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char != ' ') {
      if (char in freqs) {
        freqs[char]++;
      } else {
        freqs[char] = 1;
      }
    }
  }
  return freqs;
}

console.log(frequencies('hola mundo'));
