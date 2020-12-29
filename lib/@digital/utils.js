(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global['@digital/utils'] = factory());
}(this, (function () { 'use strict';

  // This function isn't used anywhere, so
  // Rollup excludes it from the bundle...
  var PI = 3.14;

  // This function gets included
  function cube(x) {
    return x * x * x * PI;
  }

  // 只使用了 cube, 所以 maths 中的 square 会被 tree shaking 移除掉
  function foo(x) {
    if (x) {
      return cube(x);
    }
    return -1;
  }

  {
    console.log('-----');
  }

  var main = {
    foo: foo
  };

  return main;

})));
//# sourceMappingURL=utils.js.map
