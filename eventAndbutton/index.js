// 이벤트(Event)와 버튼 클릭
const btn = document.querySelector('#myBtn');

// 이벤트 핸들링(Event Handling)

// btn 변수에 onclick 이라는 프로퍼트를 사용하여 함수 정의 
btn.onclick = function() { // 이벤트 핸들러(Event Handler)
	console.log('Hello Codeit!');
  alert('클릭');
};

// 이벤트 핸들링
// 태그를 선택해서 프로퍼티에 어떤 함수를 할당하는게 