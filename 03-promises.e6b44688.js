document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelector(".form");function t(e,t){return new Promise(((n,o)=>{const s=Math.random()>.3;setTimeout((()=>{s?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}e.addEventListener("submit",(function(n){n.preventDefault();const o=parseInt(e.elements.delay.value,10),s=parseInt(e.elements.step.value,10);(function(e,n,o){const s=[];for(let l=1;l<=e;l++){const e=l,i=n+(l-1)*o;s.push(t(e,i).then((({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e} in ${t}ms`)})))}return Promise.all(s)})(parseInt(e.elements.amount.value,10),o,s).then((()=>{console.log("All promises fulfilled successfully")})).catch((()=>{console.error("At least one promise was rejected")}))}))})),document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelector(".form");function t(e,t){return new Promise(((n,o)=>{const s=Math.random()>.3;setTimeout((()=>{s?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}e.addEventListener("submit",(function(n){n.preventDefault();const o=parseInt(e.elements.delay.value,10),s=parseInt(e.elements.step.value,10);(function(e,n,o){const s=[];for(let l=1;l<=e;l++){const e=l,i=n+(l-1)*o;s.push(t(e,i).then((({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e} in ${t}ms`)})))}return Promise.all(s)})(parseInt(e.elements.amount.value,10),o,s).then((()=>{console.log("All promises fulfilled successfully")})).catch((()=>{console.error("At least one promise was rejected")}))}))}));
//# sourceMappingURL=03-promises.e6b44688.js.map
