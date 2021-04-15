/*function Event(){
  this.list=[],
    this.on=function(key,cb){//订阅事件
      if(!this.list[key]){
        this.list[key] = []
      }
      this.list[key].push(cb)
    },
    this.emit = function(){//触发事件
      var key = Array.prototype.shift.call(arguments)
      var e = this.list[key]
      if(!e){
        return
      }
      var args = Array.prototype.slice.call(arguments)
      for(var i = 0;i<e.length;i++){
        e[i].apply(null,args)
      }
    }
}

var a = new Event()
a.on('a',function(x){console.log(x)})
a.on('a',function(x){console.log(x,'第二次')})
console.log(a.list);
a.emit('a',1)//1
a.emit('a',2)//1
a.emit('a',3)//1*/

var data = {
  str: '',
};

function Event() {
  this.list = [];
  (this.on = function(key, cb) {
    if (!this.list[key]) {
      this.list[key] = [];
    }
    this.list[key].push(cb);
  }),
    (this.emit = function() {
      var key = Array.prototype.shift.call(arguments);
      var e = this.list[key];
      if (!e) {
        return;
      }
      var args = Array.prototype.slice.call(arguments);
      for (var i = 0; i < e.length; i++) {
        e[i].apply(null, args);
      }
    });
}

var e = new Event();
e.on('change', function(x) {
  a.innerHTML = x;
});

Object.defineProperty(data, 'str', {
  set: function(newVal) {
    e.emit('change', newVal);
    //data.str = newVal;
    return newVal;
  },
  get: function() {
    return obj.str;
  },
});
