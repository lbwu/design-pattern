function Dog(name, age) {
    this.name = name;
    this.age = age;
}

Dog.prototype.eat = function() {
    console.log(this.name);
}

let dog = new Dog('lucy', 9);
dog.eat();


function deepClone(obj) {
    if(typeof obj !== 'object' || obj === null) {
        return null;
    }

    let copy = Array.isArray(obj) ? [] : {};
    for(let key in obj) {
        console.log(key, obj.hasOwnProperty(key))
        if(obj.hasOwnProperty(key)) {
            if(typeof obj[key] === 'object' && obj[key]!==null) {
                copy[key] = deepClone(obj[key])
            }else {
                copy[key] = obj[key];
            }
        }
    }

    return copy;
}

let test = {
    name: 'wu',
    gender: {
        famle: false,
        male: true
    },
    age: [9,3,5],
    eat: function() {
        console.log('mmm')
    }
}

let res = deepClone(test);
console.log(res);