//1-Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.
function pl()
{
	var robertoFirmino = document.getElementById("side1").value;
    var sadioMane = document.getElementById("side2").value;
    var mohamedSalah = document.getElementById("side3").value;
    var klop = (parseInt(robertoFirmino) + parseInt(sadioMane) + parseInt(mohamedSalah))/2;
	var liverpool = Math.sqrt(klop*(klop-robertoFirmino)*(klop-sadioMane)*(klop-mohamedSalah));
	document.getElementById("result1").innerHTML = liverpool;
}

//2. Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched

var guess = Math.floor((Math.random()*10) + 1);
var i = document.getElementById("random").value;
function submit()
{
if(guess == i)
	{
		alert("Good Work");
	}
	else
	{
		alert("Not matched");
	}
}

//3.Write a JavaScript program to calculate multiplication and division of two numbers (input from user)

function multiply()
{
var aboTrika = document.getElementById("first").value;
var azarow = document.getElementById("second").value;
document.getElementById("result").innerHTML = aboTrika*azarow;
}
function divide()
{
var aboTrika = document.getElementById("first").value;
var azarow = document.getElementById("second").value;
document.getElementById("result").innerHTML = aboTrika/azarow;
}

//4. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
function cels()
{
	var cel = document.getElementById("temp").value;
	var ctemp = cel*9/5+32;
	document.getElementById("fahe").innerHTML = ctemp;
}

function fahe()
{
	var deg = document.getElementById("temp").value;
	var cdeg = (deg-32)*5/9;
	document.getElementById("fahe").innerHTML = cdeg;
}

//5. Write a JavaScript exercise to get the extension of a filename
function ext(){
	var fileName = document.getElementById("file").value;
	document.getElementById("extn").innerHTML = fileName.split('.').pop();
}
//6. Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference.

function number13()
{
	var x = document.getElementById("num6").value;
	if(x <= 13)
	{
		document.getElementById("number6").innerHTML = 13-x;
	}
	else
	{
		document.getElementById("number6").innerHTML = x*2;
	}
}

//7. Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum

function val()
{
	var a = document.getElementById("value1").value;
	var b = document.getElementById("value2").value;
	
	if(a==b)
	{
		document.getElementById("value").innerHTML = (parseInt(a) + parseInt(b))*3;
	}
	else
	{
		document.getElementById("value").innerHTML = (parseInt(a) + parseInt(b));
	}
}

//8. Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.

function check50v()
{
	var c = document.getElementById("check501").value;
	var d = document.getElementById("check502").value;
	if(( c == 50 || d == 50 ) || ( parseInt(c) + parseInt(d) == 50 ))
	{
		alert("True");
	}
	else
	{
		alert("False");
	}
}


//9- Write a JavaScript program to check a given integer is within 20 of 100 or 400

function manu()
{
	var f = document.getElementById("pogba").value;
	if((Math.abs(parseInt(f) - 100) <= 20) || (Math.abs(parseInt(f)- 400) <= 20))
	{
		alert("True");
	}
	else
	{
		alert("False");
	}
}


//10-Write a JavaScript program to check from two given integers, if one is positive and one is negative.

function pg()
{
	var g = document.getElementById("pos").value;
	var h = document.getElementById("nega").value;
	if((g<0 && h>0) || g>0 && h<0)
		{
			alert("correct");
		}
	else
		{
			alert("wrong");
		}
}

//11- Write a JavaScript program to check if two given integer values are in the range 50..99 (inclusive). Return true if either of them are in the said range

function program()
{
	var k = document.getElementById("pro1").value;
	var l = document.getElementById("pro2").value;

	if((k>=50 && k<=99) || (l>=50 && l<=99))
		{
			alert("true");
		}
	else
		{
			alert("false");
		}
}


//12- Write a JavaScript program to find the largest of three given integers.

function largest()
{
	var m = document.getElementById("larg1").value;
	var n = document.getElementById("larg2").value;
	var o = document.getElementById("larg3").value;
	if(m > n)
	{
		document.getElementById("larg").innerHTML = m;
	}
	else
	{
		document.getElementById("larg").innerHTML = n;
	}
	if(o>m)
	{
		document.getElementById("larg").innerHTML = o;
	}
	else
	{
		document.getElementById("larg").innerHTML = m;
	}
	if(n>o)
	{
		document.getElementById("larg").innerHTML = n;
	}
	else
	{
		document.getElementById("larg").innerHTML = o
	}
}

//13-Write a JavaScript program to check if two numbers are in range 40..60 or in the range 70..100 inclusive

function range()
{
	var p = document.getElementById("fnum").value;
	var q = document.getElementById("snum").value;
	if((p>=40 && p<=60) || (q>=40 && q<=60)||(p>=70 && p<=100) || (q>=70 && q<=100))
		{
			alert("correct");
		}
	else
		{
			alert("wrong");
		}
}
