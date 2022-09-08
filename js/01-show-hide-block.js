const btn = document.querySelector(`#button`);
const content = document.querySelector(`#content`);
btn.addEventListener('click', ()=>{

    content.classList.toggle('content-hidden');

})