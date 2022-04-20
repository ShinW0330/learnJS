// 객체 오브젝드 object

let sin = {
  name: 'shin',
  boneYear : 1990,
  'bone Year2': 1990,
  bestCourse: {
    title: '자바스크립트 프로그래밍 기초',
    language :'javascript '
  }
};

// 점 표기법 (objectName.propertyName)
console.log(sin.boneYear);
// 변수 명이 띄어 쓰기가 되어 있으면 점 표기법으로 접근 할 수 없다. 
// 그렇기 때문에 변수 명에 ' ' 를 같이 써 주어야 변수로 사용 할수 있지만 
// 이렇게 만들어진 변수명은 점 표기법으로는 접근할 수 없다. 

// console.log(sin.bone Year2); 사용불가

// 대괄호 표기법 objectName['propertyName']
console.log(sin['bone Year2']);