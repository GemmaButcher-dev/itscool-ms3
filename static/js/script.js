document.addEventListener('DOMContentLoaded', () => {
    // Add click event listeners to all cancel buttons
    document.querySelectorAll('.cancel-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            const resultId = event.target.getAttribute('data-id'); // Get the unique ID of the result
            const resultElement = document.getElementById(resultId); // Find the element
            if (resultElement) {
                resultElement.remove(); // Remove it from the DOM
            }
        });
    });
});