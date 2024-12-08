// script.js
let currentStep = 1;
const steps = document.querySelectorAll('.step-content');
const progressFill = document.querySelector('.progress-fill');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const form = document.getElementById('form');

function updateProgressBar() {
    const progress = ((currentStep - 1) / (steps.length - 1)) * 100;
    progressFill.style.width = `${progress}%`;

    steps.forEach((step, index) => {
        if (index < currentStep - 1) {
            step.classList.add('completed');
        } else {
            step.classList.remove('completed');
        }
        if (index === currentStep - 1) {
            step.classList.add('active');
        } else {
            step.classList.remove('active');
        }
    });

    prevButton.disabled = currentStep === 1;
    nextButton.textContent = currentStep === steps.length ? 'Submit' : 'Next';
}

function validateStep() {
    const currentStepElement = steps[currentStep - 1];
    const inputs = currentStepElement.querySelectorAll('input, textarea');
    return Array.from(inputs).every(input => input.checkValidity());
}

prevButton.addEventListener('click', () => {
    if (currentStep > 1) {
        currentStep--;
        updateProgressBar();
    }
});

nextButton.addEventListener('click', () => {
    if (currentStep < steps.length) {
        if (!validateStep()) {
            alert('Please fill out all fields in this step.');
            return;
        }
        currentStep++;
        updateProgressBar();
    } else {
        if (form.checkValidity()) {
            alert('Form Submitted Successfully!');
        } else {
            alert('Please complete all steps before submitting.');
        }
    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (form.checkValidity()) {
        alert('Form Submitted Successfully!');
    } else {
        alert('Please fill out all fields.');
    }
});

updateProgressBar();