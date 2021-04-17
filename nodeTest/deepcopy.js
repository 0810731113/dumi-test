function loop(obj, map = new Map()) {
  if (Object.prototype.toString.call(obj) === '[Object Array]') {
    return obj.map(item => {
      //map.add(item);
      if (map.has(item)) {
        return map.get(item);
      }
      return loop(item, map);
    });
  } else if (Object.prototype.toString.call(obj) === '[Object Object]') {
    const copyObj = {};
    for (const key in obj) {
      if (map.has(obj[key])) {
        copyObj[key] = map.get(obj[key]);
      }
      copyObj[key] = loop(obj[key], map);
    }
    return copyObj;
  } else {
    return obj;
  }
}

function deepcopy(obj) {
  if (JSON) {
    return JSON.parse(JSON.stringfy(obj));
  } else {
    const map = new Map();
    return loop(obj, map);
  }
}
