let sales = Number(prompt("Enter the total number of sales during this year "));

if(sales < 5000)
{
    let totalcommission= sales * 0.02;
    console.log(`total commission earned by him is ${totalcommission}`);
}
else if(sales >= 5001 && sales <= 10000)
{
    let totalcommission = (5000 * 0.02) + ((sales-5000) * 0.05);
    console.log(`total commission earned by him is ${totalcommission}`);
}
else if(sales >= 10001 && sales <= 20000)
{
    let totalcommission = (5000 * 0.02) + (5000 * 0.05) + ((sales-10000) * 0.07);
    console.log(`total commission earned by him is ${totalcommission}`);
}
else if(sales >= 20000)
{
    let totalcommission = (5000 * 0.02) + (5000 * 0.05) + (10000 * 0.07) + ((sales-20000) * 0.1);
    console.log(`total commission earned by him is ${totalcommission}`);
}