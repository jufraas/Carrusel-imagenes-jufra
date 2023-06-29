const buttonPrev = document.getElementById('buttonPrev');
const buttonNext = document.getElementById('buttonNext');
const track = document.getElementById('track');
const slickList = document.getElementById('slickList');
const slick = document.querySelectorAll('.slick');

const slickWidth = slick[0].offsetWidth;

buttonPrev.addEventListener('click', () => move(1));
buttonNext.addEventListener('click', () => move(2));

const move = (value) => {
  const trackWidth = track.offsetWidth;
  const listWidth = slickList.offsetWidth;

  let leftPosition = 0;
  if (track.style.left) {
    leftPosition = parseFloat(track.style.left) * -1;
  }

  if (leftPosition < trackWidth - listWidth && value === 2) {
    track.style.left = `${-1 * (leftPosition + slickWidth)}px`;
  } else if (leftPosition > 0 && value === 1) {
    track.style.left = `${-1 * (leftPosition - slickWidth)}px`;
  }
};