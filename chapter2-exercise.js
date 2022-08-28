// ex1 - p37 - Eloquent Javascript
function hashPrint(n) {
  let kq = '';
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      // document.write('# ');
      kq += '# ';
    }
    kq += '\n';
  }
  console.log(kq);
}
//hashPrint(8);

// ex2 - p38 - Eloquent Javascript
function fizzBuzzPrint(n) {
  let result = '';
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) result += 'FizzBuzz ';
    else if (i % 3 == 0) result += 'Fizz ';
    else if (i % 5 == 0) result += 'Buzz ';
    else result += i;
    result += ' ';
  }
  console.log(result);
}
//fizzBuzzPrint(100);

// ex3 - p38 - eloquent javascript
const printChessBoard = (boardSize) => {
  let result = '';
  for (let i = 0; i < boardSize; i++) {
    for (let j = 0; j < boardSize; j++) {
      if ((i + j) % 2 == 0) result += ' ';
      else result += '#';
    }
    result += '\n';
  }
  console.log(result);
};
//printChessBoard(8);
