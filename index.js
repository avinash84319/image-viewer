


var passobj1={
    username:"avinash",
    password:"avinash22"
}

var lispass=[passobj1]

var search=false

var file=1
var imgno=0


function changeimage(n,g){
    document.getElementsByTagName('button')[file-1].style.color="black";
    file=n
    if(g<1){
       imgno=1 
    }
    else{
    imgno=g
    }
    console.log((n) +" button thousand was clicked")
    document.getElementById("frame").src=(file)+"000f/img"+(imgno)+".jpg";
    document.getElementsByClassName("nonclicked")[file-1].style.color="blue";
}

function next(){
 changeimage(file,imgno+1)
}

function prev(){
 changeimage(file,imgno-1)
}

function remember(){

}

function search(){
    var ser=document.getElementById("input").value;
    document.getElementById("frame").src=(ser)+".jpg";
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