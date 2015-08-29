// 定义class
class Point {

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }

  // 静态方法，不会被‘实例’继承（见22行）
  static sayHi() {
    console.log('hi');
  }
}

var one = new Point(1,2);
console.log(one.toString());

// console.log(one.sayHi()); 报错！！！

// 与用prototype定义函数不同把：
console.log(Point.prototype);

/**
 * Class 继承
 * 子类必须在constructor方法中调用super方法，否则新建实例时会报错。
 * 这是因为子类没有自己的this对象，而是继承父类的this对象，
 * 然后对其进行加工。如果不调用super方法，子类就得不到this对象。
 */

class ColorPoint extends Point {

  constructor(x, y, color) {
    super(x, y); // 调用父类的constructor(x, y)
    this.color = color;
  }

  // 重写父类的方法
  toString() {
    // 调用父类的toString()
    return this.color + ' ' + super.toString();
  }

  // Accessor properties
  get xAndY() {
    return {x: this.x, y: this.y};
  }

  set xAndY([x, y]) {
    this.x = x;
    this.y = y;
  }

}

var two = new ColorPoint(1,2,'blue');
console.log(two.toString());

// 使用Accessor properties 来操作类的属性
two.xAndY = [10, 10];
console.log(two.xAndY);
