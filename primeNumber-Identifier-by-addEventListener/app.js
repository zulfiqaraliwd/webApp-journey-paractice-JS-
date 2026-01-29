
var btn = document.getElementById('btn')
var  res = document.getElementById('result') 

btn.addEventListener('click',(e)=> {
 var inp = document.getElementById('inpNum').value
if (inp ==""){
   alert("please enter any number");
   return
  
}
else if(inp <= 1){
    res.innerText = "it is not prime number"
    return
    
}
for(var i =2; i < inp ; i++){
    if(inp % i=== 0){
         res.innerText = "it is not prime number"
         return
         
    }   
}
res.innerText = "it is prime number"
})