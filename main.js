const myString = "developer";

const myNewString = myString[0].toUpperCase() + myString.substring(1);

console.log(myNewString);

//haystack
function needle(haystack){
  const needleIndex = haystack.indexOf("needle");
  return `needle at the position ${needleIndex}`
};


function nameInitial(name){
  return name.split(' ').map(x => x[0]).join('.');
}

function distancePossible(distanceToPetrol, mpg, fuelLeft){
  let mpg = 2;
  let distanceToPetrol = 50;
  let fuelLeft;

  return distanceToPetrol <= mpg * fuelLeft ? true : false;
}

function grading(score){
 let score = 69;
  if(score < 60) return 'F';
  if(score < 70) return 'D';
  if(score < 80) return 'C';
  if(score < 90) return 'B';
  else return 'A';
}

function reverseString(str){
  // str.reverse(); does not work like that..
  return str.split('').reverse().join('');  
}


function smallestSumOfPositiveNums(nums){
let sum = sum.sort((x, y) => x - y);
  return sum[0] + sum[1]
}
