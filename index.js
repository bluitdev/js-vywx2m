function isEven(n) {
  if(n<0) return undefined;
  else if (n == 0) return true;
  else if (n == 1) return false;
  else return isEven(n - 2);
}
//console.log(isEven(101))

const countChar = (strToFind, charToCount='V') => {
  let numOfChar=0;
  for(let i=0; i<strToFind.length-1; i++) {
    if(strToFind[i]==charToCount)
      numOfChar++;
  }
  return numOfChar;
};
//console.log(countChar('Hello, My name is Viem', 'e'));