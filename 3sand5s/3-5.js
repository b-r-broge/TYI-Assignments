
function sumArry(arr) {
  var out = 0;
  for (i = 0; i < arr.length; i++ ) {
    out += arr[i]
  }
  return out;
}

function otherSum() {
  var arr = []
  for (var i = 3; i < 1000; i += 3) {
    arr.push(i);
  }
  for (var i = 5; i < 1000; i += 5) {
    arr.push(i);
  }
  return sumArry(arr);
}

function multipleSum(x, max) {
  var out = 0;
  for (var i = x; i < max ; i += x) {
    out += i;
  }
  return out;
}

var threes = multipleSum(3, 1000);
var fives = multipleSum(5, 1000);

console.log(otherSum());
console.log(threes+fives);
