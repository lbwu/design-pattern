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