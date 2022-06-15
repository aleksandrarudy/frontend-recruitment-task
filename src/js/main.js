const open = document.getElementById('open-alert-popup');
const alert = document.getElementById('alert-container');
const close = document.getElementById('close-alert-popup');
let clicks = 0; 
let clicksCountResult = document.getElementById("clicksCountResult"); 


open.addEventListener('click', ()=> {
    alert.classList.add('show');
});

close.addEventListener('click', ()=> {
    alert.classList.remove('show');
});

open.addEventListener("click", () => {
    clicks += 1;
    clicksCountResult.innerHTML=clicks;
});
