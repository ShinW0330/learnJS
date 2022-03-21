/**
 * 
 * expressMultiplication라는 함수를 호출하고 있는데, 두 개의 숫자 값을 파라미터로 전달.
 * 두 개의 숫자 값을 입력받을 파라미터(a, b)를 가지는 함수는 다음과 같이 선언.
 * 
 * function expressMultiplication(x, y) {
  console.log(x + ' * ' + y + ' = ' + x * y);
} 보통 이렇게 사용하지만 템플릿 문자여을 사용해 보자 
 */

// 여기에 expressMultiplication 함수를 작성해 주세요.
function expressMultiplication(a, b){
  //console.log(`${a} * ${b} =` + a*b);
  console.log(`${a} * ${b} = ${a * b}`);
}

// 테스트 코드
expressMultiplication(3, 4);
expressMultiplication(3, 2);
expressMultiplication(7, 5);
expressMultiplication(8, 9);
expressMultiplication(5, 5);
expressMultiplication(9, 9);


/* run
3 * 4 = 12
3 * 2 = 6
7 * 5 = 35
8 * 9 = 72
5 * 5 = 25
9 * 9 = 81
*/