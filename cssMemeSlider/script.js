function changeSlide(el, num) {
  const controlActive = document.getElementsByClassName('active')[0];
  controlActive.classList.remove('active');
  el.getElementsByClassName('control')[0].classList.add('active');
  moveSlide(num);
}

function moveSlide(num) {
  const slides = document.getElementsByClassName('slides')[0];
  const captions = document.getElementsByClassName('caption')[0];
  slides.style.left = `-${slides.offsetWidth * num / 4}px`;
  captions.style.left = `-${captions.offsetWidth * num / 4}px`;
}

window.onresize = function() {
  const activeSlideNumber = Array.from(document.getElementsByClassName('control')).filter(slide => slide.classList.contains('active'))[0].getAttribute('num');
  console.log(activeSlideNumber);
  const slides = document.getElementsByClassName('slides')[0];
  const captions = document.getElementsByClassName('caption')[0];
  slides.style.transition = 'none';
  captions.style.transition = 'none';
  moveSlide(activeSlideNumber)
  slides.style.transition = 'linear var(--transition-time)';
  captions.style.transition = 'linear var(--transition-time)';
}