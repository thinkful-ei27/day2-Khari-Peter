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

function fizzBuzz(countTo) {
  const result = [];
  for (let i = 1; i <= countTo; i++) {
    if (i % 15 === 0) {
      result.push("fizzbuzz");
    } else if (i % 3 === 0) {
      result.push("fizz");
    } else if (i % 5 === 0) {
      result.push("buzz");
    } else {
      result.push(i);
    }
  }
  return result;
}

// console.log(fizzBuzz(25));
