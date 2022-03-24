/**
 * switch 문 (switch statenment)
 * 어떤 대상과 조건값이 일치하는지를 확인하고 
 * 그 결과에 따라 다른 동작이 필요할 떄는  switch 문을 활용할 수 있다는 점
 * 
 * code.it 참조 
 * 당신은 등산을 하던 중 갑작스레 산불이 발생해 대피 중입니다.
 * 그러던 중 산중턱에서 다친 동물 4마리를 만났습니다.
 * 이미 체력이 많이 떨어진 당신,
 * 이 동물 중 단 한마리만 구출할 수 있습니다.
 * 과연 당신의 선택은?
 * 1. 토끼 2. 고양이 3. 코알라 4. 강아지 
 * 
 * switch (switch statement)
 * 
 * switch (비교할 값){
  case 조건값_1:
    동작부분;
    break;
  case 조건값_2:
    동작부분;
    break;
  default;
    동작부분;
}
 */

let myChoice =2;

switch(myChoice){
  case 1:
    console.log('토끼를 선택한 당신, ......');
    break;
  case 2:
    console.log('고양이를 선택한 당신, ......');
    break;
  case 3:
    console.log('코알라를 선택한 당신, ......');
    break;
  case 4:
    console.log('강아지를 선택한 당신, ......');
    break;
  default:
    console.log('1에서 4사이의 숫자를 선택해 주세요.');
}

let myChoice2 =1;
// break; 가 없다면 해당하는 값을 호출하는 동시에 중단되는 것이 아니라
// 나머지도 전부 같이 실행이 된다. 

switch(myChoice2){
  case 1:
    console.log('토끼를 선택한 당신, ......');
    //break;
  case 2:
    console.log('고양이를 선택한 당신, ......');
    //break;
  case 3:
    console.log('코알라를 선택한 당신, ......');
    //break;
  case 4:
    console.log('강아지를 선택한 당신, ......');
    //break;
  default:
    console.log('1에서 4사이의 숫자를 선택해 주세요.');
}

//if 문으로 작성

if (myChoice === 1) {
  console.log('토끼를 선택한 당신, ...');
} else if (myChoice === 2) {
  console.log('고양이를 선택한 당신, ...');
} else if (myChoice === 3) {
  console.log('코알라를 선택한 당신, ...');
} else if (myChoice === 4) {
  console.log('강아지를 선택한 당신, ...');
} else {
  console.log('1에서 4사이의 숫자를 선택해 주세요.');
}