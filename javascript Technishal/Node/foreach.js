let arr =[10,20,30,40,50]
// let n=1;
// arr.forEach((val,indx)=>{       //1st parameter val aapse , 2nd parameter index aapse
//     console.log(val)
//     console.log(indx)  
// })




// let array2=arr.map((val,ind)=>{   // same kam kare pan forEach return na kare map kare che.
//     return val +5
// })
// console.log(array2)

let arr2 =[11,20,33,40,55]
let arr1=arr.filter((val)=>{
    if(val%2!=0){  //odd number je hoy ama true store kare ane a vastu j khali store thase arr2 ma. aam filter kam kare
        return true
    }
})
console.log(arr2)