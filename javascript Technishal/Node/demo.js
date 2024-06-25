function calculator( a, b,oprator){
  if(oprator == '+'){
    let c=a+b;
    console.log(c);
  }
  else if (oprator == '-'){
    let c=a-b;
    console.log(c);
  }
  else if (oprator == '*'){
    let c=a*b;
    console.log(c);
  }
  else if (oprator == '/'){
    if(b==0){
        console.log("divide by 0 is not possible")
    }
    else{
        let c=a/b;
    }
    console.log(c);
  }
  else
  {
    console.log("wrong oprator");
  }
}

calculator(10, 5, '-');  
