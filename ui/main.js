console.log('Loaded!');

var element = document.getElementById('main-text');

element.innerHTML = 'New one';

var img = document.getElementById('madi');
    img.onclick = function () {
      img.style.marginLeft = '200 px' ;  
    };