document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".form");function n(e,n){return new Promise((function(o,t){var a=Math.random()>.3;setTimeout((function(){a?o({position:e,delay:n}):t({position:e,delay:n})}),n)}))}e.addEventListener("submit",(function(o){o.preventDefault();var t=parseInt(e.elements.delay.value,10),a=parseInt(e.elements.step.value,10);(function(e,o,t){for(var a=[],s=1;s<=e;s++){var c=s,l=o+(s-1)*t;a.push(n(c,l).then((function(e){var n=e.position,o=e.delay;console.log("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(e){var n=e.position,o=e.delay;console.log("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))})))}return Promise.all(a)})(parseInt(e.elements.amount.value,10),t,a).then((function(){console.log("All promises fulfilled successfully")})).catch((function(){console.error("At least one promise was rejected")}))}))})),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".form");function n(e,n){return new Promise((function(o,t){var a=Math.random()>.3;setTimeout((function(){a?o({position:e,delay:n}):t({position:e,delay:n})}),n)}))}e.addEventListener("submit",(function(o){o.preventDefault();var t=parseInt(e.elements.delay.value,10),a=parseInt(e.elements.step.value,10);(function(e,o,t){for(var a=[],s=1;s<=e;s++){var c=s,l=o+(s-1)*t;a.push(n(c,l).then((function(e){var n=e.position,o=e.delay;console.log("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(e){var n=e.position,o=e.delay;console.log("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))})))}return Promise.all(a)})(parseInt(e.elements.amount.value,10),t,a).then((function(){console.log("All promises fulfilled successfully")})).catch((function(){console.error("At least one promise was rejected")}))}))}));
//# sourceMappingURL=03-promises.9131ccff.js.map