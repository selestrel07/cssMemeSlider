function changeSlide(el, num) {
  const controlActive = document.getElementsByClassName('active')[0];
  controlActive.classList.remove('active');
  el.getElementsByClassName('control')[0].classList.add('active');
  const slides = document.getElementsByClassName('slides')[0];
  const captions = document.getElementsByClassName('caption')[0];
  slides.style.left = `-${slides.offsetWidth * num / 4}px`;
  captions.style.left = `-${captions.offsetWidth * num / 4}px`;
}