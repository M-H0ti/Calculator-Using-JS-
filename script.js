//Declaring Variables
var a = document.getElementById("bo").value;
var a1 = a;
var b = document.getElementById("bc").value;
var b1 = b;
var c = document.getElementById("modulus").value;
var c1 = c;
var d = document.getElementById("cls").value;
var d1 = d;
var e = document.getElementById("seven").value;
var e1 = +e;
var f = document.getElementById("eight").value;
var f1 = +f;
var g = document.getElementById("nine").value;
var g1 = +g;
var h = document.getElementById("divide").value;
var h1 = h;
var i = document.getElementById("four").value;
var i1 = +i;
var j = document.getElementById("five").value;
var j1 = +j;
var k = document.getElementById("six").value;
var k1 = +k;
var l = document.getElementById("multiply").value;
var l1 = l;
var m = document.getElementById("one").value;
var m1 = +m;
var n = document.getElementById("two").value;
var n1 = +n;
var o = document.getElementById("three").value;
var o1 = +o;
var p = document.getElementById("minus").value;
var p1 = p;
var q = document.getElementById("zero").value;
var q1 = +q;
var r = document.getElementById("dot").value;
var r1 = r;
var s = document.getElementById("equal").value;
var s1= s;
var t = document.getElementById("plus").value;
var t1= t;

//Finished Declaring Variables
//Declaring Functions

function bracketO(){/*bracket Open Function */
    document.getElementById("screen").value += a1;
}

function bracketC(){/*bracket Close Function */
    document.getElementById("screen").value += b1;
}

function modulus(){/*Modulus Function */
    document.getElementById("screen").value += c1;
}

function cls(){/*Clear Screen Function */
    document.getElementById("screen").value = "";
}

function seven(){/*Number Seven Function */
    document.getElementById("screen").value += e1;
}

function eight(){/*Number eight Function */
    document.getElementById("screen").value += f1;
}

function nine(){/*Number Nine Function */
    document.getElementById("screen").value += g1;
}

function divide(){/*Divide Function */
    document.getElementById("screen").value += h1;
}

function four(){/*Number Four Function */
    document.getElementById("screen").value += i1;
}

function five(){/*Number Five Function */
    document.getElementById("screen").value += j1;
}

function six(){/*Number Six Function */
    document.getElementById("screen").value += k1;
}

function multiply(){/*Multiply Function */
    document.getElementById("screen").value += l1;
}

function one(){/*Number one Function */
    document.getElementById("screen").value += m1;
}

function two(){/*Number two Function */
    document.getElementById("screen").value += n1;
}

function three(){/*Number three Function */
    document.getElementById("screen").value += o1;
}

function minus(){/*Minus Function */
    document.getElementById("screen").value += p1;
}

function zero(){/*Number Zero Function */
    document.getElementById("screen").value += q1;
}

function dot(){/*dot Function */
    document.getElementById("screen").value += r1;
}

function plus(){/*Plus Function */
    document.getElementById("screen").value += t1;
}

function calculate(){
    
    if(document.getElementById("screen").value === ""){
        
        document.getElementById("Screen").style.borderColor="red";
    }
    else{
    document.getElementById("screen").value = eval(document.getElementById("screen").value);
    }
}

function reset(){
    {
        document.getElementById("screen").value="";
    }
}
