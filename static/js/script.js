document.addEventListener("DOMContentLoaded", function () {
    const cancelButtons = document.querySelectorAll(".cancel-btn");
    const modal = document.getElementById("confirmation-modal");
    const confirmBtn = document.getElementById("confirm-btn");
    const cancelBtn = document.getElementById("cancel-btn");
    let currentResultId = null;

    cancelButtons.forEach((button) => {
        button.addEventListener("click", function () {
            // Get the result ID from the clicked cancel button
            currentResultId = button.getAttribute("data-id");

            // Show the modal
            modal.style.display = "flex";
        });
    });

    // Handle the confirm button click (remove the word)
    confirmBtn.addEventListener("click", function () {
        if (currentResultId) {
            const resultElement = document.getElementById(currentResultId);
            if (resultElement) {
                // Remove the result element from the DOM
                resultElement.remove();
            }
        }

        // Close the modal after confirming
        modal.style.display = "none";
    });

    // Handle the cancel button click (close the modal)
    cancelBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Close the modal if clicked outside
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});

// update date footer year when loaded function

function updateDate() {
    // Get the current date
    const today = new Date();

    // Format the date (e.g., Year)
    const formattedDate = today.toLocaleDateString('en-US', {
        year: 'numeric',
    });

    // Find the element by its ID and update its content
    document.getElementById('current-date').textContent = formattedDate;
}

// Call the function to update the date on page load
document.addEventListener('DOMContentLoaded', updateDate);