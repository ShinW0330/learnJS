const today = document.querySelector('#today');

today.innerHTML = '<li>처음</li>' + today.innerHTML;
today.innerHTML = today.innerHTML + '<li>마지막</li>';

//console.log(today.outerHTML);
today.outerHTML = '<p>이전</p>' + today.outerHTML; 


const newToday = document.querySelector('#today');
newToday.outerHTML = newToday.outerHTML + '<p>다음</p>';

// 요소 노드 추가하기
const tomorrow = document.querySelector('#tomorrow');

// 1. 요소 노드 만들기: document.createElement('태그이름')
//내일 할일 첫번째 변수로 들어 갈것임
const first = document.createElement('li');

// 2. 요소 노드 꾸미기: textContent, innerHTML, ...
first.textContent = '처음';

// 3. 요소 노드 추가하기: NODE.prepend, append, after, before
//prepend 메서드를 이용하면 호출한 노드의 제일 첫번째
// 노드로 파라미터로 전달한 값을 추가한다. 
tomorrow.prepend(first);

const last = document.createElement('li');
last.textContent = '마지막';
tomorrow.append(last);
//append 메서드는 파라미터로 전달한 값을 메소드를 호출한 노드의 
// 제일 마지막 자식노드로 

const prev = document.createElement('p');
prev.textContent = '이전';
tomorrow.before(prev);

const next = document.createElement('p');
next.textContent = '다음';
tomorrow.after(next);
// before , after메소드는 메소드를 호출한 노드의 앞쪽과 뒷쪽에 
//파라미터로 전달한 값을 형제 노드로 추가해 준다.