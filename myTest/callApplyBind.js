var name = '小王';
var age = '17';

var obj = {
  name: 'xiaozhang',
  objAge: this.age,
  myFun: function(fm, t) {
    console.log(
      this.name + '年龄: ' + this.age,
      '来自： ' + fm + ' 去往： ' + t,
    );
  },
};

var db = {
  name: '德玛',
  age: 99,
};

obj.myFun.call(db, '成都', '上海');
obj.myFun.apply(db, ['成都', '上海']);
obj.myFun.bind(db, '成都', '上海')();
