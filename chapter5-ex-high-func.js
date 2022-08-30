// chapter 5 - higher-order functions
//let arr = [1, 2, 3, 4];
// console.log(arr.filter(a => a>3)) // return same type
// console.log(arr.map(a=>a+3)) // return same type
// console.log(arr.reduce((a,b)=>a+b)); // sumarizing objects
// console.log(arr.findIndex((a) => a==3))

// ex 5.1 - FLATTENING
let arrays = [[1, 2, 3], [4, 5], [6]];
console.log(arrays.reduce((array1, array2) => array1.concat(array2)));
// → [1, 2, 3, 4, 5, 6]

// EX 5.2 - YOUR OWN LOOP
function loop(value, test, update, body) {
  for (let i = value; test(i); i = update(i)) {
    body(i)
  }
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1

// 5.3 Everything
//every using a loop
function every1(array, test) {
  for (let element of array) {
    if (test(element) === false) {
      return false;
    }
  }
  return true;
}
console.log(every1([2, 3, 5, 8, 13], n => n > 1)); // every item greater than 1
console.log(every1([2, 3, 5, 8, 13], n => n < 11)); // every item less than 11
// every using array.some
function every2(array, test) {
  return array.some(test);
}
console.log(every2([2, 3, 5, 8, 13], n => n > 7)); // have one or more items > 12
console.log(every2([2, 3, 5, 8, 13], n => n < 5)); // have one or more items < 5
