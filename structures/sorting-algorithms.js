const swap = (arr, a, b) => {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
  return arr;
};

const bubbleSort = arr => {
  for (let i = arr.length - 1; i > 0; i--) {
    let swapped = false;

    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        swapped = true;
      }
    }

    if (!swapped) break;
  }

  return arr;
};

const selectionSort = (arr, start = 0) => {
  if (start === arr.length - 1) return arr;

  let min = start,
    ordered = true;

  for (let i = start; i < arr.length; i++) {
    arr[i] < arr[min] && (min = i);
    i && arr[i] < arr[i - 1] && (ordered = false);
  }

  return ordered ? arr : selectionSort(swap(arr, start, min), start + 1);
};

const insertionSort = arr => {
  for (let i = 1; i < arr.length; i++) {
    let cur = arr[i];

    for (let j = i; j >= 0; j--) {
      if (cur < arr[j - 1]) {
        arr[j] = arr[j - 1];
      } else {
        arr[j] = cur;
        break;
      }
    }
  }

  return arr;
};

const input = [2, 1, 9, 67, 4];
const res = insertionSort(input);

console.log(res);
