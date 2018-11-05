class myError extends Error {
    constructor(str) {
        super();
        this.message = str || '发生错误';
        this.name = 'myError';
    }
};

// throw new myError(`自定义错误`)


const frmData = {
    name: `Ruan`,
    age: 27,
    sex: `man`,
    favorite: `PCgame`,
}

console.log(frmData)

function obj2str(obj) {
    if (typeof obj != 'object') {
        throw TypeError(`Function 'obj2str' param Error`)
    }

    let frmDataStr = ''

    for (key in obj) {
        frmDataStr += `${key}:${obj[key]}; `
    }

    return frmDataStr;
}

console.log(obj2str(1))