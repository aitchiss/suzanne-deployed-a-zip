const jokes = [
  ['Why did the scarecrow win an award?', 'Because he was outstanding in his field.'],
  ['Why don’t scientists trust atoms?', 'Because they make up everything.'],
  ['Why did the bicycle fall over?', 'Because it was two-tired.'],
  ['Why don’t skeletons fight each other?', 'They don’t have the guts.'],
  ['Why was the math book sad?', 'It had too many problems.'],
  ['What do you call a fake noodle?', 'An impasta.'],
  ['What do you call a fish with no eyes?', 'A fsh.'],
  ['Why did the orange stop halfway up the hill?', 'It ran out of juice.'],
  ['What do you call a belt made of watches?', 'A waist of time.'],
  ['Why was the calendar nervous?', 'Its days were numbered.'],
  ['Why was the computer cold?', 'It left its Windows open.'],
  ['What do you call a bear with no teeth?', 'A gummy bear.'],
  ['How do you organize a space party?', 'You planet.'],
  ['What did one wall say to the other?', 'I’ll meet you at the corner.'],
  ['What do you call a sleeping dinosaur?', 'A dino-snore.'],
  ['Why did the cookie go to the doctor?', 'It was feeling crummy.'],
];

const setup = document.querySelector('#joke-setup');
const punchline = document.querySelector('#joke-punchline');
const anotherJoke = document.querySelector('#another-joke');
let currentJoke = -1;

function tellJoke() {
  // Pick from the other jokes so consecutive clicks always give a new one.
  let nextJoke = Math.floor(Math.random() * (jokes.length - (currentJoke < 0 ? 0 : 1)));
  if (currentJoke >= 0 && nextJoke >= currentJoke) nextJoke += 1;
  currentJoke = nextJoke;
  setup.textContent = jokes[currentJoke][0];
  punchline.textContent = jokes[currentJoke][1];
}

anotherJoke.addEventListener('click', tellJoke);
anotherJoke.hidden = false;
tellJoke();
