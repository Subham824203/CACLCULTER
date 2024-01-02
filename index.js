function input(num){
  let result =document.getElementById("result");
  result.value += num;
}
function calc(){
    let result =document.getElementById("result");
    let output= eval(result.value);
    result.value= output;
}
function cancel(){
    let result=document.getElementById("result");
    result.value="";
}
