// let array =[11,28,39,41,8]
// let summ=0
// for(let i=0;i<array.length;i++){
//     summ=summ+array[i]
// }
// console.log(summ)

// let f = 1;
// function fact(n) {
//   if (n == 0) {
//     return 1;
//   }

//   f = f * n;
//   fact(n - 1);
// }
// fact(5);
// console.log(f);

// array Stringarray and array of object
// spare rest distructuring arrow
// Node

let arr = [2, 3, 7, 2, 4, 3, 7, 11, 13];
let arr2 = [];
for (let i = 0; i < arr.length; i++) {
  if (!arr2.includes(arr[i])) {
    arr2.push(arr[i]);
  }
}
console.log(arr2);
