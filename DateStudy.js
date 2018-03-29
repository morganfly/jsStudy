if (!Date.form1) {
    Date.form1 = (x) => {
        try {
            let date = (x === 0) ? new Date(x) : new Date();
            console.log(date)
            return date.getFullYear() + '年' + parseInt(date.getMonth() + 1) + '月' + date.getDate() + '日' + date.getHours() + '时' + date.getMinutes() + '分' + date.getSeconds() + '秒'
        } catch (error) {
            console.log(error)
            return
        }
    }
}

if (!Date.form2) {
    Date.form2 = (x) => {
        try {
            let date = (x === 0) ? new Date(x) : new Date();
            console.log(date)
            return date.getFullYear() + '.' + parseInt(date.getMonth() + 1) + '.' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
        } catch (error) {
            console.log(error)
            return
        }
    }
}


console.log(Date())
console.log(Date.form2())




//------------------------------------狗叫原型题-----------------------------------------------------------------------------
function Animals(name){
    this.name = name;
}

let dog = new Animals('dog')
Animals.prototype.yep = (sound)=>{
    console.log(sound)
}
dog.__proto__.yep2= (sound)=>{
    console.log(sound)
}
console.log(dog.name)
dog.yep('wang')
dog.yep2('wangWang');

class Animal{
    constructor(name){
        this.name = name;
    }
    yep(sound){
        console.log(sound)
    }
}
let doggy = new Animal('doggy')
console.log(doggy.name)
doggy.yep('wawawa')