(function(){
  function fname(path){ try { return path.split('/').pop().split('#')[0].split('?')[0]; } catch(e){ return "index.html"; } }
  var PAGES = (window.PAL_SLIDES || []).map(function(p){ return String(p || "").toLowerCase(); });
  var here  = fname(location.pathname).toLowerCase() || "index.html";
  if (PAGES.length === 0) return;

  // If current file isn't in PAGES (e.g., renamed), try index fallback.
  var i = PAGES.indexOf(here);
  if (i === -1) { i = 0; here = PAGES[0]; }

  // Slide number
  var num = document.querySelector('.slideNumber');
  if (num) num.textContent = (i+1) + " / " + PAGES.length;

  // Prev/Next
  var right = document.querySelector('.header .right');
  if (right){
    var prev = right.querySelector('.nav-btn.prev');
    var next = right.querySelector('.nav-btn.next');

    function disable(a){ if(!a) return; a.removeAttribute('href'); a.style.opacity=".5"; a.style.pointerEvents="none"; }

    if (prev){
      if (i > 0) { prev.href = PAGES[i-1]; prev.style.opacity="1"; prev.style.pointerEvents=""; }
      else disable(prev);
    }
    if (next){
      if (i < PAGES.length - 1) { next.href = PAGES[i+1]; next.style.opacity="1"; next.style.pointerEvents=""; }
      else disable(next);
    }

    // Dots
    var dotsHost = document.getElementById('dots');
    if (dotsHost){
      dotsHost.innerHTML = "";
      for (var k=0; k<PAGES.length; k++){
        var span = document.createElement('span');
        span.className = "dot" + (k===i ? " active" : "");
        dotsHost.appendChild(span);
      }
    }
  }

  // Keyboard nav
  document.addEventListener('keydown', function(e){
    if(e.key === 'ArrowRight' && i < PAGES.length-1) location.href = PAGES[i+1];
    if(e.key === 'ArrowLeft'  && i > 0)              location.href = PAGES[i-1];
  });
})();