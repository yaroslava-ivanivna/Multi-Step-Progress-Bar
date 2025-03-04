const circleElements = document.querySelectorAll('.circle');
const progressBarLine = document.querySelector('.progress-bar .indicator');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const svgIcons = [
  './img/sprite.svg#tick-svgrepo-com',
  './img/sprite.svg#cross-svgrepo-com',
];
let currentStep = 0;

const updateSteps = e => {
  if (e.target.id === 'next' && currentStep < circleElements.length - 1) {
    currentStep++;
  } else if (e.target.id === 'prev' && currentStep > 0) {
    currentStep--;
  }

  circleElements.forEach((circle, index) => {
    const svgElement = circle.querySelector('use');
    if (index <= currentStep) {
      circle.classList.add('active');
      svgElement.setAttribute('xlink:href', svgIcons[0]);
    } else {
      circle.classList.remove('active');
      svgElement.setAttribute('xlink:href', svgIcons[1]);
    }
  });

  progressBarLine.style.width = `${
    (currentStep / (circleElements.length - 1)) * 100
  }%`;

  prevBtn.disabled = currentStep === 0;
  nextBtn.disabled = currentStep === circleElements.length - 1;
};

nextBtn.addEventListener('click', updateSteps);
prevBtn.addEventListener('click', updateSteps);
