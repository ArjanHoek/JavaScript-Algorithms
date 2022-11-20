const sameFrequency = (int1, int2) => {
  const [str1, str2] = [`${int1}`, `${int2}`];

  if (str1.length !== str2.length) return false;

  const freqMap = {};

  for (const char of str1) {
    freqMap[char] = (freqMap[char] || 0) + 1;
  }

  for (const char of str2) {
    if (!freqMap[char]) {
      return false;
    }
    freqMap[char] = freqMap[char] - 1;
  }

  return true;
};

const testValues = [
  [182, 281],
  [34, 14],
  [3589578, 5879385],
  [22, 222],
];

testValues.forEach(values => {
  const result = sameFrequency(...values);
  console.log(result);
});
