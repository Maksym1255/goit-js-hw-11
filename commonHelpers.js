import{S as h,i as a}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function n(t){if(t.ep)return;t.ep=!0;const e=o(t);fetch(t.href,e)}})();const p="44595659-f233d14b1d86ebf700a2637af";function g(s){const r="https://pixabay.com",o="/api/",n=new URLSearchParams({key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}),t=`${r}${o}?${n}`;return fetch(t).then(e=>{if(!e.ok)throw new Error(e.status);return e.json("")}).then(e=>e.hits).catch(e=>{throw console.log(e),e})}function y(s){const r=document.getElementById("gallery");r.innerHTML="";const o=s.map(({webformatURL:t,largeImageURL:e,tags:i,likes:u,views:f,comments:d,downloads:m})=>`<li class="gallery-item">
	<a class="gallery-link" href="${e}">
		<img
			class="gallery-image"
			src="${t}"
			alt="${i}"
			/>
	</a>
  <div class="details">
  <p class="info">Likes: <br>${u}</p>
  <p class="info">Views: <br>${f}</p>
  <p class="info">Comments: <br>${d}</p>
  <p class="info">Downloads: <br>${m}</p>
</div>
</li>
`).join("");r.innerHTML=o,new h(".gallery a").refresh()}const c=document.getElementById("search-form"),L=document.getElementById("search-input"),l=document.getElementById("loader");c.addEventListener("submit",s=>{s.preventDefault();const r=L.value.trim();if(r===""){a.warning({title:"Warning!",message:"Please enter a search query",position:"center"});return}else b(),g(r).then(o=>{if(o.length===0){a.info({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"center"});return}y(o)}).catch(o=>{console.error(o)}).finally(()=>{w()});c.reset()});function b(){l.classList.add("loader")}function w(){l.classList.remove("loader")}
//# sourceMappingURL=commonHelpers.js.map
