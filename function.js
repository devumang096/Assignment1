function msg(){
    console.log("hello world");
}
msg()
//function
let a=msg();
console.log(a);

function add(a=10,b=6){
    console.log(a+b);
}
add();