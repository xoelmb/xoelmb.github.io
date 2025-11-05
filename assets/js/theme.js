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
