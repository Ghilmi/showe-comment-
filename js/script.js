
// get element into varibals

var idinput=document.getElementById("input");
var btn=document.getElementById("btn");
var para=document.getElementById("para");
var buttonel=document.querySelector("butn")
var i=0;
var arr=["showe","hide"]
// serche to my event :click,
 function btnC() {
    if(idinput.value !=""){
    //get element from input 
    var inputV=idinput.value;
    
    //put input value into oure paragraphe
    
    para.innerHTML = inputV;
    //empty input value
    document.getElementById("input").value="";
    }
}
buttonel.onclick=function (){
    buttonel.value=arr[i]
    i++;
    if(i==1){
        i=0;
    }
} 