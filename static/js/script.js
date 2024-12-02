const cancelButtons = document.querySelectorAll(".cancel-btn");
document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("confirmation-modal");
    const confirmBtn = document.getElementById("confirm-btn");
    const cancelBtn = document.getElementById("cancel-btn");
    let currentResultId = null;

    cancelButtons.forEach((button) => {
        button.addEventListener("click", function() {
            // Get the result ID from the clicked cancel button
            currentResultId = button.getAttribute("data-id");

            // Show the modal
            modal.style.display = "flex";
        });
    });

    // Handle the confirm button click (remove the word)
    confirmBtn.addEventListener("click", function() {
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
    cancelBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });

    // Close the modal if clicked outside
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});

//to hide all slangs section if there is a query
window.onload = function() {
    const query = "{{ query }}";
    const allSlangsSection = document.getElementById('all-slangs');
        
    if (query) {
        allSlangsSection.style.display = 'none';
    }
}

// edit pending slang modal for admin_dashboard

document.addEventListener("DOMContentLoaded", function () {
    const editButtons = document.querySelectorAll(".edit-btn");
    editButtons.forEach(button => {
        button.addEventListener("click", function () {
            const slangId = this.getAttribute("data-id");
            const slang = this.getAttribute("data-slang");
            const definition = this.getAttribute("data-definition");
            const age = this.getAttribute("data-age");
            const type = this.getAttribute("data-type");

            document.getElementById("editSlangId").value = slangId;
            document.getElementById("editSlang").value = slang;
            document.getElementById("editDefinition").value = definition;
            document.getElementById("editAge").value = age;
            document.getElementById("editType").value = type;

            // Show the modal
            var editModal = new bootstrap.Modal(document.getElementById('editModal'));
            editModal.show();
            
            document.getElementById("editSlangForm").action = "/admin/edit_slang/" + slangId;
        });
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

// 404 redirect timeout
setTimeout(() => {
    window.location.replace(homeUrl);
}, 10000); // Redirect after 10 seconds