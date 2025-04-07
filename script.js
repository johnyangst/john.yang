// Modal 功能
document.querySelectorAll('.team-member').forEach(member => {
    member.addEventListener('click', () => {
      document.getElementById('modal-name').textContent = member.dataset.name;
      document.getElementById('modal-role').textContent = member.dataset.role;
      document.getElementById('modal-detail').textContent = member.dataset.detail;
      document.getElementById('modal').classList.remove('hidden');
    });
  });
  
  document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('modal').classList.add('hidden');
  });
  window.addEventListener('click', (e) => {
    if (e.target.id === 'modal') {
      document.getElementById('modal').classList.add('hidden');
    }
  });
// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const revealOnScroll = () => {
  for (let el of reveals) {
    const windowHeight = window.innerHeight;
    const revealTop = el.getBoundingClientRect().top;
    const revealPoint = 100;

    if (revealTop < windowHeight - revealPoint) {
      el.classList.add('active');
    }
  }
};
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
  