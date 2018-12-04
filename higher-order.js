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
    console.log(`"The ${typeOFWarning} hazard has been triggered ${warningCounter} time(s) today!"`);
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
