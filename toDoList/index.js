const toDoList = document.querySelector('#to-do-list');

console.log(toDoList);

function addList(text){
  const liTag = document.createElement('li');
  liTag.innerText  = text;
  toDoList.append(liTag);
}

addList('모모랑 산책하기');
addList('모모랑 공부하기');
addList('모모랑 밥먹기');
addList('모모 괴롭히기');
addList('모모 물기')
addList('모모 물기2')
addList('모모 물기3')