const isSubsequence = (str1, str2) => {
  let a = 0,
    b = 0;

  while (b < str2.length) {
    if (str2[b] === str1[a]) {
      a = a + 1;
      if (a === str1.length) return true;
    }

    b = b + 1;
  }

  return false;
};

const testValues = [
  ['hello', 'hello world'],
  ['sing', 'string'],
  ['abc', 'abracadabra'],
  ['abc', 'acb'],
];

testValues.forEach(value => {
  const result = isSubsequence(...value);
  console.log(result);
});
