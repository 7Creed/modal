'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

const openModal = function () {
  console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let btn of btnsOpenModal) {
  console.log(btn.textContent);
}

// OR
for (let i = 0; i < btnsOpenModal.length; i++)
  console.log(btnsOpenModal[i].textContent);

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

// My own but did not work
// const btn = btnCloseModal && overlay;
// btn.addEventListener('click', function () {
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
//   });

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  // console.log('A key was pressed');
//   console.log(e.key);
//   if (e.key === 'Escape') {
//     console.log('Esc was pressed');
//     if (!modal.classList.contains('hidden')) {
//       closeModal();
//     }
//   }

  if((e.key === 'Escape') && (!modal.classList.contains('hidden'))) {
    console.log('Esc was pressed');
    closeModal();
  }
  // if(e.key === 'Escape') {
  //   modal.classList.toggle('hidden');
  //   console.log('Esc was pressed');
  //   closeModal();
  // }
});
