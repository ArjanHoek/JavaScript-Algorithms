const findLongestSubstring = str => {
  if (!str) return 0;

  let len = 1;
  let map = {};

  for (let i = 0, j = 0; j <= str.length; ) {
    j - i > len && (len = j - i);

    if (typeof map[str[j]] === 'number') {
      i = map[str[j]] + 1;
      j = i;
      map = {};
    } else {
      map[str[j]] = j;
      j++;
    }
  }

  return len;
};

const findLongestSubstring2 = str => {
  let len = 0;
  const map = {};

  for (let i = 0, j = 0; j < str.length; j++) {
    if (map[str[j]]) {
      i = Math.max(i, map[str[j]]);
    }

    len = Math.max(len, j - i + 1);
    map[str[j]] = j + 1;
  }

  return len;
};

const testValues = [
  {
    value: '',
    expected: 0,
  },
  {
    value: 'rithmschool',
    expected: 7,
  },
  {
    value: 'thisisawesome',
    expected: 6,
  },
  {
    value: 'thecatinthehat',
    expected: 7,
  },
  {
    value: 'bbbbbb',
    expected: 1,
  },
  {
    value: 'longestsubstring',
    expected: 8,
  },
  {
    value: 'thisishowwedoit',
    expected: 6,
  },
];

testValues.forEach(({ value, expected }) => {
  const result = findLongestSubstring2(value);
  console.log(result, expected);
});
