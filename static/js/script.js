document.addEventListener("DOMContentLoaded", function () {
    let currentResultId = null;
    let currentForm = null;

    // DELETE SLANG FUNCTIONALITY
    const confirmationModalElement = document.getElementById("confirmationModal");
    const confirmationModal = new bootstrap.Modal(confirmationModalElement);

    // Attach open event for delete buttons
    document.querySelectorAll(".remove-btn").forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault();

            // Set the current result ID to remove
            currentResultId = this.getAttribute("data-id");
            currentForm = this.closest(".delete-form");

            // Show the confirmation modal
            confirmationModal.show();
        });
    });

    // Attach event to confirm deletion and close modal
    document.getElementById("confirm-btn").addEventListener("click", function () {
        if (currentResultId) {
            // Remove the slang element from the DOM
            const elementToRemove = document.getElementById(currentResultId);
            if (elementToRemove) {
                elementToRemove.remove();
            }

            // Optionally, submit the form to remove it from the database (if required)
            if (currentForm) {
                currentForm.submit();
            }

            // Reset variables and hide modal
            currentResultId = null;
            currentForm = null;
            confirmationModal.hide();
        }
    });

    // Attach event to cancel deletion
    document.getElementById("cancel-confirmation").addEventListener("click", function () {
        confirmationModal.hide();
    });

    // FUNCTIONALITY FOR FAVOURITE SLANG
    // Attach event listeners to all favorite buttons
    document.querySelectorAll(".favorite-btn").forEach(button => {
        button.addEventListener("click", function () {
            const slangId = this.getAttribute("data-id");

            // Send a POST request to the server to add to favorites
            fetch("/add_to_favorites", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ slang_id: slangId })
            })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        alert("Added to favorites!");
                    } else {
                        alert("Failed to add to favorites.");
                    }
                });
        });
    });

    // Update footer with the current year
    function updateDate() {
        const today = new Date();
        document.getElementById("current-date").textContent = today.getFullYear();
    }
    updateDate();

    // 404 redirect after 10 seconds
    setTimeout(() => {
        // Ensure 'homeUrl' is defined
        if (typeof homeUrl !== 'undefined') {
            window.location.replace(homeUrl);
        }
    }, 10000);
});
