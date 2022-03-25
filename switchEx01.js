/**
 * switch 연습
 *
 */

// 각 등급별 가격
let VIPPrice = 15;
let RPrice = 13;
let SPrice = 10;
let APrice = 8;

// 각 등급에 맞는 가격을 출력하는 함수 checkPrice를 완성하세요.
function checkPrice(grade) {
	// 여기에 코드를 작성해 주세요.
	switch(grade){
	  case 'R':
	    console.log(`${grade}석은 ${RPrice}만원 입니다.`);
	    break;
	  case 'VIP':
	    console.log(`${grade}석은 ${VIPPrice}만원 입니다.`);
	    break;
	  case 'S':
	    console.log(`${grade}석은 ${SPrice}만원 입니다.`);
	    break;
	  case 'A':
	    console.log(`${grade}석은 ${APrice}만원 입니다.`);
	   break;
	  default:
	    console.log('VIP, R, S, A 중에서 하나를 선택해 주세요.')
	}
}

// 테스트 코드
checkPrice('R');
checkPrice('VIP');
checkPrice('S');
checkPrice('A');
checkPrice('B');

/*
Run
R석은 13만원 입니다.
VIP석은 15만원 입니다.
S석은 10만원 입니다.
A석은 8만원 입니다.
VIP, R, S, A 중에서 하나를 선택해 주세요.
*/

// 커피 메뉴 및 커피 사이즈 에 따른 가격
let ameM = 2500
let ameL = 3000
let teaM = 3500
let teaL = 4500

function cafeMenuPrice(size, menu, orderNum){
  switch(size, menu, orderNum){
    case 'M', 'ame', 2:
      console.log(`${size}사이즈 ${menu}, ${orderNum}잔해서 총 ${ameM*2}원입니다.`)
  }
}
cafeMenuPrice('M','ame',2);

/* 간단히 switch를 활용해서 작성해 보았지만
일단 메뉴, 수량, 사이즈와 각 메뉴의 조합 등 고려하지 않은 부분이 많다. 
이러한 부분은 데이터베이스와 파라미터 값을 제대로 입력해 주어야 아무래도 사용이 가능 할듯 

*/