// OUTER TO INNER

// O(n2)
const sumZero1 = (...arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr.slice(i + 1).includes(-arr[i])) {
      return [arr[i], -arr[i]];
    }
  }
};

// O(n)
const sumZero2 = arr => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === 0) {
      return [arr[left], arr[right]];
    }

    if (sum < 0) {
      left = left + 1;
    } else {
      right = right - 1;
    }
  }
};

console.log(sumZero2([-4, -3, -2, 0, 5, 8, 9]));

// SCOUT SEARCHING

// O(n2)
const countUnique1 = arr =>
  arr.reduce((acc, cur) => (acc.includes(cur) ? acc : acc.concat(cur)), [])
    .length;

// O(n)
const countUnique2 = arr => {
  if (!arr.length) return 0;

  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[j] !== arr[i]) {
      i = i + 1;
      arr[i] = arr[j];
    }
  }

  return i + 1;
};

// console.log(countUnique2([3, 6, 6, 7, 8]));

// SLIDING WINDOW
const maxSubarraySum = (arr, num) => {
  // Create variables for a maximum and a temporary sum
  let maxSum = 0;
  let tempSum = 0;

  // Set initial max sum
  for (let i = 0; i < num; i++) {
    maxSum = maxSum + arr[i];
  }

  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
  //
};
