document.addEventListener("DOMContentLoaded", function () {
    let currentResultId = null;

    // Delete slang functionality
    const confirmationModal = document.getElementById("confirmationModal");
    const editModal = document.getElementById("editModal");

    // Attach event listener to remove buttons to open the delete confirmation modal
    document.querySelectorAll(".remove-btn").forEach(button => {
        button.addEventListener("click", function () {
            currentResultId = this.getAttribute("data-id");
             // -- Show the confirmation modal
            confirmationModal.style.display = "block";
        });
    });

    // Confirm deletion and close the modal
    document.getElementById("confirm-btn").addEventListener("click", function () {
        if (currentResultId) {
            document.getElementById(currentResultId)?.remove();
            currentResultId = null;
            // -- Hide the modal after confirming
            confirmationModal.style.display = "none";
        }
    });

    // Close confirmation modal when clicking cancel or close button
    document.getElementById("cancel-confirmation").addEventListener("click", function () {
        confirmationModal.style.display = "none";
    });
    document.getElementById("close-confirmation").addEventListener("click", function () {
        confirmationModal.style.display = "none";
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
    
                // -- Populate the modal with the data
                document.getElementById("editSlangId").value = slangId;
                document.getElementById("editSlang").value = slang;
                document.getElementById("editDefinition").value = definition;
                document.getElementById("editAge").value = age;
                document.getElementById("editType").value = type;
    
                // -- Set the form action URL to include the slang ID
                document.getElementById("editSlangForm").action = `/admin/edit_slang/${slangId}`;
    
                // -- Show the modal
                editModal.style.display = "block";
            });
        });
    
        // Close edit modal when clicking cancel or close button
        document.getElementById("cancel-edit").addEventListener("click", function () {
            editModal.style.display = "none";
        });
        document.getElementById("close-edit").addEventListener("click", function () {
            editModal.style.display = "none";
        });
    
        // Clicking outside of the modal content should close it
        window.onclick = function (event) {
            if (event.target.classList.contains('modal')) {
                event.target.style.display = "none";
            }
        }
    });

    

    document.addEventListener("DOMContentLoaded", function() {
        // -- Attach event listeners to all favorite buttons
        document.querySelectorAll(".favorite-btn").forEach(button => {
            button.addEventListener("click", function() {
                const slangId = this.getAttribute("data-id");
    
                // -- Send a POST request to the server to add to favorites
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
    });
    

    // Update footer with the current year
    function updateDate() {
        const today = new Date();
        document.getElementById('current-date').textContent = today.getFullYear();
    }
    updateDate();

    // 404 redirect after 10 seconds
    setTimeout(() => {
        window.location.replace(homeUrl); // -- Ensure 'homeUrl' is defined
    }, 10000)