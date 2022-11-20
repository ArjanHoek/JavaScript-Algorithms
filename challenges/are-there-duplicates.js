// Frequency counter pattern
const areThereDuplicates1 = (...args) => {
  const freqMap = {};

  for (const val of args) {
    if (freqMap[val]) {
      return true;
    }

    freqMap[val] = true;
  }

  return false;
};

// Multi pointers pattern - Depends on a sorted array
const areThereDuplicates2 = (...args) => {
  let a = 0;

  for (let b = 1; b < args.length; b++) {
    if (args[a] === args[b]) {
      return true;
    }

    a++;
  }

  return false;
};

const testValues = [
  [1, 2, 3],
  [1, 2, 2],
  ['a', 'b', 'c', 'a'],
];

testValues.forEach(value => {
  const result = areThereDuplicates2(...value);
  console.log(result);
});
