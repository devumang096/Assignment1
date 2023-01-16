// function msg(){
//     console.log("hello world");
// }
// msg()
// //function
// let a=msg();
// console.log(a);

// function add(a=10,b=6){
//     console.log(a+b);
// }
// add();

function square(num){
    return num*num;
}
const square = function(num){
    return num*num;
}
const square = (num) => num*num;

function Greeting(props){
    return <h1>{props.message}</h1>
}

// Array.prototype.map 
//array.map() returns the new array by transforming each and every element
//in the original array by applying a function to it.
const numbers=[1,2,3,4,5,6,7,8,9];
numbers.reverse() //mutable method

const squareNumbers=numbers.map((num)=>num*num)

const tenMultileArray = numbers.map((num)=>num*10)

const stringArray=["Product1","Prodcut2","Prodcut3","Product4"]
const elementArray = stringArray.map((product)=>{
    return `<h1>${product}</h1>`
})
function modifyArray(stringArray){
    let modifiedArray =[]
    for(let i=0;i<stringArray.length;i++){
        modifiedArray.push(`<h1>${stringArray[i]}</h1>`)
    }
    return modifiedArray
}