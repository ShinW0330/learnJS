/**
 * 유사배열 (Array-Like Object)
 * getElementsByClassName() 은 HTMLCollection 이라는 유사배열객체를 반환.
 * 여러 개의 값을 담고 있는 배열과 형태는 유사하지만
 * 배열의 메소드는 사용할 수 없는 것들을 가리켜서 유사 배열이라고 한다,. 
 * 
 */

const myTag1 = document.getElementsByClassName('color-btn');
console.log(myTag1); // HTMLCollection(8) 은 color-btn 태그의 속성들을 표시 
// 배열의 메서드를 사용 할수 없지만 
console.log(myTag1[1]); // [] 를 하여 인덱스로 접근 하거나 
// run button.color-btn.orange
console.log(myTag1.length); // length 프로퍼티를 활용
// run 8

// 컬러에 대한 리스트가 나옴 
for (let tag of myTag1){
  console.log(tag);
}
/* run 
button.color-btn.red
button.color-btn.orange
button.color-btn.yellow
button.color-btn.green
button.color-btn.blue
button.color-btn.indigo
button.color-btn.purple
button.color-btn.black
*/

/*
for ..of
for...of 명령문은 반복가능한 객체 
(Array, Map, Set, String, TypedArray, arguments 객체 등을 포함)에 대해서 
반복하고 각 개별 속성값에 대해 실행되는 문이 있는 
사용자 정의 반복 후크를 호출하는 루프를 생성합니다.


 */

const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element);
}

// expected output: "a"
// expected output: "b"
// expected output: "c"
