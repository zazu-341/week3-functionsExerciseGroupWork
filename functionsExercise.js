//Challenge A
function getTotal (numbers){
    let total = 0;

    for(let i=0; i < numbers.length; i++){
        total += numbers[i];
    }
    return total;
}

console.log(getTotal([10,20,30]))

//Challenge B
function countEven(numbers){
    let count = 0;

    for (let i = 0; i < numbers.length; i++){
        if (numbers[i] % 2 === 0){
            count++;
        }
    }
    return count;
}

console.log(countEven([2,5,8,9,10]));

//Challenge C
function add(a, b){
    return a+b;
}
function applyOperation(num1, num2, callback){
    return callback(num1, num2);
}

console.log(applyOperation(4, 6, add));


//Round 4 Debugging
let numbers = [1, 2, 3];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

function square(number) {
  return (number * number);
}

let result = square(5);
console.log(result);


function runTask(callback) {
  return callback();
}

function sayHello() {
  return "Hello!";
}

console.log(runTask(sayHello));


//ROUND 5 
let marks = [67, 42, 85, 34, 56, 90, 48];

let total = 0;
for(let i = 0; i < marks.length; i++){
    total += marks[i];
}

console.log("total marks: ", total)


let average = total / marks.length;
console.log("Average mark:", average);


let countPassed = [67, 42, 85, 34, 56, 90, 48];

let passed = 0
for (let i = 0; i < countPassed.length; i++){
    if (countPassed[i] >= 50){
        passed++
    }
}

console.log("Students who passed:", passed);

function processMarks(passesMarks, callback){
    return callback(passesMarks);
}

console.log(processMarks(passesMarks));