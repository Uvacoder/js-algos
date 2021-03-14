let swap = (arr, i, j) => {
  let tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
};

let partition = (arr, low, high) => {
  let q = low,
    i;
  for (i = low; i < high; i++) {
    if (arr[i] < arr[high]) {
      swap(arr, i, q);
      q++;
    }
  }
  swap(arr, i, q);
  return q;
};

let quickSort = (arr, low, high) => {
  if (low < high) {
    let pivot = partition(arr, low, high);
    quickSort(arr, low, pivot - 1);
    quickSort(arr, pivot + 1, high);
    return arr;
  }
};

const arr = [5, 3, 1, 4, 6];

quickSort(arr, 0, arr.length - 1);

console.log(arr); // [1, 3, 4, 5, 6]
