/**
 * 상수 Constant
 */

//상수 
//let pi = 3.14;// 원주율 -> 글로벌 변수 (전역 변수 )
let radius ; //반지름 -> 글로벌 변수 (전역 변수 )
const PI =3.14;
// let -> const (constant ) 상수인 변수를 선언 할 경우
/* 또한 상수 선언시 암묵적으로 룰이 존재한다. 
예> const myNumber => const MY_NUMBER;
변수명을 대문자롤 작성하고 처음 시작하는 단어와 또 다른 단어가 붙일 경우 _ 를 사용한다. 
*/


/* 변수가 빈 값이라는 것을 표현 하고 싶다면, 
let a = null;  --> 어떤 타입의 데이터인지 자료형이 정해있지 않은 경우
let a = 0;  --> 빈 값을 표현 하면서 정수 타입이라는 것을 명시
let a = ''; --> 빈 값을 표현 하면서 문자열 타입이라는 것을 명시

*/
//원의 넓이를 계산하는 함수 
function calculateArea(){
  return PI * radius * radius; // 글로벌 변수를 활용해서 연산
}

// 반지름에 따른 원의 넓이를 출력하는 함수
function printArea(){
  return `반지름이 ${radius}일 때, 원의 넓이는 ${calculateArea()}`;
}

radius =4;
console.log(printArea()); // 반지름이 4일 때, 원의 넓이는 50.24 

radius =7;
console.log(printArea()); //반지름이 7일 때, 원의 넓이는 153.86 

radius =8;
console.log(printArea()); //반지름이 8일 때, 원의 넓이는 200.96 