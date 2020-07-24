for(let n = 1; n < 100; n++ )
{
    if(n % 3 == 0 && n % 5 == 0)
{
    console.log(`for ${n} the output is fizzbuzz`);
}
    else if(n % 3 == 0)
{
    console.log(`for ${n} the output is fizz`);
}
    else if(n % 5 == 0)
{
    console.log(`for ${n} the output is buzz`);
}
}