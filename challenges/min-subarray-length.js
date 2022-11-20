const minSubarrayLength = (numbers, value) => {
  if (!numbers.length) return 0;

  let min = 0;
  let cur = numbers[0];

  for (let b = 1, a = 0; b <= numbers.length; ) {
    if (cur < value) {
      cur = cur + numbers[b++];
    } else {
      (!min || b - a < min) && (min = b - a);
      cur = cur - numbers[a++];
    }
  }

  return min;
};

const testValues = [
  {
    numbers: [2, 3, 1, 2, 4, 3],
    value: 7,
    expected: 2,
  },
  {
    numbers: [2, 1, 6, 5, 4],
    value: 9,
    expected: 2,
  },
  {
    numbers: [3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19],
    value: 52,
    expected: 1,
  },
  {
    numbers: [1, 4, 16, 22, 5, 7, 8, 9, 10],
    value: 39,
    expected: 3,
  },
  {
    numbers: [1, 4, 16, 22, 5, 7, 8, 9, 10],
    value: 55,
    expected: 5,
  },
  {
    numbers: [4, 3, 3, 8, 1, 2, 3],
    value: 11,
    expected: 2,
  },
  {
    numbers: [1, 4, 16, 22, 5, 7, 8, 9, 10],
    value: 95,
    expected: 0,
  },
];

testValues.slice(0).forEach(({ numbers, value, expected }) => {
  const result = minSubarrayLength(numbers, value);
  console.log(result, expected);
});
