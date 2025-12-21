// Modal
const characters = document.querySelectorAll('.character');
const modal = document.getElementById('modal');
const modalName = document.getElementById('modalName');
const modalInfo = document.getElementById('modalInfo');
const modalIcon = document.getElementById('modalIcon');
const modalDescription = document.getElementById('modalDescription');
const modalVideo = document.getElementById('modalVideo');
const closeBtn = document.getElementById('closeBtn');

characters.forEach(char=>{
  char.addEventListener('click', ()=>{
    // Verifica se é o anel do Sonic
    if(char.id === 'sonic-ring'){
      document.getElementById('sonic-sound').play();

    } else {
      modal.style.display='flex';
      modalName.textContent=char.dataset.name;
      modalInfo.textContent=char.dataset.info;
      if(char.dataset.name === 'Luigi'){
        modalIcon.src = 'https://i.pinimg.com/1200x/e8/37/7e/e8377eb9e58418060e52fd46afa521f5.jpg';
      } else if(char.dataset.name === 'Mario'){
        modalIcon.src = 'https://i.pinimg.com/1200x/8f/9f/2c/8f9f2c0abeb93c68fc925409081d7a28.jpg';
      } else if(char.dataset.name === 'Yoshi'){
        modalIcon.src = 'https://i.pinimg.com/736x/53/07/59/530759c76803e438f3e841ac6790a2f4.jpg';
      } else if(char.dataset.name === 'Peach'){
        modalIcon.src = 'https://i.pinimg.com/736x/f3/53/cd/f353cde312cc3718e1f4987fcb830d10.jpg';
      } else if(char.dataset.name === 'Toad'){
        modalIcon.src = 'https://i.pinimg.com/736x/02/23/5d/02235db74e42495f8c86b7e5d1a7829d.jpg';
      } else if(char.dataset.name === 'Bowser'){
        modalIcon.src = 'https://i.pinimg.com/1200x/c2/c4/ef/c2c4efe4c498a9d22fc82e6e433113f1.jpg';
      } else if(char.dataset.name === 'Wario'){
        modalIcon.src = 'https://i.pinimg.com/1200x/b2/c3/f1/b2c3f123579ef2f4929a27cc783947b4.jpg';
      } else if(char.dataset.name === 'Rosalina'){
        modalIcon.src = 'https://i.pinimg.com/736x/b5/40/22/b54022ddc836e666dd79374e2a2e36c0.jpg';
      } else if(char.dataset.name === 'Waluigi'){
        modalIcon.src = 'https://i.pinimg.com/736x/2b/20/4c/2b204c2f24ce322619d775eab746f9db.jpg';
      } else if(char.dataset.name === 'Daisy'){
        modalIcon.src = 'https://i.pinimg.com/1200x/7d/46/ef/7d46eff8b9f0b2aa7838314b77d1c591.jpg';
      } else if(char.dataset.name === 'Donkey Kong'){
        modalIcon.src = 'https://i.pinimg.com/736x/57/2e/27/572e27ed1d2dc779b0920e04c69812f8.jpg';
      } else {
        modalIcon.src = char.querySelector('img').src;
      }
      modalDescription.textContent = char.dataset.description;
      modalVideo.src = char.dataset.video;
    }
  });
});

closeBtn.addEventListener('click', ()=> {
  modal.style.display='none';
  modalVideo.src = ''; // Stop video when closing
});
window.addEventListener('click', (e)=>{ 
  if(e.target===modal) {
    modal.style.display='none';
    modalVideo.src = ''; // Stop video when closing
  }
});








characters.forEach(char => {
  char.addEventListener('click', () => {
    // Som do anel do Sonic
    if (char.id === 'sonic-ring') {
      document.getElementById('sonic-sound').play();
      return;
    }

    // Pega o nome do personagem
    const name = char.dataset.name.toLowerCase().replace(/\s/g, '-'); // substitui espaço por hífen
    const sound = document.getElementById(`${name}-sound`);

    if (sound) sound.play();
  });
});
