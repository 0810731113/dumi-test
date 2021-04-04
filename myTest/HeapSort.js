function swap(arr, i, j) {
  var t = arr[i];
  arr[i] = arr[j];
  arr[j] = t;
}

function adjustHeap(arr, i, len) {
  let temp = arr[i];
  for (var k = i * 2 + 1; k < len; k = parseInt(k * 2 + 1)) {
    if (k + 1 < len && arr[k] < arr[k + 1]) {
      k++;
    }
    if (arr[k] > temp) {
      arr[i] = arr[k];
      i = k;
    } else {
      break;
    }
  }
  arr[i] = temp;
}

function heapSort(arr) {
  for (let i = parseInt(arr.length / 2 - 1); i >= 0; i--) {
    adjustHeap(arr, i, arr.length);
  }
  for (let j = arr.length - 1; j > 0; j--) {
    swap(arr, 0, j);
    adjustHeap(arr, 0, j);
  }
  return arr;
}

var arr1 = [
  3,
  5,
  1,
  6,
  9,
  4,
  8,
  6,
  10,
  56,
  23,
  64,
  23,
  6,
  7,
  9,
  777,
  3,
  4,
  67,
  22,
  11,
  33,
  44,
  66,
  77,
  88,
  99,
  8,
  43,
  52,
  34,
  67,
  43,
  44,
  55,
  66,
  77,
  88,
  99,
  23,
  24,
  33,
  43,
  45,
  67,
  89,
];
// var arr1 = [3,5,1,6,9,4,8,7,10,56,23,64,23,6,7,9,777];
console.log(heapSort(arr1));

Math.random();
