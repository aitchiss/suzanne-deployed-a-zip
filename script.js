const sunshineButton = document.querySelector('.sunshine-button');
const reminder = document.querySelector('.reminder');
const reminderText = document.querySelector('#little-reminder');

const littleReminders = [
  'Good things take a little growing.',
  'There is joy in the smallest things.',
  'You can bloom at your own pace.',
  'A little kindness goes a long way.',
  'Make room for something that makes you smile.',
  'Today is a lovely day to begin again.',
];
let reminderIndex = 0;

sunshineButton.addEventListener('click', () => {
  reminderIndex = (reminderIndex + 1) % littleReminders.length;
  reminderText.textContent = littleReminders[reminderIndex];
  reminder.scrollIntoView({
    behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
    block: 'nearest',
  });
  reminder.classList.remove('is-fresh');
  requestAnimationFrame(() => {
    requestAnimationFrame(() => reminder.classList.add('is-fresh'));
  });
});
