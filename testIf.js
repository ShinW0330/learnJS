/**
 * if (if statenment )
 */


let temperature = 0;

function mizu(temperature){
  if(temperature <= 0 ){
    console.log('물이 언다.')
  }else if(temperature <100){
    console.log('물이 얼지도 끓지도 않습니다. ')
  }else if(temperature >150){
    console.log('물이 수증기가 되고 있습니다.')
  }else{
    console.log('물이 끓습니다.')
  }

}

mizu(190);

/*
Peter Kim(26세, 남성)은 이제 막 한국에서 거주하기 시작한 싱가포르 사람입니다. 
한국에서는 나이와 성별 따라 호칭 다르다는 것에 Peter는 큰 어려움을 느끼고 있는데요.

한국에서는:

나이가 같은 경우: '친구'

자신보다 나이가 어릴 경우:
2 - 1. 상대방 성별이 남성인 경우: '남동생', 
2 - 2. 상대방 성별이 여성인 경우: '여동생'

자신보다 나이가 많을 경우:
3 - 1. 상대방 성별이 남성인 경우: '형',
3 - 2. 상대방 성별이 여성인 경우: '누나'

라고 말하는 게 너무 어렵다고 합니다.
이런 Peter를 위해서 미리 자신의 나이와 성별을 입력해두고, 상대방의 나이와 성별을 전달하면 호칭을 판별해주는 whatShouldICallYou함수를 만들어줍시다.

코드를 잘 작성했다면, 다음과 같은 결과가 출력되어야 합니다.

// 나의 나이와, 나의 성별을 저장하는 변수
let myAge = 26;
let myGender = 'male';

// 호칭을 담은 변수
let callOlderBrother = '형';
let callOlderSister = '누나';
let callFriend = '친구';
let callYoungerSister = '여동생';
let callYoungerBrother = '남동생';

// 상대방의 나이와 성별에 따른 호칭을 리턴하는 함수 whatShouldICall를 완성하세요.
function whatShouldICallYou(yourAge, yourGender ) {
  // 여기에 코드를 작성해 주세요.
  if(yourAge == myAge){
    console.log('친구');
  }else if(yourAge < myAge && yourGender == myGender ){
     console.log('남동생');
  }else if(yourAge < myAge && yourGender !== myGender ){
     console.log('여동생');
  }else if(yourAge > myAge && yourGender == myGender ){
    console.log('형');
  }else{
    console.log('누나');
   
  }
*/

// 나의 나이와, 나의 성별을 저장하는 변수
let myAge = 26;
let myGender = 'male';

// 호칭을 담은 변수
let callOlderBrother = '형';
let callOlderSister = '누나';
let callFriend = '친구';
let callYoungerSister = '여동생';
let callYoungerBrother = '남동생';

// 상대방의 나이와 성별에 따른 호칭을 리턴하는 함수 whatShouldICall를 완성하세요.
function whatShouldICallYou(yourAge, yourGender ) {
  // 여기에 코드를 작성해 주세요.
  if(yourAge == myAge){
    return callFriend;
  }else if(yourAge < myAge && yourGender == myGender ){
    return callYoungerBrother;
  }else if(yourAge < myAge && yourGender !== myGender ){
    return callYoungerSister;
  }else if(yourAge > myAge && yourGender == myGender ){
    return callOlderBrother
  }else{
    return callOlderSister
  }
}
// 테스트 코드
let result1 = whatShouldICallYou(25, 'female');
let result2 = whatShouldICallYou(20, 'male');
let result3 = whatShouldICallYou(26, 'female');
let result4 = whatShouldICallYou(30, 'male');
let result5 = whatShouldICallYou(31, 'female');

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
