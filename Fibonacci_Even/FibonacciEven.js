
function fib(upLimit) {
  // Bulid fibonacci sequence and return all
  // values in an array below the upLimit

  var fibArr = [1, 2];
  var i = 0
  while ((fibArr[fibArr.length -1] < upLimit) && (i < 100)) {
    let next = (fibArr[fibArr.length-2]+fibArr[fibArr.length-1]);
    fibArr.push(next);
    i += 1;
  }
  fibArr.pop();
  return fibArr;
}

var fibNums = fib(4000000);
var evenfib = fibNums.filter(function(num) {
  if (num % 2 === 0) {
    return num
  }
})
// console.log(evenfib);

var ans = 0;
for (var i = 0; i < evenfib.length ; i++ ) {
  ans += evenfib[i];
}

console.log(ans);
