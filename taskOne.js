const taskOne ={
  add :(num1, num2)=>{
    return num1+num2
  },

  stringLength :(str) =>{
    if(str.length >=1 && str.length <=10 ){
    return str.length
  }
  else{
    throw  new Error('string length should be between 1 and 10')
  }
  }
}

module.exports =taskOne