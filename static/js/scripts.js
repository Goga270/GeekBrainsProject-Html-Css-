'use strict';



//Menu SCRIPTS
let menuImg = document.querySelector('.menu_img');
let menuCloseImg = document.querySelector('.img_close_menu');
let darkScene = document.querySelectorAll('.brandDark');
let menu = document.querySelector('.menu');
let content = document.querySelector('.brand');
let offers = document.querySelector('.offersWrap');
menuImg.addEventListener('click', function (){
    for (let i=0;i<darkScene.length;i++){
        darkScene[i].classList.toggle('hidden');
    }
    //darkScene.classList.toggle('hidden');
    menu.classList.toggle('hidden');
});
menuCloseImg.addEventListener('click', function (){
    for (let i=0;i<darkScene.length;i++){
        darkScene[i].classList.add('hidden');
    }
    //darkScene.classList.add('hidden');
    menu.classList.add('hidden');
});
content.addEventListener('click', function (){
    for (let i=0;i<darkScene.length;i++){
        darkScene[i].classList.add('hidden');
    }
    //darkScene.classList.add('hidden');
    menu.classList.add('hidden');
});

offers.addEventListener('click', function (){
    for (let i=0;i<darkScene.length;i++){
        darkScene[i].classList.add('hidden');
    }
    //darkScene.classList.add('hidden');
    menu.classList.add('hidden');
});



