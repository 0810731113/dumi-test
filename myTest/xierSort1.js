function swap(arr, i, j) {
  var t = arr[i];
  arr[i] = arr[j];
  arr[j] = t;
}

/*function sort(arr){
  var len = arr.length;
  for(var i = 1; i < len; i++){
    for(var j = i; j > 0 && arr[j] < arr[j - 1]; j--){
      swap(arr, j, j-1);
    }
  }
  return arr;
}*/

export function sort(arr) {
  var len = arr.length;
  var h = 1;
  while (h < (len / 3).toFixed(0)) {
    h = (3 * h + 1).toFixed(0);
  }
  while (h >= 1) {
    for (var i = h; i < len; i++) {
      var e = arr[i];
      for (var j = i; j >= h && e < arr[j - h]; j -= h) {
        arr[j] = arr[j - h];
      }
      arr[j] = e;
    }
    h = (h / 3).toFixed(0);
  }
  return arr;
}

var arr1 = [3, 5, 1, 6, 9, 4, 8, 6, 10, 56, 23, 64];
console.log(sort(arr1));
