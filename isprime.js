function check_prime() {
    if  (num===2||num===3){
        console.log(`number is prime number:${num}`);
    } 
    else if ((num%2)===0||(num%3)===0) {
        console.log(`number is not a prime number:${num}`);
    }   
    else{
        console.log(`number is prime number:${num}`);
    }  
 }
    
num=21;
check_prime();






