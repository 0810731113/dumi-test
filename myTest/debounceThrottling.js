//debounce防抖
function keyup(e) {
  console.log(e.target.value);
}

function debounce(method, delay) {
  var timer = void 0;
  return function() {
    var self = this;
    var args = arguments;
    timer && clearTimeout(timer);
    timer = setTimeout(function() {
      method.apply(self, args);
      timer = void 0;
    }, delay);
  };
}

document
  .querySelector('#test')
  .addEventListener('keyup', debounce(keyup, 1000));

//throttling 节流

function scroll() {
  console.log('触发了');
}

function throttling(method, wait) {
  var start, timer;
  return function run() {
    var self = this;
    var args = arguments;
    if (!start) {
      start = Date.now();
    }
    if (Date.now() - start >= wait) {
      method.apply(self, args);
      start = null;
      timer = null;
    } else {
      timer && clearTimeout(timer);
      timer = setTimeout(function() {
        run.apply(self, args);
      }, wait);
    }
  };
}

ducument.addEventListener('scroll', throttling(scroll, 200));
