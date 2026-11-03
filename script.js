const joyButton = document.querySelector('#joy-button');
const joyNote = document.querySelector('#joy-note');
const heroArt = document.querySelector('.hero-art');
const petals = document.querySelector('.flower-petals');
const messages = [
  'You make this place a little brighter.',
  'A fresh start looks good on you.',
  'There’s always room for a little joy.',
  'Good things start with a hello.',
];
let joyCount = 0;
let celebrationTimeout;

joyButton.addEventListener('click', () => {
  joyNote.textContent = messages[joyCount % messages.length];
  joyCount += 1;
  petals.style.transform = `rotate(${joyCount * 90}deg)`;
  heroArt.classList.remove('is-celebrating');
  clearTimeout(celebrationTimeout);
  requestAnimationFrame(() => {
    heroArt.classList.add('is-celebrating');
    celebrationTimeout = setTimeout(() => {
      heroArt.classList.remove('is-celebrating');
    }, 650);
  });
});
