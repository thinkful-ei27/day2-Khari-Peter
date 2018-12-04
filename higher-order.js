function repeat (fn, n) {
  for (let i = 0; i < n; i++) {
    fn();
  }
}

function hello () {
  console.log('Hello World');
}

function goodbye () {
  console.log('Goodbye World');
}

repeat(hello, 5);
repeat(goodbye, 5);



function filter(arr, fn) {
  // TASK: Define your function here
  let newArray = [];
  for(let i=0; i<arr.length; i++){
    if(fn(arr[i], i, arr)){
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
  // This is known as a "predicate function" - it's a function that 
  // only returns a boolean
  return name[0] === 'R';
});

console.log(filteredNames) // => ['Rich', 'Ray']
console.log(filter(myNames, name => name[0]==='R'));

function hazardWarningCreator(typeOFWarning) {
  let warningCounter = 0;
  return function (location) {
    warningCounter++;
    console.log(`"Danger! there is a ${typeOFWarning} hazard at ${location}"`);
    console.log(`"The ${typeOFWarning} hazard has been triggered ${warningCounter} ${warningCounter > 1 || warningCounter === 0 ? 'times' : 'time'} today!"`);
  }
}

// Rocks Warning
const rocksWarning = hazardWarningCreator('Rocks on the Road');
rocksWarning('Main St and Pacific Ave');
rocksWarning('Main St and Pacific Ave');
rocksWarning('Main St and Pacific Ave');

// Flood Warning
const floodWarning = hazardWarningCreator('Flooding in the area');
floodWarning('Commercial Street and Union Ave');
floodWarning('Commercial Street and Union Ave');
floodWarning('Commercial Street and Union Ave');
floodWarning('Commercial Street and Union Ave');

const windWarning = hazardWarningCreator('High Winds and Gusts');
windWarning('Olympia place and Elwood Road');
windWarning('Olympia place and Elwood Road');
windWarning('Olympia place and Elwood Road');
windWarning('Olympia place and Elwood Road');
windWarning('Olympia place and Elwood Road');
windWarning('Olympia place and Elwood Road');

function turleVector(arr){
  let newArray = arr.filter(vec => vec[0]>=0 && vec[1]>=0);
  console.log(newArray);
  let movement = newArray.map(vec => vec[0]+vec[1]);
  console.log(movement); 
  let total = 0;
  movement.forEach(num => total+=num);
  console.log(total);
  return total;
}

function decoder(sentence) {
  const words = sentence.split(" ");
  const finalResult = words.reduce((result, currentVal, i) => {
    console.log(result);
    if (currentVal.length === 3) {
      result += " ";
    } else {
      const capitalLastChar = currentVal.charAt(words[i].length - 1).toUpperCase();
      result += capitalLastChar;
    }
    return result;
  }, "");
  return finalResult;
}

console.log(decoder('noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest'));