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

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEls, index){
  // gsap.to(fadeEls(요소), 1(지속시간), 옵션)
  gsap.to(fadeEls, 1,{
    delay :(index + 1)* .7,  // 0.7  , 1.4, 2.1,  -> index 에 +1 를 하는 이유는 index는 0부터 시작하기 때문
    opacity: 1
  });

});

/* SWIPER */
  //new Swiper(선택자, 옵션 );
  new Swiper('.notice-line .swiper-container', {
    direction: 'vertical', /* 드래그 시 움직임 */
    autoplay: true, /* 자동으로 실행 */
    loop: true /* 반복 재생 여부 */
  });