// Simple theme toggle with localStorage, honoring prefers-color-scheme
(function(){
  const key = "pref-theme";
  const btn = document.getElementById("themeToggle");
  const pref = localStorage.getItem(key);
  if(pref){
    document.documentElement.dataset.theme = pref;
    if(pref === "light"){
      document.documentElement.classList.add("light");
    }
  }else{
    // nothing: CSS already adapts via prefers-color-scheme
  }
  btn?.addEventListener("click", () => {
    const isLight = document.documentElement.classList.toggle("light");
    const t = isLight ? "light" : "dark";
    localStorage.setItem(key, t);
  });
})();

// ---- Parallax background
(function(){
  const bg = document.querySelector('.bg-mesh.parallax');
  if(!bg) return;
  window.addEventListener('scroll', () => {
    const y = window.scrollY * 0.25;
    bg.style.backgroundPosition = `center ${-y}px`;
  }, {passive:true});
})();

// ---- Scroll reveal
(function(){
  const els = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if(e.isIntersecting){
        e.target.classList.add('is-visible');
        io.unobserve(e.target);
      }
    });
  }, {rootMargin: '0px 0px -10% 0px'});
  els.forEach(el => io.observe(el));
})();
