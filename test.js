// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const push = (array, ele) => {
//   if (typeof array != `object`) throw TypeError;
//   array[array.length] = ele;
//   console.log(array);
//   return array;
// };

// push(array, 11);

let print = res => {
  console.log(res);
};

let add = res => {
  return res + 1;
};

[1, 2, 3].forEach(x => {
  print(add(x));
});
