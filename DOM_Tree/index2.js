// DOM 프로퍼티
const myTag = document.querySelector('#list-1');


//1. innerHTML
// ul태그 안에 있는 li 태그 만 출력된다. 
console.log(myTag.innerHTML);
//myTag.innerHTML = '<li>Exotic</li>'
// Cat- 1 안에 있던 HTML 구조가 '<li>Exotic</li>'만 남고 사라짐

// li 태그 추가 
//myTag.innerHTML += '<li>Exotic</li>'

/**
 * innerHTML 은 요소안에 HTML을 확인하는 것 보다는 
 * 요소안 HTML을 수정하는데 자주 사용이 된다.
 * 요소 안에 있는 HTML 자체를 문자열로 리턴해준다. 
 * 태그와 태그사이의 줄바뀜이나 들여쓰기 같은 것도 포함 되어있다. 
 */

//2. outerHTML
console.log(myTag.outerHTML);
// run -> <ul id="list-1"> 안에 있는 li 가 전부 출력된다. ul 태그 포함

//myTag.outerHTML = '<ul id="new-list"><li>Exotic</li></ul>';
/**outerHTML은 해당 요소 자체를 가리키는 특성 때문에
 * 요소 자체가 새로운 요소를 교체한다. 
 * 그래서 요소를 수정하는 것처럼 보이는데 이러한 경우는
 * outerHTML에 값을 할당하게 되면 처음 선택한 요소는 사라진다는 의미이다. 
 * 
 */


//3. textContext
console.log(myTag.textContent);
// 요소안에 있는 내용중에서 HTML을 제외한 텍스트만 가져온다. 

myTag.textContent = '<li>new TEXt</li>';
/**
 * textContent 는 텍스트만 다루기 때문에 특수문자들도 텍스트로 출려한다.
 * 그렇기 때문에 태그를 붙여 써도 태그는 HTML로 인식되는것이 아니라 
 * 하나의 텍스트로 인식되어 그대로 출력된다.
 * 그렇기 때문에 화면상 웹페이지에 HTML 태그가 출력 되지 않게 innerHTML를
 * 사용하는 것 보단 textContent를 사용하면 실수로 태그를 입력하여 웹페이지 출력되는 것을
 * 방지 할 수 있다는 점이다. 
 */