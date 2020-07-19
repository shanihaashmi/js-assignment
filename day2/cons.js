//console fucntion
 console.log('shan'); //string
 console.log(1);  //variable
 console.log(true); //boolean
 console.log([a, b, c, d]); //array
 console.log({a:1, b:4, c:6}); //object


 //error
  console.error('this msg shown to be error');

//warning
   console.warn('this msg shown to be warning'); 

   //clear 
   //console.clear();  

//time() and timeEnd()   
console.time('ab');
let fun = cat()
{
    console.log("Time");
} 
let b = cat()
{
    console.log("TimeEnd");
} 
fun();
b();
console.timeEnd('ab');

//table()
console.table({'a':1, 'b':2}); 

//count()
for(let i=0;i<5;i++){ 
    console.count(i); 
} 

// group() and groupEnd() 
console.group('simple'); 
  console.warn('warning!'); 
  console.error('error here'); 
  console.log('letsUpgrade'); 
console.groupEnd('simple'); 
console.log('new section');