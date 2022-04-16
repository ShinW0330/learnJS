//노드 삭제와 이동
const today = document.querySelector('#today');
const tomorrow = document.querySelector('#tomorrow');

// 노드 이동하기 : prepend, append, before, after
// today.append(tomorrow.children[1]);

/*

// 노드 삭제하기 : Node.remove();
tomorrow.remove();
// run HTML ol id = tomorrow  ol 태그 자체가 사라진다. 

// 오늘 할일의 세번째 자식 요소를 삭제하기. 
// today.removeChild[]; 이게 아니라

today.children[2].remove();
// ol 태그 id ='today'; 선택 후 ol 태그 안 자식요소를 선택하고
// 선택한 자식 요소를 삭제 시키는 remove( ); 를 사용한다. 

노드를 이동하는 방법은 여러가지 방법이 있지만 
가장 간단한 방법은 4가지 메서드를 이용하는 것이다. 
 노드 이동하기 : prepend, append, before, after
*/

// 노드 이동하기 : prepend, append, before, after

// 내일 할일 2번째 뮤지컬 공연 예매를 
// 오늘 할일에 마지막에 넣기 

// today.append(tomorrow.children[1]);


//console.log(today.children[3].append()); 이런 문법 없음

// 오늘 할일의 고양이 화장실 청소를 내일 할일 뮤지컬 공연예매 다음에 
// 이동시켜 보자.


  tomorrow.children[1].after(today.children[1]);