

// unsorted array
// arr = [4,3,55,5,0,1,-2];

// sort the array using nested loops
function sortArray(arr){
for (let i = 0; i < arr.length - 1; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] > arr[j]) {
      // swap elements
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    
  }
}
}
// print the sorted array
//console.log(arr); 
return arr;
}

//divisble 


function divisbles(arr){
    let sum = 0;
    for (let q = 0; q < arr.length; q++) {
     if (arr[q] % 5 === 0) {
    sum += arr[q];
  }
}
return sum;
//console.log("The sum is "+ sum);
}
function printArray(arr){
    for (var q=0 ; q<arr.length;q++ ){
        console.log(arr[q]);
    }
}

let arr = [4,3,55,5,0,1,-2];
var x = sortArray(arr);
 console.log("The sum is: " + divisbles(x));
 printArray(x);