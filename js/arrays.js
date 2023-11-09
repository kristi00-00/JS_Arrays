function task1()
{
    let arr = Array.from(Array(10),()=>{return Math.round(Math.random()*20)});
console.log(arr.toString());
    
arr=[4,16,36,25];
let sum=arr.filter(index=>index%2==0).reduce((sum,elem)=>sum+Math.sqrt(elem),0);
alert(sum);
}
function task2()
{
    let arr = Array.from(Array(10),()=>{return Math.round(Math.random()*20)});
console.log(arr.toString());

let newArr=arr.filter(elem=>elem>0 && elem<10);
newArr=newArr.reduce((sum,elem)=>sum+elem,0);
console.log(newArr);
}
function isChetn(arr)
{
  return arr.every((elem)=>elem%2==0);
}
function calcFive(arr) 
{
 let newArr=arr.filter((elem)=>elem%5==0);
 return newArr;
}
function task4(){
let arr=[1,2,5,12,15,21];
console.log(calcFive(arr));
} 
function average(arr){
  let summa = arr.reduce((sum,elem)=>sum+elem,0);
  let elem = arr.length;
  return summa/elem;
}
function task5(){
  let arr=Array.from(Array(10),()=>{return (Math.random()*20)});
  console.log(arr.toString()); 
  let x=average(arr);
   console.log(x.toFixed(1));
  }