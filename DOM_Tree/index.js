
/*
// DOM 트리 여행하기
// html ul 태그 아이디를 가지고 왔다. 
const myTag = document.querySelector('#list-1');

console.log(myTag);

const myTag2 = document.querySelector('#title-1');
console.log(myTag2);

// 자식 요소 노드
console.log(myTag.children); // HTMLCollection 유사배열 
// 인덱싱 번호가 있고 리스트 속성이 출력된다. 
// 또한 프로퍼티 도 있다. 
// children 프로퍼티는 해당 요소의 자식 요소를 담고 있다. 
console.log(myTag.children[1]);
console.log(myTag.firstElementChild);
console.log(myTag.lastElementChild);

// 부모 요소 노드
console.log(myTag.parentElement);

// 형제 요소 노드
console.log(myTag.previousElementSibling);
console.log(myTag.nextElementSibling);
*/

// 접근하려는 태그 선택 
const myTag = document.querySelector('#list-1');
console.log(myTag); // id에 해당 되는 속성이 출력이된다. 

// #list-1 Id를 가지고 있는 ul태그  자식 요소 노드는 li 태그 
console.log(myTag.children); // HTMLCollection(8) [li, li, li, li, li, li, li, li]
console.log(myTag.children[0]);  // list 중 index 0번
console.log(myTag.children[1]); 
console.log(myTag.firstElementChild); // ul태그 의 자식 요소 태그중 가장 첫번째
console.log(myTag.lastElementChild); 

// 형제 요소 노드
console.log(myTag.previousElementSibling); // 기준 태그에서 앞에 있는 
console.log(myTag.nextElementSibling); // 기준 태그에서 다음에 


// 기준인 ul 태그의 부모 태그 선택
console.log(myTag.parentElement); 
// DOM 부모 , 자식, 형제 요소 노드 
console.log(myTag.parentElement); 


