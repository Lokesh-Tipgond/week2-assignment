//Squering +ve elements of arrays by using predefined method.
var res = [3, 4, -6, 0, -8, -1, 3, -6, 1, -8, -6, -1];
//get positive negative values
var pos = res.filter(function(v) {
    return v > 0;});
    // square the positive elements of array.
   square = pos.map(function(a){
    return   a**2;
       
   });
 
  console.log(pos);// +ve  elements of array
console.log(square);// square of +ve elements of array.
// out put ==> [9,16,0,9,1]