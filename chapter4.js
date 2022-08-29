// exercises - chapter 4 - Objects and Array
function range(start, end, step) {
  let arr = [];
  if (step === undefined || step == 0)
    for (let i = start; i <= end; i++) {
      arr.push(i);
    }
  else if (step > 0)
    for (let i = start; i <= end; i += step) {
      arr.push(i);
    }
  else if (start > end)
    for (let i = start; i >= end; i += step) {
      arr.push(i);
    }
  else return null;
  return arr;
}
//let arra = range(1, 10);
const sum = (arrOfNumber) => {
  let result = 0;
  if (arrOfNumber !== null) for (let num of arrOfNumber) result += num;
  return result;
};
//console.log(range(5, 2, -2));
console.log(sum(range(2, 5, -2)));
