const isAnagram = (str1, str2) => {
  // Return false if string lengths don't match
  if (str1.length !== str2.length) return false;

  // Create frequency map for str1
  const freqMap = {};

  for (let char of str1) {
    freqMap[char] = (freqMap[char] || 0) + 1;
  }

  // Loop over str2 and check for each character if it has a frequency in the map above that is higher than 0
  for (let char of str2) {
    const freq = freqMap[char];

    if (freq > 0) {
      // If present, lower the frequency in the map for that character
      freqMap[char] = freq - 1;
    } else {
      // If not present, return false
      return false;
    }
  }
  // Return true
  return true;
};

console.log(isAnagram('abcdi', 'badic'));
console.log(isAnagram('abcdi', 'badi'));
console.log(isAnagram('anagramm', 'nagarams'));
