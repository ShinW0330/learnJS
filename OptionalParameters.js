/**
 * Optional Parameters 옵셔널 파라미터
 * 미리 파라미터 값을 할당하는 것
 */

function tellMe(name,gender){
  if(gender === '남자'){
    console.log(`안녕 ${name}군 `);
  }else{console.log(`안녕 ${name}양 `);}
  
}

tellMe('shin','남자');
tellMe('momo','여자');
tellMe(); //3. 파라마티 값을 입력하지 않았을 경우 undifiend가 뜬다.

// undifined가 나오는 경우
let x;
console.log(x); // 1. 변수를 선언해 놓고 아무런 값이 할당되지 않았을 경우.
console.log(tellMe());//2. 함수를 호출하였는데 함수안에 return문이 없을 경우.

/* 옵셔널 파라미터 -> 옵셔널 파라미터는 항상 가장 뒷쪽에 위치헤 주어야한다. 
그렇지 않은 경우에는 순서가 밀리거나 undifined가 된다. 
*/
function introduce(name, age, nationality ='japan'){
  console.log(`제 이름은 ${name} 입니다.`);
  console.log(`나이는 ${age}살 입니다.`);
  console.log(`그리고 국적은 ${nationality} 입니다.`);
}

introduce('momo', 26 ,'한국'); // 미리 할당받은 값이 있는 경우에 또 다른 파라미터 값으러 입력 받았을시
// 새로 받은 값을 출력을 해준다. 
console.log('');
introduce('momo', 26); // 파라미터 값을 생략한 경우, 이러한 경우는 미리 값을 할당되어 있으면 문제 없다.


//실습
// 여기에 orderSetMenu 함수를 작성해 주세요.
function orderSetMenu(sandwich, drink ='스프라이트'){
  console.log(`주문하신 '${sandwich}', '${drink}' 세트메뉴 나왔습니다.`);
}
// 테스트 코드
orderSetMenu('코드웨잇 클럽');
orderSetMenu('터키베이컨 아보카도', '코카콜라');
orderSetMenu('코드웨잇 멜트');
orderSetMenu('이탈리안 비엠티', '닥터페퍼');
orderSetMenu('에그마요', '환타 오렌지');