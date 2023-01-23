

// index 2

var itemsLenght = document.querySelector('.page2__items').children.length;
var itemsLenght2 = document.querySelector('.page2__items').childElementCount;
var num_all = document.querySelectorAll('.numb_all');

num_all.forEach(elem => {
   elem.textContent = itemsLenght2;
});

var num = document.querySelectorAll('.numb');

num.forEach(elem => {
   elem.textContent = itemsLenght2;
});

var filterItem = document.querySelector('.page01__btns');
var filterImage = document.querySelectorAll('.item0');

window.onload = () => { 
   filterItem.onclick = (selectedItem) => {
      if(selectedItem.target.classList.contains('page01__btn')) {
         let filterName = selectedItem.target.getAttribute('data-name'); 
         filterImage.forEach((image) => {
            let filterImages = image.getAttribute('data-name');
            if((filterImages == filterName) || filterName == 'all') {
               image.classList.remove('hide');
               image.classList.add('show');
            } else {
               image.classList.add('hide');
               image.classList.remove('show');
            }
         });
      }
   };
};