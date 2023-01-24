

var btn50 = document.querySelector('.page05 .form5__btn');
var mess = document.querySelector('.page05 .page05__mess');

// btn50.addEventListener('click', ()=>{
//    mess.classList.toggle('active');
// });

function check1() {
   mess.classList.toggle('active');
}

btn50.onclick = check1;