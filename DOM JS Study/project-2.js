// Variables

let openBtn = document.getElementById('open-btn');
let modalContainer = document.getElementById('modal-container');
let closeBtn = document.getElementById('close-btn');

// Event Listeners

openBtn.addEventListener('click', ()=>{

  modalContainer.style.display = 'block';

})

closeBtn. addEventListener('click', ()=>{
  modalContainer.style.display = 'none'
})

window.addEventListener('click', (e)=> {
  if (e.target === modelContainer) {
    modalContainer.style.display = 'none';
  }
})