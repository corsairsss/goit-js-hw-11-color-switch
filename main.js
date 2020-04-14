'use strict';
const refs = {
  startBtn: document.querySelector('button[data-action="start"'),
  stopBtn: document.querySelector('button[data-action="stop"'),
  body: document.querySelector('.js-body'),
};

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const changeColor = {
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    this.bodyColorId = setInterval(() => {
      const rand = randomIntegerFromInterval(0, 6);
      refs.body.style.backgroundColor = colors[rand];
      console.log(rand);
    }, 1000);
  },
  stop() {
    this.isActive = false;
    clearInterval(this.bodyColorId);
  },
};
refs.startBtn.addEventListener('click', changeColor.start.bind(changeColor));
refs.stopBtn.addEventListener('click', changeColor.stop.bind(changeColor));
