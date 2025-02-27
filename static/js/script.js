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

            // Set the current result ID and form
            currentResultId = this.getAttribute("data-id");
            currentForm = this.closest(".delete-form");

            // Show the confirmation modal
            confirmationModal.show();
        });
    });

    // Attach event to confirm deletion and close modal
    document.getElementById("confirm-btn").addEventListener("click", function () {
        if (currentResultId && currentForm) {

            currentForm.submit();

            // Remove the slang element from the DOM
            const elementToRemove = document.getElementById(currentResultId);
            if (elementToRemove) {
                elementToRemove.remove();
            }

             // Reset and hide modal
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
    const favoriteButtons = document.querySelectorAll(".favorite-btn");

        favoriteButtons.forEach(button => {
            button.addEventListener("click", function () {
                const slangId = this.dataset.id; // Get the slang ID from data-id attribute

                // Send POST request to add slang to favorites
                fetch("/favourite/add", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "X-CSRFToken": "{{ csrf_token() }}"  // Include CSRF token if needed
                    },
                    body: JSON.stringify({ slang_id: slangId })
                })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        alert("Slang added to favorites!");
                        this.classList.add("active"); // Add active class for visual feedback
                    } else {
                        alert(data.message || "An error occurred. Please try again.");
                    }
                })
                .catch(error => {
                    console.error("Error:", error);
                    alert("An error occurred. Please try again.");
                });
            });
        });

     // Cancel deletion
     document.getElementById("cancel-confirmation").addEventListener("click", function () {
        confirmationModal.hide();
    });

    // Attach event listener to cancel buttons in search results
    document.querySelectorAll(".cancel-btn").forEach(button => {
        button.addEventListener("click", function () {
            const resultId = this.getAttribute("data-id"); // Get the ID of the result
            const resultElement = document.getElementById(resultId); // Find the result element

            if (resultElement) {
                resultElement.remove(); // Remove the element from the DOM
            }
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