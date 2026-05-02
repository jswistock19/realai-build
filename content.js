(function(){
  function inject(){
    var chunks = window.__C || [];
    if(!chunks.length){ setTimeout(inject, 30); return; }
    var html = chunks.join('');
    // Wipe any leftover script tags from body, insert assembled HTML + sub-page container
    document.body.innerHTML = html + '<div id="sub-page-content" style="display:none;"></div>';
    if(window.lucide) lucide.createIcons();
  }
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();
