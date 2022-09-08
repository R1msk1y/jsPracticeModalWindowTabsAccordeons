const allBtn = document.querySelectorAll('[data-tab]');
const allTabsContent = document.querySelectorAll('[data-tab-content]');



allTabsContent.forEach((tab)=>{

    tab.classList.add('hidden');

});


allBtn.forEach((item)=>{

    item.addEventListener('click', ()=>{

        const btnDataValue = item.dataset.tab;

        allTabsContent.forEach((tab)=>{

            tab.classList.add('hidden');

            if(tab.id === btnDataValue){

                tab.classList.remove('hidden');

                
            }


        });
     

       

       

      





    });

    

});