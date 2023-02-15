/**
 * 검색창 제어
 */
// 검색창 요소(.search) 찾기.
const searchEl = document.querySelector('.serach');
const searchInputEl = searchEl.querySelector('input');
//const searchInputEl = document.querySelector('.search input');
// 검색창 요소를 클릭하면 실행.
searchEl.addEventListener('click', function () {
searchInputEl.focus()
})
// 검색창 요소 내부 실제 input 요소에 포커스되면 실행.
searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused')
  searchInputEl.setAttribute('placeholder', '통합검색')
})

searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused')
  searchInputEl.setAttribute('placeholder', '')
})

const badgeEl = document.querySelector('header .badges');

// window.addEventListener('scroll', function(){
//   console.log('scroll')
// });

/* lodash cdn (scroll 에 관한 자바스크립트 라이브러리) */

window.addEventListener('scroll', _.throttle(function(){
  console.log(window.scrollY) ; /* 스크롤 의 좌표 를 알려준다.  */
  if(window.scrollY > 500){
    //배지 숨기기
    //badgeEl.style.display ='none'; 스타일로 처리해보기.

    //gsap.to(요소, 지속시간, 옵션);  gsap 라이브러리 사용해서 처리하기 
    gsap.to(badgeEl, .6, {
      opacity :0,  /*문제점 - 시각적으로 사라져 있지 -> 그 위치에는 남아있다.  */
      display : 'none'
    });
  }else{
    //배지 보이기
    //badgeEl.style.display ='block';
    gsap.to(badgeEl, .6, {
      opacity :1,
      display : 'block'   /* 숫자 이외에는 '' 로 감싸 줘야 한다(문자데이터로 적용).  */
    });
  }
}, 300));  /* 0.3초 부하를 주어서 스로트를 걸어준다.  */
/* 
_.throttle(함수, 시간)
*/