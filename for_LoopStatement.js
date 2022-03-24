/**
 * 반복문 (LOOP STATEMENT)
 * for(초기화부분; 조건부부; 추가동작부분){
  동작부분
}
초기화 부분은 for문이 실행 되면 가장 먼저 딱 한번 실행되는 부분이다. 
조건부분은 이부분에 작성된 코드는 boolean 형태로 평가한 다음 true인지false 인지 확인후 
true 로 판단이 되면 동작부분이 실행이 된다. 
추가 동작 부분은 동작 부분이 실행이 되고 추가적으로 동작하는 부분이다. 
 */


//1 . 단순히 욱 X 10 개 출력 해보기 
console.log('욱 X 10 개');
console.log('욱 X 10 개');
console.log('욱 X 10 개');
console.log('욱 X 10 개');
console.log('욱 X 10 개');
console.log('욱 X 10 개');
console.log('욱 X 10 개');
console.log('욱 X 10 개');
console.log('욱 X 10 개');
console.log('욱 X 10 개');
// 단순하게 10개 작성 하면 되지가 아니라 단순한 입력에도 사람은 실수 하기 나름이다. 
// 그렇기 때문에 다수의 반복 작업을 할시에는 for문을 활용하자. 

// 2. for문 사용해서 출력
for (let i = 0; i < 11; i++) {
  console.log(`${i} 욱 X 10 개`);
  
}

// 3.동작부분 아래에 추가 동작 부분 
for (let i = 1; i <= 10;) {
  console.log(`${i} 욱이!`);
  i++; // 추가동작 부분을 동작부분 아래에 넣어도 위와 같은 결과가 나옴 
}
/*
반복의 횟수를 저장하는 역할이 바로 i 변수 인 것이다. 
그렇기 떄문에 for문에서 초기화 부분은 반복 횟수를 저장할 변수를 생성하는데 활용이 된다.
변수와 문자열을 연결하는 것이기 때문에 템플릿 문자열로 만드면 된다. 

또한 
for문의 특성상, 이 추가동작부분이 있기 때문에 
여기 동작부분에서는 실제로 반복하고자하는 내용들만 집중하고
어떤 조건과 관련된 부분은 이 소괄호에 집중하면서 좀 더 목적에 맞는 코드를 작성할 수 있게 되는 것이죠.
*/

// 4. 초기화부분에서 생성한 변수는 for문의 로컬 변수다. 
for (let i = 1; i <= 10; i++) { // 초기화 부분에 생성한 변수는 for문 안에서의 로컬변수이다. 
  console.log(`${i} 코드잇 최고!`);
}

//변수 i는 for문의 로컬 변수이기 떄문에 외부에서 불러 올수 없다. 
console.log(i); // Error !!


// 여기에 코드를 작성해 주세요.
// 1~100 짝수 번호만 

// 1. 
for(let i = 1; i<= 100 ; i++){
  if(i%2 == 0){
    console.log(i);
  }
}

// 2.
for(let i = 1; i<= 50 ; i++){
    console.log(i*2);
}

// 3. 
for(let i = 2; i<= 100 ; i += 2){
  console.log(i);
  
}


// 별 찍어 보기 
function printTriangle(height) {
	// 여기에 코드를 작성해 주세요.
	let heightMsg ='';
	for(i=0; i <height; i++){
	  heightMsg = heightMsg +'*';
	  console.log(heightMsg);
	}
}

// 테스트 코드
console.log('높이: 1');
printTriangle(1);

console.log('높이: 3');
printTriangle(3);

console.log('높이: 5');
printTriangle(5);