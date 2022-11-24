const countDown = (n) => {
    console.log(n || "All done!");
    return n && countDown(n - 1);
};

const sumRange = (n) => (n ? n-- + sumRange(n) : n);

const hasOdds = (arr) =>
    !arr.length ? false : !(arr[0] % 2) ? hasOdds(arr.slice(1)) : true;

const collectOdds = (arr, res = []) =>
    !arr.length
        ? res
        : collectOdds(arr.slice(1), arr[0] % 2 ? [...res, arr[0]] : res);

// CHALLENGES (easy)

// 1: Power
const power = (base, exp) => (!exp ? 1 : base * power(base, exp - 1));

// 2: Factorial
const factorial = (n) => (!n ? 1 : n * factorial(n - 1));

// 3: Product of numbers in array
const productOfArray = (arr) =>
    arr.length <= 1
        ? arr[0] || 0
        : productOfArray([arr[0] * arr[1], ...arr.slice(2)]);

// 4: Sum of all numbers between 0 and a given number
const recursiveRange = (num) => (!num ? 0 : num + recursiveRange(num - 1));

// 5: Fibonacci
const fib = (num) => {
    if (num <= 2) return 1;

    const calculate = (prev = 1, next = 1, iteration = 3) =>
        iteration === num
            ? prev + next
            : calculate(next, prev + next, iteration + 1);

    return calculate();
};

// CHALLENGES (hard)

// 6: Reverse a given string
const reverse = (str) => {
    const helper = (str, res) =>
        !str.length ? res : helper(str.slice(0, -1), res + str.slice(-1));

    return helper(str, "");
};

// 7: Check if string is a palindrome
const isPalindrome = (str) => {
    if (str.length <= 1) return true;
    if (str[0] !== str[str.length - 1]) return false;

    return isPalindrome(str.slice(1, -1));
};

// 8: Some recursive
const someRecursive = (arr, cb) => {
    const helper = (arr) => {
        if (!arr.length) return false;
        return cb(arr[0]) ? true : helper(arr.slice(1));
    };

    return helper(arr);
};

// 9: Flatten an array
const flatten = (arr) => {
    const helper = (arr, res) => {
        const n = arr[0];

        if (!n) return res;

        if (Array.isArray(n)) {
            helper(n, res);
        } else {
            res.push(n);
        }

        return helper(arr.slice(1), res);
    };

    return helper(arr, []);
};
