const form = document.getElementById('timer-form');
const timeInput = document.getElementById('time-input');
const timerDisplay = document.getElementById('timer-display');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const time = timeInput.value * 60; // convert minutes or hours to seconds
  let remainingTime = time;
  const timerInterval = setInterval(() => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    if (remainingTime === 0) {
      clearInterval(timerInterval);
      speak('Time\'s up!');
    }
    remainingTime--;
  }, 1000);
});

function speak(text) {
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.voice = synth.getVoices()[0]; // select the first available voice
  synth.speak(utterance);
}