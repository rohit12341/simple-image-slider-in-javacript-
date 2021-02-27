let slider = document.getElementById('slider');
let list = document.getElementById('list');

let nextBtn = document.getElementById('next');
let prevBtn = document.getElementById('prev');

let dots = document.getElementById('nav-dots');

let active = 0;
function insertSlides(images, path){
  if(slider){
    for(let [i, image] of images.entries()){

      // slide
      let item = document.createElement('div');
      item.className = 'item';
      (i != active) && (item.style.display = 'none');

      let img = document.createElement('img');
      img.setAttribute('alt', 'photo');
      img.src = path+'/'+image;

      // nav dot for slide
      let dot = document.createElement('div');
      dot.className = 'dot';
      dot.id = i;
      (i == active) && (dot.className = 'dot active');


      item.appendChild(img);
      list.appendChild(item);
      dots.append(dot);
    }
  }
}


function handleNextPrev(type, index){
  let dotitem  = dots.querySelectorAll('.dot');
  let items = slider.querySelectorAll('.item');

  if(index){
    active = Number(index);
  }
  else if(type == 'next'){
    active++;
    if(active >= items.length) active = 0;
  } else if(type == 'prev'){
    active--;
    if(active < 1) active = 0;
  } else {
    active = 0;
  }

  if(active >= 0 && active < items.length){
  for(let [i, item] of items.entries()){
    (i != active) ? item.style.display = 'none' : item.style.display = 'block';
  }

  for(let [i, dot] of dotitem.entries()){
    (i == active) ? dot.className = 'dot active' : dot.className = 'dot';
  }
  }
}


nextBtn.addEventListener('click', function(){
 handleNextPrev('next');
})


prevBtn.addEventListener('click', function(){
  handleNextPrev('prev');
})

dots.addEventListener('click', function(e){
  handleNextPrev('', e.target.id);
})

