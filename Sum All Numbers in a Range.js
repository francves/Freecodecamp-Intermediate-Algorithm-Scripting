function sumAll(arr) {
  var numbers = [];
  var min = Math.min(arr[0],arr[1]);
  var max = Math.max(arr[0],arr[1]);
  while(min <= max){
    numbers.push(min);
    min++;
  }
 return numbers.reduce(function(a, b) {
  return a + b;
});
}

sumAll([1, 4]);
