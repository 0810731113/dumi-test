function testable(isTestable: Boolean) {
  return function(target) {
    console.log(target);
    target.isTestable = isTestable;
  };
}

@testable(true)
export class MyTestableClass {}

@testable(false)
export class MyClass {}
