function frequencies(str) {
  const memo = {};

  for (let i in str) {
    if (str[i] in memo) {
      memo[str[i]]++;
    } else {
      memo[str[i]] = 1;
    }
  }
  return memo;
}

function firstUniqueChar(s) {
  const strObj = frequencies(s);

  for (let i = 0; i < s.length; i++) {
    console.log(strObj[s[i]]);
    console.log(s[i]);
    if (strObj[s[i]] === 1) {
      return i;
    }
  }
  return -1;
}

console.log(firstUniqueChar('leetcode'));
console.log(firstUniqueChar('loveleetcode'));
