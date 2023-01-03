const countDown = n => {
  console.log(n || 'All done!');
  return n && countDown(n - 1);
};

const sumRange = n => (n ? n-- + sumRange(n) : n);

const hasOdds = arr =>
  !arr.length ? false : !(arr[0] % 2) ? hasOdds(arr.slice(1)) : true;

const collectOdds = (arr, res = []) =>
  !arr.length
    ? res
    : collectOdds(arr.slice(1), arr[0] % 2 ? [...res, arr[0]] : res);

// CHALLENGES (easy)

// 1: Power
const power = (base, exp) => (!exp ? 1 : base * power(base, exp - 1));

// 2: Factorial
const factorial = n => (!n ? 1 : n * factorial(n - 1));

// 3: Product of numbers in array
const productOfArray = arr =>
  arr.length <= 1
    ? arr[0] || 0
    : productOfArray([arr[0] * arr[1], ...arr.slice(2)]);

// 4: Sum of all numbers between 0 and a given number
const recursiveRange = num => (!num ? 0 : num + recursiveRange(num - 1));

// 5: Fibonacci
const fib = num => {
  if (num <= 2) return 1;

  const calculate = (prev = 1, next = 1, iteration = 3) =>
    iteration === num
      ? prev + next
      : calculate(next, prev + next, iteration + 1);

  return calculate();
};

// CHALLENGES (hard)

// 6: Reverse a given string
const reverse = str => {
  const helper = (str, res) =>
    !str.length ? res : helper(str.slice(0, -1), res + str.slice(-1));

  return helper(str, '');
};

// 7: Capitalize the first letter of each word in an array
const capitalizeFirst = (arr, res = []) =>
  !arr.length
    ? res
    : capitalizeFirst(
        arr.slice(1),
        res.concat(`${arr[0][0].toUpperCase()}${arr[0].slice(1).toLowerCase()}`)
      );

// 8: Calculate sum of all even numbers in nested object
const nestedEvenSum = obj => {
  let output = 0;

  const helper = input => {
    if (typeof input === 'object') {
      for (let value of Object.values(input)) {
        helper(value);
      }
    }

    if (typeof input === 'number' && !(input % 2)) {
      output = output + input;
    }
  };

  helper(obj);

  return output;
};

// Capitalize words
const capitalizeWords = (words, i = 0) => {
  if (i === words.length) {
    return words;
  } else {
    return capitalizeWords(
      words.concat(words[0].toUpperCase()).slice(1),
      i + 1
    );
  }
};

// Stringify numbers
const stringifyNumbers = input => {
  const copy = Object.assign({}, input);

  for (let [key, value] of Object.entries(copy)) {
    if (typeof value === 'number') {
      copy[key] = `${value}`;
    }

    if (typeof value === 'object' && !Array.isArray(value)) {
      copy[key] = stringifyNumbers(value);
    }
  }

  return copy;
};

// Collect string
const collectStrings = obj => {
  let output = [];

  const helper = input => {
    if (typeof input === 'object') {
      for (let value of Object.values(input)) {
        helper(value);
      }
    }

    if (typeof input === 'string') {
      output.push(input);
    }
  };

  helper(obj);

  return output;
};

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

console.log(stringifyNumbers(obj));
