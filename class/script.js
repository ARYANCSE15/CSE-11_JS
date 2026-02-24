var num=10;
console.log(num);
console.log(typeof(num));
num=null;
console.log(num);
console.log(typeof(num));
num=undefined;
console.log(num);
console.log(typeof(num));
var sayHello=function(){
    console.log("Hello world")
}
sayHello()
var numberArray=[1,2,3];
var animals=["cat","dog","cow"];
var person={
    name:"aryan sharma",
    age:'51',
    title:"hello",
};
const sym1=Symbol(3)
console.log(sym1);
const sym2=Symbol(4);
console.log(sym2);
if(sym1==sym2){
    console.log("true")
}
else{
    console.log("false")
}
var count;
document.write('Starting loop'+"<br/>");
for(count=0;count<10;count++){
    document.write("Current count:"+count);
    document.write("<br/>");
}
document.write("loop stopped")