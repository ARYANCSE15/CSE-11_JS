const result=document.getElementById("para");
result.innerHTML="Hello World";
result.title="AS";
console.log(result);
const x=document.getElementsByClassName("sand");
console.log(x);
x[0].innerHTML="Aryan";
x[1].innerHTML="Sharma";
const result3=document.getElementsByTagName("p");
result3[2].innerHTML="Archit is nigga";
result3[1].style.color="blue";
result3[1].innerText="my paragraph";
const test2= document.querySelectorAll("ul li");
for(x in test2){
    test2[x].style.backgroundColor="green";
    test2[x].style.margin="10px";
    test2[x].style.color="blue";
}
function myFunction(){
(document.getElementById("myh1").setAttribute("class","democlass"));
alert(document.getElementById("myh1").getAttribute("class"));
}
function Onclick(){
    console.log("Button clicked");
}
function Onmouseover(){
    console.log("Mouse over button");
}
function Onmouseout(){
    console.log("Mouse out of button");
}
function Onmousedown(){
    console.log("Mouse down on button");
}
function Onmouseup(){
    console.log("Mouse moving over button");
}






