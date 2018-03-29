/*添加Array方法first() 返回数组第一个元素*/
if (!Array.prototype.first) {
    Array.prototype.first = function () {
        console.log(`返回数组的第一个对象`);
        return this[0];
    }
}

arr = [1, 2, 3, 4, 5]
// console.log(arr.first())


/*添加Array方法combine() 可将多个数组去重合并*/
if (!Array.combine) {
    Array.combine = function () {
        let arr = [].concat.apply([], arguments);  //没有去重复的新数组
        console.log(arr)
        return Array.from(new Set(arr));
    }
}

a = [1, 2, 3, 4]
b = [3, 4, 5, 6]
// console.log(Array.combine(b, a))


/*对象拷贝实现*/
function copy(obj) {
    var copy = Object.create(Object.getPrototypeOf(obj));
    var propNames = Object.getOwnPropertyNames(obj);

    propNames.forEach(function (name) {
        var desc = Object.getOwnPropertyDescriptor(obj, name);
        Object.defineProperty(copy, name, desc);
    });

    return copy;
}

var obj1 = {a: 1, b: 2};
var obj2 = copy(obj1); // obj2 looks like obj1 now
// console.log(obj2)


/*搜索数组里某些元素的出现index*/
var array = [1, 3, 4, 5, 6, 7, 8]
var search = [1, 4, 8, 9]
var result = []


//*用空格分隔,将数组转化为字符串*/
var a = ['liLei', 'hanMeiMei', 'daQiang']

// console.log(a.join(' '))

function f(a, b, c) {
    var s = Array.prototype.join.call(arguments, '-');
    // console.log(s); // '1,a,true'
}

f(1, 'a', true);

var a2 = [2, 4, 54, 7, 4]
var a3 = Array.prototype.map.call(a2, x => {
    return x * 2
})
// console.log(a3)

/*用for of 处理数组迭代器iterator*/
var arr = ["a", "b", "c"];
// var iterator = arr.values(); //chrome,fireFox都未实现
var iterator = arr.keys()
for (let i of iterator) {
    // console.log(i)
}


/*用map进行反转字符串*/
var str = '12345';
var a4 = Array.prototype.map.call(str, function (x) {
    return x;
}).reverse().join('');
// or
var a5 = [...str].map(function (x) {
    return x
}).reverse().join('');
// console.log(a4,a5)


/*reduce的应用练习*/
let a6 = [0, 1, 2, 3, 4];
let a7 = a6.reduce((prev, curr) => prev + curr);
// console.log(a7,a6)

//去重排序统计再加上去重后求和
let a8 = [1, 3, 4, 5, 6, 4, 3, 32, 6, 3, 3];
let a9 = {};
let a10 = a8.sort((a, b) => {
    return a - b
})
const arr11 = [1,3,4,5,6,4,3,32,6,3,3];
const map = arr.reduce((m, x) => m.set(x, (m.get(x) || 0) + 1), new Map())
// console.log(map)

a10.forEach(x => {
    if (9[x]) {
        9[x]++
    } else {
        a9[x] = 1
    }
})
a10 = [...new Set(a10)];
let a11 = a10.reduce((sum, current, index, arry) => {
    return sum + current;
})
// console.log(a10, a9, a11)



/*reverse会不会改变原数组试验*/
var myArray = ['one', 'two', 'three'];
myArray.reverse();

// console.log(myArray) // ['three', 'two', 'one']


/*用shift去重后原数组的下标变化探寻*/
let a12 = [1, 2, 3];
let b12 = a12.shift();

// console.log(a12.indexOf(2),a12)
// 结论: 如果用shift 更改数组,被删除元素后的元素都会前移


