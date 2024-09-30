document.getElementById('surveyForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const colorInputs = document.querySelectorAll('.color-input');
    let results = '';

    colorInputs.forEach(input => {
        const questionNumber = input.getAttribute('data-question');
        const colorValue = input.value;
        results += `Question ${questionNumber}: ${colorValue}<br>`;
    });

    document.getElementById('results').innerHTML = `<h2>Your Selections:</h2>${results}`;
});

