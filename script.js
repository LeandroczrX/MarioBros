// Modal
const characters = document.querySelectorAll('.character');
const modal = document.getElementById('modal');
const modalName = document.getElementById('modalName');
const modalInfo = document.getElementById('modalInfo');
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
    }
  });
});

closeBtn.addEventListener('click', ()=> modal.style.display='none');
window.addEventListener('click', (e)=>{ if(e.target===modal) modal.style.display='none'; });

// Música
const music = document.getElementById('bg-music');
const musicBtn = document.getElementById('music-btn');
musicBtn.addEventListener('click', ()=>{
  if(music.paused){ music.play(); musicBtn.textContent='⏸️'; }
  else{ music.pause(); musicBtn.textContent='▶️'; }
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

