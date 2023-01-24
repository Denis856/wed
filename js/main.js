var burger = document.querySelector('.header__burger');
var menu = document.querySelector('.header__menu');
var counts = document.querySelectorAll('.page1__count');

burger.addEventListener('click', ()=>{
   burger.classList.toggle('active');
   menu.classList.toggle('active');
});

// page1

counts.forEach(item =>{ 
   item.addEventListener('click', (e) =>{
      counts.forEach(el=>{ el.classList.remove('active'); });
   item.classList.add('active');
});
});

const productContainers = [...document.querySelectorAll('.page1__courusel')];
const nxtBtn = [...document.querySelectorAll('.page1__count1')];
const preBtn = [...document.querySelectorAll('.page1__count2')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    });
    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    });
});

// const productContainers2 = [...document.querySelectorAll('.page4__bg')];
// const nxtBtn2 = [...document.querySelectorAll('.page4__arr1')];
// const preBtn2 = [...document.querySelectorAll('.page4__arr2')];

// productContainers2.forEach((item, i) => {
//     let containerDimensions = item.getBoundingClientRect();
//     let containerWidth = containerDimensions.width;

//     nxtBtn2[i].addEventListener('click', () => {
//         item.scrollLeft += containerWidth;
//     });
//     preBtn2[i].addEventListener('click', () => {
//         item.scrollLeft -= containerWidth;
//     });
// });


// index3

var size = document.querySelectorAll('.product__size');
var color = document.querySelectorAll('.product__color');

size.forEach(item =>{ 
   item.addEventListener('click', (e) =>{
      size.forEach(el=>{ el.classList.remove('active'); });
   item.classList.add('active');
});
});

color.forEach(item =>{ 
   item.addEventListener('click', (e) =>{
      color.forEach(el=>{ el.classList.remove('active'); });
   item.classList.add('active');
});
});

// popup

var icon0 = document.querySelector('.header__icon');
var krest = document.querySelector('.form10__krest');
var form10 = document.querySelector('.form10');
var body = document.querySelector('body');
var page11 = document.querySelector('.page11');
var btn5 = document.querySelector('.form5__btn');
var page110 = document.querySelector('.page110');
var btn10 = document.querySelector('.page110__btn');

icon0.addEventListener('click', ()=>{
   form10.classList.add('active');
   page11.classList.add('active');
   body.classList.add('active');
});

krest.addEventListener('click', ()=>{
   form10.classList.remove('active');
   page11.classList.remove('active');
   body.classList.remove('active');
});

btn5.addEventListener('click', ()=>{
   form10.classList.remove('active');
   page11.classList.add('active');
   body.classList.remove('active');
   page110.classList.add('active');
});

btn10.addEventListener('click', ()=>{
   page110.classList.remove('active');
   page11.classList.remove('active');
});


