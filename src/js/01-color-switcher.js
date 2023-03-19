const butSwitchStart = document.querySelector('button[data-start]');
const butSwitchStop = document.querySelector('button[data-stop]');
const bodyColor = document.querySelector('body');

let intervalId;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function colorChange() {
  bodyColor.style.backgroundColor = getRandomHexColor();
}

function startColorSwitch() {
  intervalId = setInterval(colorChange, 1000);
  butSwitchStop.disabled = false;
}

function stopColorSwitch(intervalId) {
  clearInterval(intervalId);

}

butSwitchStart.addEventListener('click', async () => {
  startColorSwitch();
});

butSwitchStop.addEventListener('click', async () => {
  stopColorSwitch();
});
