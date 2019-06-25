// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const push = (array, ele) => {
//   if (typeof array != `object`) throw TypeError;
//   array[array.length] = ele;
//   console.log(array);
//   return array;
// };

// push(array, 11);

// let print = res => {
//   console.log(res);
// };

// let add = res => {
//   return res + 1;
// };

// [1, 2, 3].forEach(x => {
//   print(add(x));
// });

// function* dataConsumer() {
//   console.log('Started');
//   console.log(`1. ${yield}`);
//   console.log(`2. ${yield}`);
//   return 'result';
// }

// let genObj = dataConsumer();
// genObj.next()
// // Started
// genObj.next('a')
// // 1. a
// genObj.next('b')
// // 2. b

function getSomething() {
  return "something";
}

async function testAsync() {
  return Promise.resolve("hello async");
}

async function test() {
  const v1 = await getSomething();
  const v2 = await testAsync();
  console.log(v1, v2);
}

test();
