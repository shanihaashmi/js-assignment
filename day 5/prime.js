let number=Number(prompt("Enter the number"));
console.log(`for ${number}`); 
for(i = 2; i <= number; i++)
 {
     flag=0;
    for(let j = 2; j < i; j++)
    {
        if(i % j == 0)
        {
            flag = 1;
            break;
        }
    }
 if( i > 1 && flag == 0)
 {
     
     console.log(`resulst is ${i}`);
 }
}