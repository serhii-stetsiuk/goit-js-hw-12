import{a as q,S as w,i as c}from"./assets/vendor-BK_rxH-O.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();async function p(t,s){return(await q.get("https://pixabay.com/api/",{params:{key:"51732314-3454f0789e14ece522df46b66",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:"15"}})).data}const u=document.querySelector(".js-gallery"),f=document.querySelector(".js-load-more");let O=new w(".js-gallery a",{captionDelay:250,overlayOpacity:.95});function h(t){const s=t.map(({webformatURL:o,largeImageURL:n,tags:e,likes:r,views:l,comments:S,downloads:j})=>`
        <a class="gallery-card js-gallery-card" href="${n}"
          ><div class="gallery-link">
            <img src="${o}" alt="${e}" class="gallery-image" />
          </div>
          <div class="gallery-text">
            <div class="likes">
              <p class="gallery-text-item">Likes</p>
              <p class="gallery-text-count">${r}</p>
            </div>

            <div class="likes">
              <p class="gallery-text-item">Views</p>
              <p class="gallery-text-count">${l}</p>
            </div>
            <div class="likes">
              <p class="gallery-text-item">Comments</p>
              <p class="gallery-text-count">${S}</p>
            </div>
            <div class="likes">
              <p class="gallery-text-item">Downloads</p>
              <p class="gallery-text-count">${j}</p>
            </div>
          </div>
        </a>`).join("");u.insertAdjacentHTML("beforeend",s),O.refresh()}function v(t){t.classList.add("js-isActive")}function L(t){t.classList.remove("js-isActive")}function P(){if(u)u.innerHTML="";else return}function B(){f.classList.add("load-btn-active")}function x(){f.classList.remove("load-btn-active")}const M=document.querySelector(".js-form"),R=document.querySelector(".js-load-more"),m=document.querySelector(".js-loader"),y=document.querySelector(".js-loader-load-more");let i,g=0,d;const $=15;let a;M.addEventListener("submit",async t=>{if(t.preventDefault(),x(),i=1,d=t.target.elements.search_text.value,!d.trim()){c.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});return}P(),v(m);try{a=await p(d.trim(),i),a.hits.length?h(a.hits):c.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),g=Math.ceil(a.totalHits/$)}catch(s){console.log(s),c.error({position:"topRight",message:s})}b(),L(m),t.target.reset()});R.addEventListener("click",async()=>{v(y),i+=1,b();try{a=await p(d.trim(),i),h(a.hits)}catch{c.error({message:"ERROR"})}L(y);const t=document.querySelector(".js-gallery-card");if(!t)return;const o=t.getBoundingClientRect().height;window.scrollBy({top:o*2,left:0,behavior:"smooth"})});function b(){i===g&&c.info({message:"We're sorry, but you've reached the end of search results.",position:"bottomRight"}),i<g?B():x()}
//# sourceMappingURL=index.js.map
