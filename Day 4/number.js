while(true)
{
    let num=prompt("Enter the number");
    if(num>100)
    {
        console.log(`Number: ${num}`);
        break;
    }
    else 
    {
        console.log(`Number: ${num}`)
        continue;
    }
}