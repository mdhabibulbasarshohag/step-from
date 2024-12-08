let currentStep = 1;
const totalSteps = 8;

function showStep(step) {
    document.querySelectorAll('.step').forEach((stepDiv) => {
        stepDiv.classList.remove('active');
    });
    document.getElementById(`step${step}`).classList.add('active');
    updateProgressBar(step);
}

function updateProgressBar(step) {
    const progressBar = document.getElementById('progressBar');
    const progress = (step / totalSteps) * 100;
    progressBar.style.width = `${progress}%`;
}

function nextStep(step) {
    if (validateStep(step)) {
        currentStep = step + 1;
        showStep(currentStep);
    }
}

function prevStep(step) {
    currentStep = step - 1;
    showStep(currentStep);
}

function validateStep(step) {
    if (step === 1) {
        const name = document.getElementById('name').value.trim();
        if (name === "") {
            alert("Name is required!");
            return false;
        }
    } else if (step === 2) {
        const email = document.getElementById('email').value.trim();
        if (email === "") {
            alert("Email is required!");
            return false;
        }
        if (!validateEmail(email)) {
            alert("Enter a valid email address!");
            return false;
        }
    }
    // Add similar validation for other steps as needed
    return true;
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function submitForm() {
    alert("Form submitted successfully!");
}

// Initialize the first step
showStep(currentStep);