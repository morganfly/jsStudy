// ------------------------------数组--------------------------------------------------------------------------
// 添加array方法first() 返回数组第一个元素
if (!Array.prototype.first) {
    Array.prototype.first = function () {
        console.log(`返回数组的第一个对象`);
        return this[0];
    }
}

// 添加Array方法combine() 可将多个数组去重合并
if (!Array.combine) {
    Array.combine = function () {
        let arr = [].concat.apply([], arguments);  //没有去重复的新数组
        console.log(arr)
        return Array.from(new Set(arr));
    }
}

//