function shallowEqual(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
}

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

function isAnagram(str1, str2) {
  const feqs1 = frequencies(str1);
  const feqs2 = frequencies(str2);
  return shallowEqual(feqs1, feqs2);
}

console.log(isAnagram('calor', 'carlo'));
console.log(isAnagram('abc', 'car'));
