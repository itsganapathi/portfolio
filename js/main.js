'use strict';
(function(){
const root=document.documentElement,btn=document.getElementById('theme-toggle'),label=document.getElementById('theme-label'),icon=document.getElementById('theme-icon'),meta=document.querySelector('meta[name="theme-color"]');
let stored;try{stored=localStorage.getItem('ganapathi-theme')}catch(e){}
const systemLight=window.matchMedia&&window.matchMedia('(prefers-color-scheme: light)').matches;
function setTheme(theme){const light=theme==='light';root.setAttribute('data-theme',theme);label.textContent=light?'Dark mode':'Light mode';icon.textContent=light?'☾':'☀';btn.setAttribute('aria-label',light?'Switch to dark mode':'Switch to light mode');btn.setAttribute('aria-pressed',String(light));meta.setAttribute('content',light?'#f6f8fc':'#080b15')}
setTheme(stored==='light'||stored==='dark'?stored:(systemLight?'light':'dark'));
btn.addEventListener('click',()=>{const next=root.getAttribute('data-theme')==='dark'?'light':'dark';setTheme(next);try{localStorage.setItem('ganapathi-theme',next)}catch(e){}});
})();
document.getElementById('year').textContent=new Date().getFullYear();const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.09});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
