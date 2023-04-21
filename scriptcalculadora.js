function suma(){
    var n1=document.getElementById("num1").value; 
    var n2=document.getElementById("num2").value;
    var sum= parseInt(n1)+parseInt(n2);
    document.getElementById("result").innerHTML=sum; 
}
function resta(){
    var n1=document.getElementById("num1").value; 
    var n2=document.getElementById("num2").value;
    var restar= parseInt(n1)-parseInt(n2);
    document.getElementById("result").innerHTML=restar; 
}
function mult(){
    var n1=document.getElementById("num1").value; 
    var n2=document.getElementById("num2").value;
    var multi= parseInt(n1)*parseInt(n2);
    document.getElementById("result").innerHTML=multi;
}
function div(){
    var n1=document.getElementById("num1").value; 
    var n2=document.getElementById("num2").value;
    var divi= parseInt(n1)/parseInt(n2);
    document.getElementById("result").innerHTML=divi; 
}