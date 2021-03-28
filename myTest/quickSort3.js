function swap(arr, i, j) {
  var t = arr[i];
  arr[i] = arr[j];
  arr[j] = t;
}

function insertSort(arr, l, r) {
  var len = r - l;
  for (var i = l; i < r; i++) {
    var e = arr[i];
    for (var j = i; j > l && e < arr[j - 1]; j--) {
      arr[j] = arr[j - 1];
    }
    arr[j] = e;
  }
  return arr;
}

function sort(arr, l, r) {
  if (r - l <= 0) {
    //insertSort(arr,l,r);
    return;
  }
  swap(arr, l, (l + Math.random() * (r - l)).toFixed(0));
  var v = arr[l];
  var lt = l;
  var gt = r + 1;
  var i = l + 1;
  while (i < gt) {
    if (arr[i] < v) {
      swap(arr, i, lt);
      i++;
      lt++;
    } else if (arr[i] > v) {
      swap(arr, i, gt - 1);
      gt--;
    } else {
      i++;
    }
  }
  // swap(arr,l,lt);

  sort(arr, l, lt - 1);
  sort(arr, gt, r);
}

//三路快速排序
function threeQuickSort(arr) {
  var len = arr.length;
  sort(arr, 0, len - 1);
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
console.log(threeQuickSort(arr1));
