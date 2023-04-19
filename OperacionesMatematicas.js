function suma()
{
    var suma1,suma2,result;
    suma1=prompt("Escribe un numero", "");
    suma2=prompt("Escribe otro numero", "");
    result=parseInt(suma1)+parseInt(suma2);
    alert("La suma es:"+result)
}

function resta()
{
    var resta1,resta2,result2;
    resta1=prompt("Escribe un numero", "");
    resta2=prompt("Escribe otro numero", "");
    result2=parseInt(resta1)-parseInt(resta2);
    alert("La resta es:"+result2)
}
function multiplica()
{
    var mult1,mult2,result3;
    mult1=prompt("Escribe un numero", "");
    mult2=prompt("Escribe otro numero", "");
    result3=parseInt(mult1)*parseInt(mult2);
    alert("La multiplicacion es:"+result3)
}
function divide()
{
    var div1,div2,result4;
    div1=prompt("Escribe un numero", "");
    div2=prompt("Escribe otro numero", "");
    result4=parseInt(div1)/parseInt(div2);
    alert("La divicion es:"+result4)
}
function posnegat()
{
    var num=prompt("Escribe un numero:","");
    if (parseInt(num)<0)
    alert("El num es negativo:"+num);
    else
    if (parseInt(num)>0)
    alert("El num es positivo:"+num);
    if (parseInt(num)=0)
    alert("El num es cero:"+num);
}