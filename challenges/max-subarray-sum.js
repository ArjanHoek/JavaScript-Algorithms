const maxSubarraySum = (numbers, width) => {
  if (numbers.length < width) return null;

  let max = numbers[0],
    temp;

  for (let i = 1; i < width; i++) {
    max = max + numbers[i];
  }

  temp = max;

  for (let j = width; j < numbers.length; j++) {
    temp = temp - numbers[j - width] + numbers[j];
    temp > max && (max = temp);
  }

  return max;
};

const testValues = [
  {
    numbers: [100, 200, 300, 400],
    width: 2,
  },
  {
    numbers: [1, 4, 2, 10, 23, 3, 1, 0, 20],
    width: 4,
  },
  {
    numbers: [-3, 4, 0, -2, 6, -1],
    width: 2,
  },
  {
    numbers: [3, -2, 7, -4, 1, -1, 4, -2, 1],
    width: 2,
  },
  {
    numbers: [2, 3],
    width: 3,
  },
];

testValues.slice(0).forEach(({ numbers, width }) => {
  const result = maxSubarraySum(numbers, width);
  console.log(result);
});
