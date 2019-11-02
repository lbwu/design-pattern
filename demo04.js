// 迭代器
function *iteratorGenerator() {
    yield '1号技师'
    yield '2号技师'
    yield '3号技师'
}

const iterator = iteratorGenerator();

console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next()) // {value: '3号技师', done: false }
console.log(iterator.next()) // {value: undefined, done: true }


function iteratorGen(list) {// es5版本
    var index = 0;
    var len = list.length;
    return {
        next: function() {
            var done = index >= len;
            var value = !done ? list[index++] : undefined;
            return {
                done: done,
                value: value
            }
        }
    }
}

var itor = iteratorGen(['1号技师', '2号技师', '3号技师']);
console.log(itor.next())
console.log(itor.next())
console.log(itor.next())
console.log(itor.next())


// 可迭代协议
// 为了变成可迭代对象， 一个对象必须实现 @@iterator 方法, 
// 意思是这个对象（或者它原型链 prototype chain 上的某个对象）
//必须有一个名字是 Symbol.iterator 的属性:
// [Symbol.iterator]	返回一个对象的无参函数，被返回对象符合迭代器协议。

// 迭代器协议
// 它实现了一个 next() 的方法并且拥有以下含义：
// next 方法必须要返回一一个对象，该对象有两个必要的属性： done和value

var someString = 'hello world';
var someStringIterator = someString[Symbol.iterator]();

console.log(someStringIterator.next())
console.log(someStringIterator.next())
console.log(someStringIterator.next())
console.log(someStringIterator.next())

// 一些内置的语法结构，比如spread operator （[...value]），内部也使用了同样的迭代协议
var somewords = 'hello world';
console.log([...somewords]) // ["h", "e", "l", "l", "o"]