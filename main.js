/* Create a file at js/main.js and paste the contents below */
(function(){
  // current year in footer
  const y = new Date().getFullYear();
  const el = document.getElementById('year');
  if(el) el.textContent = y;

  // mobile nav toggle (simple)
  const btn = document.querySelector('.mobile-nav-toggle');
  const nav = document.querySelector('.nav');
  btn && btn.addEventListener('click', ()=>{
    if(nav.style.display === 'flex') nav.style.display = 'none';
    else nav.style.display = 'flex';
  });
})();
