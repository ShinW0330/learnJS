/**
 * 피보나치 수열(Fibonacci Sequence)
 * 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...
 */

let current = 1; //현재항
let previous = 0;  // 직전 항 
for (let i = 1; i <= 50; i++) {

  console.log(current);
  let temp = previous; //previous를 임시 보관소 temp에 저장
  previous = current;
  current = current + temp; // temp에는 기존 previous 값이 저장돼 있음
}

/*
반복문 틀 작성
10개의 항을 출력하기 위해서는 반복문을 열 번 돌아야겠죠? 열 번 도는 반복문부터 작성해 봅시다.
필요한 변수 정의
피보나치 수열의 항은 앞선 두 항의 합으로 계산되는데요. 
따라서 피보나치 수열의 항들을 순서대로 출력하기 위해서는 늘 마지막 두 항을 변수에 보관해야 합니다.
'현재 항'은 변수 current에, 그리고 '직전 항'은 변수 previous에 저장을 하겠습니다. 
처음에는 current를 1로 설정하고 previous를 0으로 설정하면 되겠죠?

수행 부분 채워 넣기
수행 부분에서 해야 할 일은 크게 두 가지입니다.

current를 출력
previous와 current를 적절히 수정
1번은 그냥 console.log(current)를 하면 되니까 먼저 채워 넣겠습니다.

2번이 약간 헷갈리는 부분인데요. 수행 부분에서 previous와 current를 어떻게 수정할 수 있을까요? 일단 단순하게 생각하면 이렇습니다.

previous ← current
current ← current + previous
그리고 위 로직을 코드로 나타내면 아래와 같습니다.

그런데 사실 위 코드처럼 하면 문제가 생깁니다. 잘 생각해 보세요. previous = current를 하면, previous와 current가 같은 값을 저장하게 됩니다. 그리고 기존의 previous 값은 잃어버리게 되죠.

예를 들어서 previous가 정수 2고 current가 정수 3이라고 생각해 보세요. previous = current를 하면 어떻게 되나요? previous는 정수 3으로 바뀌고, current도 정수 3이죠? 기존 previous에 있던 정수 2는 완전히 잃어버리게 됩니다.

이 문제를 해결하기 위해서, 임시 보관소 역할을 할 변수를 만들어야 합니다.
*/