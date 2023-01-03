// Linear search
const linearSearch = (data, value) => {
  for (let i = 0; i < data.length; i++) {
    if (data[i] === value) return i;
  }

  return -1;
};

// Binary search
const binarySearch = (data, target) => {
  const calcAvg = (num1, num2) => Math.floor((num1 + num2) / 2);

  let start = 0;
  let end = data.length - 1;
  let index = calcAvg(start, end);

  while (data[index] != target) {
    if (start >= end) return -1;

    if (target < data[index]) end = index - 1;
    else start = index + 1;

    index = calcAvg(start, end);
  }

  return index;
};

// Naive string search
const stringSearch = (main, sub) => {
  let count = 0;

  for (let i = 0, j = 0; i < main.length; i++) {
    if (main[i] !== sub[j]) j = 0;

    if (main[i] === sub[j]) {
      if (j === sub.length - 1) {
        count++;
        j = 0;
      } else j++;
    }
  }

  return count;
};
