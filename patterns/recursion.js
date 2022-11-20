const countDown = n => {
  console.log(n || 'All done!');
  return n && countDown(n - 1);
};

// countDown(3);

const sumRange = n => (n ? n-- + sumRange(n) : n);

// console.log(sumRange(5));

const hasOdds = arr =>
  !arr.length ? false : !(arr[0] % 2) ? hasOdds(arr.slice(1)) : true;

console.log(hasOdds([2, 8, 10]));

const factorial = n => (n === 1 ? n : n * factorial(n - 1));

console.log(factorial(4));

const collectOdds = (arr, res = []) =>
  !arr.length
    ? res
    : collectOdds(arr.slice(1), arr[0] % 2 ? [...res, arr[0]] : res);

console.log(collectOdds([1, 2, 5, 2, 5, 7, 8, 7, 19, 4, 5]));
