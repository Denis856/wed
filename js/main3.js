
var carousel = document.querySelector('.page4__bg');
var arr1 = document.querySelectorAll('.page4__arr');
var firstImg = document.querySelectorAll('.page4__img')[0];

var isDragStar = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;
var firstImgWidth = firstImg.clientWidth;
var scrollWidth = carousel.scrollWidth - carousel.clientWidth;


// var showHideIcons = () => {
//    arr1[0].style.display = carousel.scrollLeft == 0 ? 'none' : 'block';
//    arr1[1].style.display = carousel.scrollLeft == scrollWidth ? 'none' : 'block';
// }

arr1.forEach(icon =>{
   icon.addEventListener('click', () => { // скрол стрелкой
      carousel.scrollLeft += icon.id == 'left' ? -firstImgWidth : firstImgWidth;
      // setTimeout(() => showHideIcons(), 60);
   });
});

var autoSlide = () => {
   if(carousel.scrollLeft == (carousel.scrollWidth - carousel.clientWidth)) return;

   positionDiff = Math.abs(positionDiff);
   var firstImgWidth = firstImg.clientWidth;
   var valDiference = firstImgWidth - positionDiff;

   if(carousel.scrollLeft > prevScrollLeft){
      return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDiference : -positionDiff;
   }
   return carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDiference : -positionDiff;
};

var dragStar = (e) => {
   isDragStar = true; // скрол картинкой
   prevPageX = e.pageX || e.touches[0].pageX;
   prevScrollLeft = carousel.scrollLeft;
}

// var dragging = (e) => {
//    if(!isDragStar) return;
//    e.preventDefault();
//    isDragging = true;
//    carousel.classList.add('dragging');
//    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
//    carousel.scrollLeft = prevScrollLeft - positionDiff;
//    showHideIcons();
// }

var dragStop = () => {
   isDragStar = false;
   carousel.classList.remove('dragging');
   if(!isDragging) return;
   isDragging = false;
   autoSlide();
}

carousel.addEventListener('mousedown', dragStar);
carousel.addEventListener('touchstart', dragStar);

// carousel.addEventListener('mousemove', dragging);
// carousel.addEventListener('touchmove', dragging);

carousel.addEventListener('mouseup', dragStop);
carousel.addEventListener('mouseleave', dragStop);
carousel.addEventListener('touchend', dragStop);