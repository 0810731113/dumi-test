function swap(arr, i, j) {
  var t = arr[i];
  arr[i] = arr[j];
  arr[j] = t;
}

function insertSort(arr, l, r) {
  //var len = r - l + 1;
  for (var i = l; i <= r; i++) {
    var e = arr[i];
    for (var j = i; j > l && e < arr[j - 1]; j--) {
      arr[j] = arr[j - 1];
    }
    arr[j] = e;
  }
  return arr;
}

function partition(arr, l, r) {
  swap(arr, l, Math.floor(Math.random() * (r - l) + l));
  let v = arr[l];
  let i = l + 1,
    j = r;
  while (true) {
    while (i <= r && arr[i] < v) {
      i++;
    }
    while (j >= l + 1 && arr[j] > v) {
      j--;
    }
    if (i >= j) {
      break;
    }
    swap(arr, i, j);
    i++;
    j--;
  }
  swap(arr, l, j);
  return j;
}

function sort(arr, l, r) {
  if (r - l <= 7) {
    insertSort(arr, l, r);
    return;
  }
  let p = partition(arr, l, r);
  if (p > l) sort(arr, l, p - 1);
  if (p < r) sort(arr, p + 1, r);
}

//三路快速排序
function twoQuickSort(arr) {
  sort(arr, 0, arr.length - 1);
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
console.log(twoQuickSort(arr1));
console.log(insertSort(arr1, 0, arr1.length - 1));
