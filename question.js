// Being a nonconformist, Volodya is displeased with the current state of things, particularly with the order of natural numbers (natural number is positive integer number). He is determined to rearrange them. But there are too many natural numbers, so Volodya decided to start with the first n. He writes down the following sequence of numbers: firstly all odd integers from 1 to n (in ascending order), then all even integers from 1 to n (also in ascending order). Help our hero to find out which number will stand at the position number k.

// The only line of input contains integers n and k (1 ≤ k ≤ n ≤ 10^12).

// Print the number that will stand at the position number k after Volodya's manipulations.
let n=12;
let k=6;

let evencount=Math.floor(n/2);
let oddcount=n-evencount;

if(k<=oddcount){
    console.log(2*k-1);
}
else{
    console.log(2*(k-oddcount));
}