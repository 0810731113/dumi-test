function swap(arr, i, j) {
  var t = arr[i];
  arr[i] = arr[j];
  arr[j] = t;
}

function merge(arr, l, mid, r) {
  let aux = arr.slice(l, r + 1);
  // console.log(`l,mid,r`);
  // console.log(l,mid,r);
  // console.log('aux:' ,aux);
  let i = l;
  let j = mid + 1;
  for (var k = l; k <= r; k++) {
    if (i > mid) {
      arr[k] = aux[j - l];
      j++;
    } else if (j > r) {
      arr[k] = aux[i - l];
      i++;
    } else if (aux[i - l] < aux[j - l]) {
      arr[k] = aux[i - l];
      i++;
    } else {
      arr[k] = aux[j - l];
      j++;
    }
  }
}

function sort(arr, l, r) {
  if (l >= r) {
    return;
  }
  // let mid = (l + (r - l) / 2).toFixed(0);
  let mid = Math.floor(l + (r - l) / 2);
  //console.log(`mid:`,l,mid,r);
  if (mid > l) {
    sort(arr, l, mid);
  }
  if (r > mid + 1) {
    sort(arr, mid + 1, r);
  }
  merge(arr, l, mid, r);
}

function mergeSort(arr) {
  const len = arr.length;
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
// var arr1 = [3,5,1,6,9,4,8,7,10,56,23,64,23,6,7,9,777];
console.log(mergeSort(arr1));
