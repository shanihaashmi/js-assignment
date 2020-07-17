//conditional

marks=parseInt(prompt("Enter marks"));
console.log(marks);
if(marks >= 80 && marks <=100)
{
    console.log(`Marks are ${marks} and grade is A`);
} 
else if(marks >=60  && marks <=79)
{
    console.log(`Marks are ${marks} and grade is B`);
} 
else if(marks >=51  && marks <=59)
{
    console.log(`Marks are ${marks} and grade is C`);
} 
else if(marks == 50)
{
    console.log(`Marks are ${marks} and grade is D`);
} 
else 
{
    console.log(`Marks are ${marks} and you are fail`);
}


//switch

switch(true)
{
    case(marks >= 80 && marks <=100 ):
        console.log(`Marks are ${marks} and grade is A`);
        break;

    case(marks >=60  && marks <=79):
        console.log(`Marks are ${marks} and grade is B`);
        break;

    case(marks >=51  && marks <=59):
        console.log(`Marks are ${marks} and grade is C`);
        break;
    
    case(marks == 50):
        console.log(`Marks are ${marks} and grade is D`);
        break;

    default:
        console.log(`marks are ${marks} you are Fail`);
}
