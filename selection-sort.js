let selectionSort = (arr) => {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    let min = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    if (min !== i) {
      let tmp = arr[i];
      arr[i] = arr[min];
      arr[min] = tmp;
    }
  }
  return arr;
};

const arr = [5, 3, 1, 4, 6];

selectionSort(arr);

console.log(arr); // [ 1, 3, 4, 5, 6 ]
