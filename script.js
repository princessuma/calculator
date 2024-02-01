// function to display the calculations
function calculator(){
    let n1=10;
    let n2=15;
    switch(operator){
        case "+":
        result=n1+n2;
        break;

        case "-":
        result=`${n1-n2}`;
        break;
        
        case "*":
            result=`${n1*n2}`;
            break;
        case "/":
           result=`${n1/n2}`;
            break;
        case "%":
            result=`${n1%n2}`;
            break;
                    
        case "**":
          result=`${n1**n2}`;
            break;
        default:
         alert("select an operator");
         break;
    }
    console.log(result);
    document.getElementById('res').value=result;

}