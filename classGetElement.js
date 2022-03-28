//class로 태그 선택하기
/**
 * 만약 여러 요소들을 동시에 선택해야 하는 경우에는
 * CSS 로 스타일링 할 떄도 여러 요소들의 스타일을 한꺼번에 다룰 떄는 
 * id속성이 아니라 class 속성를 활용한다. 
 * 
 * class 를 활용하여 tag를 불러 올수 있다.
 * document 객체를 활용 한다.
 * document.getElementsByClassName
 * getElement에서 s가 붙는다. 그이유는 다수 태그를 불러 오는 것이기 때문에
 * 
 */

document.getElementsByClassName('.class');