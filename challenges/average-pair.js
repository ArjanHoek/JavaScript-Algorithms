const averagePair = (numbers, target) => {
  let a = 0,
    b = numbers.length - 1;

  while (a < b) {
    const average = (numbers[a] + numbers[b]) / 2;

    if (average === target) {
      return true;
    }

    if (average > target) {
      b = b - 1;
    } else {
      a = a + 1;
    }
  }

  return false;
};

const testValues = [
  {
    numbers: [1, 2, 3],
    target: 2.5,
  },
  {
    numbers: [1, 6, 7, 8, 9, 10, 11, 13, 15],
    target: 5,
  },
  {
    numbers: [-1, 0, 3, 4, 5, 6],
    target: 4.1,
  },
  {
    numbers: [],
    target: 4,
  },
];

testValues.forEach(({ numbers, target }) => {
  const result = averagePair(numbers, target);
  console.log(result);
});
