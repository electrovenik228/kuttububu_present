(function(){
 // Фото: заглушка видна, пока картинка не загрузилась
 document.querySelectorAll('.photo img').forEach(function(img){
  function ok(){ if(img.naturalWidth) img.closest('.photo').classList.add('is-loaded'); }
  if(img.complete) ok(); else img.addEventListener('load', ok);
 });

 // Мягкое появление блоков
 if(!('IntersectionObserver' in window)) return;
 if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
 document.documentElement.classList.add('js');
 var io = new IntersectionObserver(function(entries){
  entries.forEach(function(e){
   if(e.isIntersecting){ e.target.classList.add('is-visible'); io.unobserve(e.target); }
  });
 }, {rootMargin:'0px 0px -8% 0px', threshold:0.05});
 document.querySelectorAll('.reveal').forEach(function(el){ io.observe(el); });
 window.addEventListener('beforeprint', function(){
  document.querySelectorAll('.reveal').forEach(function(el){ el.classList.add('is-visible'); });
 });
})();
