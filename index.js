import{a as q,S as w,i as l}from"./assets/vendor-BK_rxH-O.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();async function f(r,s){return(await q.get("https://pixabay.com/api/",{params:{key:"51732314-3454f0789e14ece522df46b66",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:"15"}})).data}const g=document.querySelector(".js-gallery"),h=document.querySelector(".js-loader"),u=document.querySelector(".js-load-more"),v=document.querySelector(".js-loader-load-more");let O=new w(".js-gallery a",{captionDelay:250,overlayOpacity:.95});function L(r){const s=r.map(({webformatURL:a,largeImageURL:n,tags:e,likes:t,views:i,comments:j,downloads:S})=>`
        <a class="gallery-card js-gallery-card" href="${n}"
          ><div class="gallery-link">
            <img src="${a}" alt="${e}" class="gallery-image" />
          </div>
          <div class="gallery-text">
            <div class="likes">
              <p class="gallery-text-item">Likes</p>
              <p class="gallery-text-count">${t}</p>
            </div>

            <div class="likes">
              <p class="gallery-text-item">Views</p>
              <p class="gallery-text-count">${i}</p>
            </div>
            <div class="likes">
              <p class="gallery-text-item">Comments</p>
              <p class="gallery-text-count">${j}</p>
            </div>
            <div class="likes">
              <p class="gallery-text-item">Downloads</p>
              <p class="gallery-text-count">${S}</p>
            </div>
          </div>
        </a>`).join("");g.insertAdjacentHTML("beforeend",s),O.refresh(),y()}function x(){u?v.classList.add("js-isActive"):h.classList.add("js-isActive")}function y(){u?v.classList.remove("js-isActive"):h.classList.remove("js-isActive")}function p(){g&&(g.innerHTML="")}function P(){u.classList.add("load-btn-active")}function B(){u.classList.remove("load-btn-active")}const M=document.querySelector(".js-form"),R=document.querySelector(".js-load-more");let c=1,m=0,d;const $=15;let o;M.addEventListener("submit",async r=>{if(r.preventDefault(),d=r.target.elements.search_text.value,!d.trim()){l.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),p();return}p(),x();try{o=await f(d.trim(),c),o.hits.length?L(o.hits):l.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),m=Math.ceil(o.totalHits/$)}catch(s){l.error({position:"topRight",message:s})}b(),y(),r.target.reset()});R.addEventListener("click",async()=>{x(),c+=1,b();try{o=await f(d.trim(),c),L(o.hits)}catch{l.error({message:"ERROR"})}y();const r=document.querySelector(".js-gallery-card");if(!r)return;const a=r.getBoundingClientRect().height;window.scrollBy({top:a*2,left:0,behavior:"smooth"})});function b(){c===m&&l.info({message:"We're sorry, but you've reached the end of search results.",position:"bottomRight"}),c<=m?P():B()}
//# sourceMappingURL=index.js.map
