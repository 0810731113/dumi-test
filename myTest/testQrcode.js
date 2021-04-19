function genarateQrcode() {
  let res = [];
  let res1 = new Set();
  while (res1.size < 10) {
    let num = ('' + Math.random()).slice(2, 10);
    console.log(res);
    // if(!res.includes(num) ){
    if (!res1.has(num)) {
      res1.add(num);
    }
  }
  return res1;
}

console.log(genarateQrcode());
