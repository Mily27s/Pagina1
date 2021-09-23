function operaciones1(){
            	var num1= prompt('ingrese el primer numero: ');
            	var num2= prompt('ingrese el segundo numero: ');
            	var num3= prompt('ingrese el tercer numero: ');
            	var num4= prompt('ingrese el cuarto numero: ');
            	var suma=parseInt(num1)+parseInt(num2)+parseInt(num3)+parseInt(num4);
            	document.getElementById("mostrar").innerHTML="La Suma de "+num1+'+'+num2+'+'+num3+'+'+num4+
            	" es igual a:"+suma+"<br>";
            	}
            		{
            			function operaciones2(){
            	var num1= prompt('ingrese el primer numero: ');
            	var num2= prompt('ingrese el segundo numero: ');
            	var num3= prompt('ingrese el tercer numero: ');
            	var num4= prompt('ingrese el cuarto numero: ');
            	var resta=parseInt(num1)-parseInt(num2)-parseInt(num3)-parseInt(num4);
            	document.getElementById("mostrar").innerHTML="La Resta de "+num1+'-'+num2+'-'+num3+'-'+num4+" es igual a:"+resta+"<br>";
            }
            {	
            function operaciones3(){
            	var num1= prompt('ingrese el primer numero: ');
            	var num2= prompt('ingrese el segundo numero: ');
            	var num3= prompt('ingrese el tercer numero: ');
            	var num4= prompt('ingrese el cuarto numero: ');
            	var multiplicacion=parseInt(num1)*parseInt(num2)*parseInt(num3)*parseInt(num4);
            	document.getElementById("mostrar").innerHTML="La Multiplicacion de "+num1+'*'+num2+'*'+num3+'*'+num4+" es igual a:"+multiplicacion+"<br>";
            }
            {	
            function operaciones4(){
            	var num1= prompt('ingrese el primer numero: ');
            	var num2= prompt('ingrese el segundo numero: ');
            	var num3= prompt('ingrese el tercer numero: ');
            	var num4= prompt('ingrese el cuarto numero: ');
            	var resta=parseInt(num1)/parseInt(num2)/parseInt(num3)/parseInt(num4);
            	document.getElementById("mostrar").innerHTML="La Division de "+num1+'/'+num2+'/'+num3+'/'+num4+" es igual a:"+division+"<br>";
            }	     
            {
                  function valorabsoluto(){
                  var num1=parseInt(prompt("ingrese el primer numero: "));
                  var num2=parseInt(prompt("ingrese el segundo numero: "));
                  document.getElementById("mostrar").innerHTML="El valor absoluto de este numero es: "+Math.abs(num1);
                  document.getElementById("mostrar").innerHTML+="El valor absoluto de este numero es: "+Math.abs(num2);
            }
            {
             function valor2(){
                  var num1=parseInt(prompt("ingrese el primer numero: "));
                  var num2=parseInt(prompt("ingrese el segundo numero: "));
                  var num3=parseInt(prompt("ingrese el tercer numero: "));
                  var unidad=num3*1;
                  var decena=num2*10;
                  var centena=num1*100;
                  document.getElementById("mostrar").innerHTML="El numero es: "+num1+num2+num3+"<br>";
                  document.getElementById("mostrar").innerHTML+="El valor relativo del numero "+num1+ " es: "+centenas+"<br>";
                  document.getElementById("mostrar").innerHTML+="El valor relativo del numero "+num2+ " es: "+decenas+"<br>";
                  document.getElementById("mostrar").innerHTML+="El valor relativo del numero "+num3+ " es: "+unidad+"<br>";
              }