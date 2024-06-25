// function findMax(arr,n){
//    for(var i=0;i<arr.length-1;i++){
//        for(var j=0;j<arr.length-i-1;j++){
//         if(arr[j]<arr[j+1]){
//             var temp =arr[j]
//             arr[j]=arr[j+1]
//             arr[j+1]=temp
//         }

//        }
//    }
//    console.log(arr[n-1])
// }
// var arr=[10,25,30,20,50,70];
// findMax(arr,4)

// function fac(n) {
//   if (n == 0 || n == 1) {
//     return 1;
//   }
// return n*fac(n-1);
// }


// function nPr(n,r){
//     let Ans = (fac(n)/(fac(n-r)))
//     return Ans
// }
// function nCr(n,r){
//     let Ans = nPr(n,r)/(fac(r))
//     return Ans
// }
// console.log(nPr(6,4))
// console.log(nCr(6,4))
//--------------------------------------------EKTA MAM
let arr=[5,7,8,34,2,4]
let value = 34
// arr.forEach((val,indx)=>{
//   if (arr[indx]==value)
//     {
//       arr.splice(indx,1)
//     }
// })
// console.log(arr)

let indx=arr.findIndex((val)=>(
value==val
 ))
if(indx>0){
  arr.splice(indx,1)
}
console.log(arr)