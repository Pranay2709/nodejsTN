// let str="I am an Indian"
// console.log(str.split(" ").join(''))

let str="I am an Indian "
let arr=str.split(' ');
arr.forEach((val,indx)=>{
arr[indx]=val.split('').reverse().join('')
})
console.log(arr.join(' '))