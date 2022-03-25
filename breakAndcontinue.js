/** 복습
 * 정수 190의 약수를 모두 구해라 . 
 * 그리고 총 갯수를 세워라 
 */

const N = 190;
let a= 1;
let count =1; 

while(a<=N){
  if(N%a === 0){
    console.log(a);
    count++;
  }
  a++;
}

/**
 * break 와 continue
 */

/*
 let myChoice =2;
 switch(myChoice){
   case 1:
     console.log('토끼를 선택한 당신, ......');
     break;
   case 2:
     console.log('고양이를 선택한 당신, ......');
     break;
   case 3:
     console.log('코알라를 선택한 당신, ......');
     break;
   case 4:
     console.log('강아지를 선택한 당신, ......');
     break;
   default:
     console.log('1에서 4사이의 숫자를 선택해 주세요.');
 }
 */


 let i= 1;
 while(i < 10){
     console.log(i);
     i++;
     break; 
 }
 // while문 안에 break 를 사용하면 반복문인 while 문이 한번만 실행이 되고 중단 된다. 

let n=1;
while(n < 100){
    console.log(n);
    if(n === 7){
        break;
    }
    n++;
}

for(j=1; j <11; j++){
    if(j%2===0){ // 짝수 일 경우 for문이 다시 실행 하려고 처음으로 간다. 
        continue; // 짝수가 아닐경우 다음으로 넘어간다. 
    }
    console.log(j); // 1, 3, 5, 7, 9
}

let b=1;
while(b<11){
    if(b%2 === 0){
        i++;
        continue;
    }
    console.log(i);
    i++;
}

// 여기에 코드를 작성해 주세요.
/*
1단~ 9단 까지 구구단
for(i=1; i<10; i++){
    for(j=1; i<=j; j++){
      console.log(`${i}*${j} = ${i*j}`);
      if(j ===9){
        continue;
      }
       
    }
   
  } //실패
*/

for(i=1; i<10; i++){
    for(let j= 1; j<10; j++){
      console.log(`${i} * ${j} = ${j*i}`);
    }
   // console.log(`1 * ${i} = ${1*i}`);
}

let x = 1;
while (x <= 9) {
  let y = 1;
  while (y <= 9) {
    console.log(`${x} * ${y} = ${x * y}`);
    y++;
  }
  x++;
}