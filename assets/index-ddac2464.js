(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function l(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(e){if(e.ep)return;e.ep=!0;const n=l(e);fetch(e.href,n)}})();(()=>{const o=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),l=document.querySelector(".js-close-menu"),r=()=>{const e=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!e),o.classList.toggle("is-open");const n=e?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[n](document.body)};t.addEventListener("click",r),l.addEventListener("click",r),window.matchMedia("(min-width: 768px)").addEventListener("change",e=>{e.matches&&(o.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();(()=>{const o={openModalBtn:document.querySelectorAll("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};o.openModalBtn.forEach(r=>{r.addEventListener("click",l)}),o.closeModalBtn.addEventListener("click",l),o.modal.addEventListener("click",t);function t(r){r.target==r.currentTarget&&(o.modal.classList.add("is-hidden"),document.body.classList.toggle("no-scroll"))}function l(){o.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}})();new Swiper(".mySwiper",{loop:!0,slidesPerView:1,spaceBetween:10,loop:!0,keyboard:{enabled:!0},navigation:{nextEl:".swiper-btn-next",prevEl:".swiper-btn-prev"},on:{slideChange:function(){var o=this.realIndex+1,t=this.slides.length;document.querySelector(".first-slide-num").innerHTML=o<10?"0"+o:o,document.querySelector(".last-slide-num").innerHTML=t<10?"0"+t:t}}});
