
let a="";
let ans=0;
let b="";
let c=0;
function myfun(me){
    a+=me;
    b+=me;
    document.getElementById("ans").innerHTML=a;
    console.log(b);
}
function myeq(me){
    if(c===1){
        a=a.split(" ");
        a=a.map(Number);
        var sum=0;
        for(var i=0;i<a.length;i++){
            sum+=a[i];
        }
        a=sum/a.length;
        b=sum/a.length;
        document.getElementById("ans").innerHTML=a;
        console.log(b);
    }
    else if(c===2){
        a=a.split(" ");
        a=a.map(Number);
        a=a.sort(function(x,y){return y-a});
        if(a.length%2===0){
            ans=(a[a.length/2]+a[a.length/2-1])/2
        }
        else{
            ans=a[Math.floor(a.length/2)]
        }
        a=ans;
        b=ans;
        document.getElementById("ans").innerHTML=a;
        console.log(b);
    }
    else{
        ans= eval(b);
        a=ans;
        b=ans;
        document.getElementById("ans").innerHTML=a;
        console.log(b);
    }
}
function mydel(me){
    a="";
    b="";
    document.getElementById("ans").innerHTML=0;
}
function mytri(me){
    if(me==="space"){
        b+=" ";
    }
    else if(me==="log("){
       b+=("Math."+me+"10");
    }
    else if(me==="ln("){
       b+=("Math.log(");
    }
    else if(me==="√("){
        b+=("Math.sqrt(");
    }
    else if(me==="exp("){
        b+=("Math.exp(");
    }
    else{
       b+=("Math."+me);
    }
    if(me==="space"){
        a+=" ";
    }
    else if(me==="asin("){
       a+="Sin<sup>-1</sup>(";
    }
    else if(me==="acos("){
       a+="Cos<sup>-1</sup>(";
    }
    else if(me==="atan("){
       a+="Tan<sup>-1</sup>(";
    }
    else if(me==="acot("){
       a+="Cot<sup>-1</sup>(";
    }
    else if(me==="asec("){
       a+="sec<sup>-1</sup>(";
    }
    else if(me==="acosec("){
       a+="Cosec<sup>-1</sup>(";
    }
    else{
    a+=me;
    }     
    document.getElementById("ans").innerHTML=a;
    console.log(b);
}
function mydeg(me){
    a+="<sup>°</sup>"
    document.getElementById("ans").innerHTML=a;
    b+="*Math.PI/180"
    console.log(b)
}
function myback(me){
    a=a.slice(0,-1);
    b=b.slice(0,-1);
    document.getElementById("ans").innerHTML=a;
    console.log(b);
}
function myst(me){
    if(me==="mean"){
        c=1;
    }
    if(me==="median"){
        c=2;
    }
    if(me==="mode"){
        c=3;
    }
    document.getElementById("ans").innerHTML=me+" ";
}