// Complexity O(n2)
const isSame1 = (arr1, arr2, exp) => {
  let isSame = true;

  for (let num1 of arr1) {
    const index = arr2.findIndex(num2 => num2 === num1 ** exp);

    if (index === -1) {
      return false;
    }

    arr2.splice(index, 1);
  }

  return arr2.length ? false : isSame;
};

const arr1 = [1, 2, 3];
const arr2 = [4, 1, 9];
const arr3 = [8, 27, 1];

// console.log(isSame1(arr1, arr3, 3));

// Complexity O(n)
const isSame2 = (arr1, arr2, exp) => {
  if (arr1.length != arr2.length) return false;

  const createFreqMap = arr =>
    arr.reduce(
      (counter, n) => ({
        ...counter,
        [n]: (counter[n] || 0) + 1,
      }),
      {}
    );

  const counter1 = createFreqMap(arr1);
  const counter2 = createFreqMap(arr2);

  for (let num in counter1) {
    if (counter2[num ** 2] !== counter1[num]) return false;
  }

  return true;
};

console.log(isSame2(arr1, arr2));
