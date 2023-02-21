let sildeIndex = 1;
    slideFn(sildeIndex);


function plus(chkNum){
    console.log(sildeIndex = chkNum);
    slideFn(sildeIndex = chkNum-1);
}

function prevNextChk(chkNum){
    console.log(sildeIndex);
    console.log(sildeIndex += chkNum);
    slideFn(sildeIndex += chkNum+1);
}

function slideFn(n){
   // const slideContainerEl = document.querySelectorAll('.silde-container');
    const slideFadeEls = document.querySelectorAll('.slide-fade');
    const btnsContainerEls = document.querySelectorAll('.btns-container')[0];
   // const btnItemsEls =btnsContainerEls.querySelectorAll('.btn-item');
    let i;
    for (let i = 0; i < slideFadeEls.length; i++) {
        slideFadeEls[i].classList.remove('active');            
    }
    // if(chkNum > slideFadeEls.length){ 
    //     sildeIndex =1;
    // };
    // if(chkNum <= slideFadeEls.length){ 
    //     sildeIndex = slideFadeEls.length;
    // };
    slideFadeEls[n].classList.add('active');
    
    
    
}
// document.querySelectorAll('.slide-fade')[2].classList.add('active');