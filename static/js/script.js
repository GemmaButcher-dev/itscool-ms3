document.addEventListener("DOMContentLoaded", function () {
    let currentResultId = null;
    let currentForm = null;

    // Modal Functionality
    const backdrop = document.createElement('div');
    backdrop.className = 'modal-backdrop';

    // Delete slang functionality
    const confirmationModal = document.getElementById("confirmationModal");
    const editModal = document.getElementById("editModal");

    // Show modal function
    function showModal(modal) {
        document.body.appendChild(backdrop);
        modal.style.display = "block";
        backdrop.style.display = "block";
        setTimeout(() => {
            modal.style.opacity = "1";
            backdrop.style.opacity = "1";
        }, 10); // Small delay to trigger transition
    }

    // Hide modal function
    function hideModal(modal) {
        modal.style.opacity = "0";
        backdrop.style.opacity = "0";
        setTimeout(() => {
            modal.style.display = "none";
            backdrop.style.display = "none";
            if (document.body.contains(backdrop)) {
                document.body.removeChild(backdrop);
            }
        }, 300); // Match transition duration
    }

    // Attach open event for delete buttons
    document.querySelectorAll(".remove-btn").forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault();

            // Set the current result ID to remove
            currentResultId = this.getAttribute("data-id");
            currentForm = this.closest(".delete-form");

            // Show the confirmation modal
            showModal(confirmationModal);
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

            currentResultId = null; // Reset after removal
            hideModal(confirmationModal);
        }
    });

    // Attach event to cancel deletion
    document.getElementById("cancel-confirmation").addEventListener("click", function () {
        hideModal(confirmationModal);
    });

    // Attach event to close button on modal
    document.getElementById("close-confirmation").addEventListener("click", function () {
        hideModal(confirmationModal);
    });

    // Close modal when clicking on the backdrop
    window.addEventListener("click", function (event) {
        if (event.target === backdrop) {
            hideModal(confirmationModal);
        }
    });

    // EDIT SLANG FUNCTIONALITY
    // Attach event listeners to edit buttons to open the edit modal
    document.querySelectorAll(".edit-btn").forEach(button => {
        button.addEventListener("click", function () {
            const slangId = this.getAttribute("data-id");
            const slang = this.getAttribute("data-slang");
            const definition = this.getAttribute("data-definition");
            const age = this.getAttribute("data-age");
            const type = this.getAttribute("data-type");

            // Put data into modal
            document.getElementById("editSlangId").value = slangId;
            document.getElementById("editSlang").value = slang;
            document.getElementById("editDefinition").value = definition;
            document.getElementById("editAge").value = age;
            document.getElementById("editType").value = type;

            // Show the edit modal
            showModal(editModal);
        });
    });

    // Save changes to the slang word and close edit modal
    document.getElementById("save-edit").addEventListener("click", function () {
        document.getElementById("editSlangForm").submit();
        hideModal(editModal);
    });

    // Close edit modal when clicking cancel or close button
    document.getElementById("cancel-edit").addEventListener("click", function () {
        hideModal(editModal);
    });
    document.getElementById("close-edit").addEventListener("click", function () {
        hideModal(editModal);
    });

    // Close modal when clicking outside of it
    window.addEventListener("click", function (event) {
        if (event.target === editModal) {
            hideModal(editModal);
        }
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
        window.location.replace(homeUrl);
    }, 10000);
});
