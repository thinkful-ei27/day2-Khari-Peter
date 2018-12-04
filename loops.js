console.log('hello world');


function max(numbers) {
    // your code here
    let result = numbers[0];
    let i = 0; 
    while (i<numbers.length){ 
        if(numbers[i]>result){
            result = numbers[i];
        }
        i++;
    }
    return result;
}

function min(numbers) {
    // your code here
    let result = numbers[0];
    let i = 0; 
    while (i<numbers.length){ 
        if(numbers[i]<result){
            result = numbers[i];
        }
        i++;
    }
    return result;
}


function average(numbers) {
    let total = 0;
    numbers.forEach(num => {
        total += num;
    });
    return total / numbers.length;
}

