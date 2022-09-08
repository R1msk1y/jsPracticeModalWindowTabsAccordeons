const allModalBtn = document.querySelectorAll(`[data-button]`);

const allModalWindow = document.querySelectorAll('[data-modal]');



allModalBtn.forEach((currentModalBtn)=>{

   

    currentModalBtn.addEventListener('click', (event)=>{


        const modalBtnDataValue = event.target.dataset.button;



        allModalWindow.forEach((modalWindow)=>{

            modalWindow.classList.add(`hidden`);

            if(modalBtnDataValue === modalWindow.id){

                modalWindow.classList.remove(`hidden`);

                const modalBtnClose = modalWindow.querySelector('[data-modal-close]');

                modalBtnClose.addEventListener(`click`, (event)=>{

                
                  const modalParentNode = event.target.closest(`.fade-block`);

                  modalParentNode.classList.add(`hidden`);


                });



                



            }

            

        });

        

        

    });


    

})