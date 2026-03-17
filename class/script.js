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
};
sayHello()
var numberArray=[1,2,3];
var animals=["cat","dog","cow"];
var person={
    name:"aryan sharma",
    age:'51',
    title:"hello",
};
const sym1=Symbol(3);
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
document.write('Starting loop'+'<br/>');
for(count=0;count<10;count++){
    document.write('Current count:'+count);
    document.write('<br/>');
}
document.write("loop stopped")
//arrow function-anonymous//
var add2 = (a,b) =>{
    console.log(a+b);
};
add2(102,30);
let x=new Object();
//object is the class it is key value//
//array is an ordered collection of data//
//array is a special kind of object//
var myinfo=new Array();
var myinfo1=Array();
console.log(myinfo,myinfo1);
let collection=[
    {},
    [],
    "Aryan",
    15,
    undefined,
    null,
    new String("abc"),
    new Date(),
];
console.log(collection);
collection['Teacher Name']="John";
collection.phoneNo=7249792742;
console.log(collection);