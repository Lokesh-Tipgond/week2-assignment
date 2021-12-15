//Find largest number from the array
// Without using predefined method
function largest(arr, n) {
    arr.sort();
    return arr[n - 1];
}
let arr = [10, 324, 45, 90, 9808];
let n = arr.length;
console.log(largest(arr, n));

//out put ==> 9808






// By using predefined method

arr = [30, 50, 70, 20, 50, 100, 68];
const Max = Math.max(...arr);
const Index = arr.indexOf(Max);
console.log("The maximum element of the array is " + Max);
console.log("the index of largest element is " + Index);

//out put ==> The maximum element of the array is 100.
// the index of largest element is 5.