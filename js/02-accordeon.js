const allBtn = document.querySelectorAll('[data-name="accordeon-title"]');

allBtn.forEach((item)=>{

    item.addEventListener(`click`, ()=>{

   const content = item.nextElementSibling;

   content.classList.toggle('hidden');


    });

});




