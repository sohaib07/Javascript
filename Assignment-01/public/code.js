function table(num) {
    var num=Number(prompt("Enter any number:"));
    for(var i=1;i<=20;i++){
        document.write(num+" x "+i+ " = "+num*i+"<br>");
    }
}
function fibonacci(number) {
    var number=Number(prompt("Enter the number of terms:"));
    var first=1,second=0,sum=0;
    for(var i=1;i<=number;i++){
        sum=first+second;
        document.write(sum+"<br>");
        first=second;
        second=sum;
        }
       } 
       function diamond() {
          var size=21;
          var odd=1;
          var noOfSpaces=size/2;
          var spa=parseInt(noOfSpaces+1);
          document.write("<pre>");
           for(var i =1;i<=size;i++){
               for(var j=noOfSpaces;j>=1;j--){
                   document.write(" ");
               }
               for(var j=1;j<=odd;j++){
               document.write("*");
               }
               document.write("<br>");
               if(i<spa){
               odd=odd+2;
               noOfSpaces=noOfSpaces-1;  
            }
               else{
               odd=odd-2;  
               noOfSpaces=noOfSpaces+1;
            }
           }
       }