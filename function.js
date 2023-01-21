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

const arr=[2,4,5]
const multipleThree = arr.map((num)=>num*3)

//output => multipleThree = [6,12,15]

//foreach method

function func(){
    //original array
    const items=[12,24,36];
    const copy=[];

    items.forEach(function (item){
        copy.push(item*2+2);
    });

    console.log(copy);
}
func()

//finding netEarning
const emp=[
    {name:"Adam",salary:5000,bonus:300,tax:1000},
    {name:"Noah",salary:56000,bonus:200,tax:2000},
    {name:"Rosh",salary:5300,bonus:560,tax:110},
    {name:"Aliana",salary:5700,bonus:600,tax:500},
    {name:"Gil",salary:5020,bonus:200,tax:2000}
]

let newArr=employees.map((obj)=>{
    newObj={};
    newObj.name=obj.name;
    newObj.netEarning=obj.salary+obj.bonus-obj.tax;
    return newObj;
});
// let newArr=employees.map(calCat);
console.log(newArr);

const prices=[1800,200,null,3000,5000,"Thousand",500,8000];

//ele ->2000 & ele is not a null
//output=[3000,5000,8000]

//isNaN

const element=prices.filter((num)=>num>2000 && num)

console.log(element);