let countingSort = (arr, min, max) => {
  let i = min,
    j = 0,
    len = arr.length,
    count = [];
  for (i; i <= max; i++) {
    count[i] = 0;
  }
  for (i = 0; i < len; i++) {
    count[arr[i]] += 1;
  }
  for (i = min; i <= max; i++) {
    while (count[i] > 0) {
      arr[j] = i;
      j++;
      count[i]--;
    }
  }
  return arr;
};

const arr = [5, 3, 1, 4, 6];

console.log(countingSort(arr, 1, 6)); // [ 1, 3, 4, 5, 6 ]
