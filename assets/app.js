
(function(){
  function setHeaderHeight(){
    var header = document.querySelector('.header');
    var h = header ? header.offsetHeight : 72;
    document.documentElement.style.setProperty('--header-h', h + 'px');
  }
  window.addEventListener('load', setHeaderHeight);
  window.addEventListener('resize', setHeaderHeight);
})();
