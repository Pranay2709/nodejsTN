const sum=(a,b,addcomplate)=>{
    console.log(a+b)
    addcomplate()
}
    let addcomplate=()=>{
        console.log("add complated")
    }
    sum(5,10,addcomplate)