let num1=Number(prompt("Enter number"));
let num2=Number(prompt("Enter Number"));
let operation=Number(prompt("Choose Opration"+"\n"+ "1.Addition"+"\n"+"2.Subraction"+"\n"+"3.Multiplication"+"\n"+"4.Division"+"\n"+"5.Square root"+"\n"+"6.Percentage"));
 switch(operation)
{
     case 1:
         console.log(`Addition of number ${num1} and ${num2} is ${num1+num2}`);
         break;

    case 2:
        console.log(`Subraction of number ${num1} and ${num2} is ${num1-num2}`);
        break;

    case 3:
        console.log(`Multiplication of number ${num1} and ${num2} is ${num1*num2}`);
        break;
    
    case 4:
        console.log(`Divition of number ${num1} and ${num2} is ${num1/num2}`);
        break;

    case 5:
        console.log(`Square root of number ${num1} is ${num1*num1}`);
        console.log(`Square root of number ${num2} is ${num2*num2}`);
        break;

    case 6:
        console.log(`Percentage of number ${num1} is ${num1/100}`);
        console.log(`Percentage of number ${num2} is ${num2/100}`);
        break;

    default:
           console.log('Invalid operation'); 
}