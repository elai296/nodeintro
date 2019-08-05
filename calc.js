// console.log('Hello, world!');
// function calculation(num1, operator, num2){
//     var calculatorMap={
//         '+': (num1, num2)=>num1+num2,
//         '*': (num1, num2)=>num1*num2,
//         '/': (num1, num2)=>num1/num2,
//         '-': (num1, num2)=>num1-num2
//     }
//     calculateMap['x']=calculateMap['X']=calculateMat['*'];
//     var result=calculateMap()
// }

function calTwo(num1, operator, num2){
    num1=parseFloat(num1);
    num2=parseFloat(num2);
    var total=0
    switch(operator){
        case '+':
            total= num1+num2;
            break;
        case '-': 
        total= num1-num2;
            break;
        case '*':
            total=num1*num2;
            break
        case '/':
            total=num1/num2;
            break;
    }
    return total;
}
 var num1= process.argv[2];  //process is object, process 
 var num2= process.argv[4];
 var operator=process.argv[3];
console.log(calTwo(num1,operator,num2));
console.log(process.argv);

