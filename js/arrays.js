function task1()
{
    let arr = Array.from(Array(10),()=>{return Math.round(Math.random()*20)});
console.log(arr.toString());
    
arr=[4,16,36,25];
let sum=arr.filter(index=>index%2==0).reduce((sum,elem)=>sum+Math.sqrt(elem),0);
alert(sum);
}