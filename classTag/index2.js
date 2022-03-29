// css 선택자로 태그 선택
const myTa = document.querySelector('#myNumber');
console.log(myTa);
//Html id 태그를 선택 
const myTag = document.getElementById('myNumber');
console.log(myTag);
/**
 * 상단의 두 가지 방법을 태그를 선택하면 결과는 같게 나온다. 
 */

const myTags = document.querySelector('.color-btn');
console.log(myTags);
/*
class를 선택을 하면 유사배열 처럼 배열 처럼 나올 것 같았지만 
가장 앞에 있는 color-btn 값만 출력이 된다.  
유사 배열 처럼 받아 오고 싶다면 querySelectorAll를 사용 해야한다. 
run
<button class="color-btn red" data-color="#FF0000"></button>

*/
const myTagsAll = document.querySelectorAll('.color-btn');
console.log(myTagsAll);
/*
run
NodeList라는 유사배열이 나온다. 
이러한 코드는 getElementsByClassName("color-btn")과 비슷한 결과가 나온다.
NodeList(8) 
[button.color-btn.red, button.color-btn.orange, 
  button.color-btn.yellow, button.color-btn.green, 
  button.color-btn.blue, button.color-btn.indigo, 
  button.color-btn.purple, button.color-btn.black]

*/

/*
getElementsByClassName도 유사배열이지만 querySelectorAll과 다른점은
querySelectorAll은 NodeList 유사배열이고

getElementsByClassName은 HTMLCollenction 유사배열이다.
하지만 요소들은 같다. 

여러 개의 요소를 선택할 때는 querySelectorAll을 사용합니다.
여러 개의 요소가 선택되기 때문에 NodeList라는 이름의 유사 배열에 
각 요소가 담기게 되는데,
querySelectorAll 를 사용할 때 주의해야 할 부분은 
만약 존재하지 않는 요소를 선택할 경우, undefined나 null 값이 리턴되는 것이 아니라
그냥 비어있는 NodeList가 리턴된다는 점을 잘 기억. 


또한 querySelector ,getElementById 와 동일하게 메소드를 활용해 존재하지 않는 요소를
선택할 경우에는 null 값을 리턴한다. 


run
HTMLCollection(8) [button.color-btn.red, button.color-btn.orange, 
  button.color-btn.yellow, button.color-btn.green, 
  button.color-btn.blue, button.color-btn.indigo,
  button.color-btn.purple, button.color-btn.black]
*/
const myTagGet = document.getElementsByClassName('color-btn');
console.log(myTagGet);