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

//Array.prototype.filter
//array.filter() will loop through each and every element in the array with elements matching the condition in the callback function

const evens=numbers.filter((num)=>num%2==0)

const podcasts=[
    {title:"Learn React",rating:9,paid:true},
    {title:"Learn React1",rating:5,paid:true},
    {title:"Learn React2",rating:7,paid:true},
    {title:"Learn React3",rating:2,paid:false},
    {title:"Learn React4",rating:6,paid:false},
]
function getFreePodcasts(podcasts){
    //filter list by paid prop
    //use map to create a new array with the specified properties
    return podcasts
        .filter(item=>item.paid==false)
        .map(podcasts=>{
            return{
                title:podcasts.title,
                rating:podcasts.rating
            }
        })
}