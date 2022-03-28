/**
 * scope 스코프sss
 * 범위 , 영역
 */

//글로벌 변수, 전역 변수라 한다. 
let x= 4; // 힘수 밖에서 변수 선언 


 function myFunction(){ // { }중괄호를 묶은 문을 블록문 Block Statement
//  let x =3; // 블록문 안에 선언된 변수들은 "지역변수","로컬 변수"
  // 로컬 변수는 블록문 내에서만 사용할 수 있는 변수이다. 
 
  //그렇다면 같은 변수를 선언시 전역 변수와 지역변수는 어떻게 사용될 것인가?
  let x =5;
  console.log(x); // run 3(함수 안에서 ) -> rur 4 (함수 밖에서 변수)
}

myFunction();
// console.log(x); //error (함수 안에서 선언)
console.log(x); // run 4 (함수 밖에서 선언)

/*
함수 내 변수와 전역 변수가 같은 경우, 함수 밖에서 함수를 호출시 
함수 내에서 먼저 로컬 변수를 사용을 하고 그후 전역 변수를 사용하기 떄문에
run
5
4
라는 결과가 나온다. 
*/

//실습 1
// 함수 정의 
function myFunction2() {
  let y = '코드잇'; // 문자열 코드잇을 변수 y에 할당하고 
  y = "을지로"; // 문자열 을지로를 y에 할당한다.
}

myFunction();
console.log(y); // 에러 발생 그이유는 블록문 안에서 변수가 선언 되어 있기 때문에 

//실습 2
/*
const a = 120;

function myfunc() {
  const a = 20;
  console.log(a);
}

myFunction();
console.log(a);

//실습 3
let x = 100;

function myFunction() {
  let y = 40;
  console.log(x + y); // -> 전역변수 x=100 과 지역변수 y=40 => 140 
}

myFunction();
console.log(x);

*/

