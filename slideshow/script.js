var images = ['slide1.jpg', 'slide2.jpg', 'slide3.jpg'];
var caption = ['Pink Floyd - Animals', 'Pink Floyd - Time', 'Pink Floyd - Wish You Were Here'];

var imageNumber = 0;
var imageLength = images.length -1;

var previous = document.querySelector('#previous');
var next = document.querySelector('#next');


window.addEventListener('keydown', function(e){
    if(e.keyCode == 37) changeImage(-1);
    if(e.keyCode == 39) changeImage(1);
    else return;
 });


function changeImage(x) {
   imageNumber += x;
  if (imageNumber > imageLength){
     imageNumber = 0;
  }
  if (imageNumber < 0) {
    imageNumber = imageLength;
  }
  document.querySelector('#slideshow').src = images[imageNumber];
  document.querySelector('#caption').innerHTML = caption[imageNumber];

  return false;
}

previous.addEventListener('click', function() {
  changeImage(-1);
});
next.addEventListener('click', function(){
  changeImage(1);
});
