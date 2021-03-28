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
  for (var i = 1; i < len; i++) {
    var e = arr[i];
    for (var j = i; j > 0 && e < arr[j - 1]; j--) {
      arr[j] = arr[j - 1];
    }
    arr[j] = e;
  }
  return arr;
}

var arr1 = [3, 5, 1, 6, 9, 4, 8, 6, 10, 56, 23, 64];
console.log(sort(arr1));
