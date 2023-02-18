


var passobj1={
    username:"avinash",
    password:"avinash22"
}
var lispass=[passobj1]

var s=""

var search=false

var rememberlist=[]
var file=1
var imgno=0
var k=0

function changeimage(n,g,f){
    document.getElementById((k)).style.color="black";
    document.getElementById((k)).style.background="skyblue";
    k=f
    file=n
    if(g<1){
       imgno=1 
    }
    else{
    imgno=g
    }
    console.log((n) +" button thousand was clicked")
    document.getElementById("frame").src=(file)+"00f/img"+(imgno)+".jpg";
    document.getElementById((f)).style.color="white";
    document.getElementById((f)).style.background="blue";
    return k,file,imgno;
}

function next(){
 changeimage(file,imgno+1,k)
}

function prev(){
 changeimage(file,imgno-1,k)
}

function remember(){
  s=s+','+(file)+"00f/img"+(imgno)+".jpg\n";
  document.getElementsByClassName("display")[0].innerHTML=s;
  return s
}

function find(){
    var ser=document.getElementById("input").value;
    document.getElementById("frame").src=(ser);
    return 0
}

function checkpass(){
    var u=document.getElementById("input-login-username").value;
    var p = document.getElementById("input-login-password").value;

    var passcheck={
        username:u,
        password:p
    }

    search=false;

    for(var i=0;i<lispass.length;i++){
        if(passcheck.username==lispass[i].username && passcheck.password==lispass[i].password){
            search=true;
            break;
        }
    }
    console.log(search);

    if(search){
        location.replace("./main.html")
    }

    return search
}

function send(){
    var win = window.open(`https://api.whatsapp.com/send/?phone=9448483336&text=here+is+my+remember+list+${s}&type=phone_number&app_absent=0`, '_blank');
}