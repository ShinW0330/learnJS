//return에 기능 
function Square(x){
  console.log('return 전'); // 함수 호출시 console.log로 리턴 전이라는 문자열을 출력
  return x * x;
  console.log('return 후') // 투명하게 변함 Dead Code 절대 실행 되지 않는 코드이미로 이러한 코드는 작성X

}


let strStar = '함수 호출 전' ;
let strEnd = '함수 호출 후';

console.log(strStar); // 함수 호출 전 문자열이 출력이 되고 
console.log(Square(3)); // 함수에서 파라미터 3을 입력을 해주어 리턴에서 연산한 값을 받아 출력해준다.
console.log(strEnd);


// return 과 console.log의 차이점
function printSquare(x){
  console.log(x * x); //파라미터 x를 연산하여 console.log로 출력하는 함수이고 
}
function getSquare(x){
  return x * x; // 파라미터 x를 제곱하여 return 시켜주는 함수
}

printSquare(3); // 함수 호출해서 9로 출력 
getSquare(4); // 출력은 되지 않는다. return 값으로 저장 되어 있을뿐 
console.log(getSquare(4)); // return 를 받아왔고 console.log로 출력을 했기 떄문에 16이나온다.
console.log(printSquare(3)); // 이 경우에는 함수에 return이 없기 때문에 아무런 값을 받아 오지 못한다
// 그렇기 떄문에 undefined를 받아와서 그대로 출력한다.