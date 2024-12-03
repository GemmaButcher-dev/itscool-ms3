document.addEventListener("DOMContentLoaded", function() {
    let currentResultId = null;

    // Attach event to open the confirmation modal
    document.querySelectorAll(".remove-btn").forEach(button => {
        button.addEventListener("click", function() {
            currentResultId = this.getAttribute("data-id");
            const confirmationModal = new bootstrap.Modal(document.getElementById('confirmationModal'));
            confirmationModal.show();
        });
    });

    // Confirm button - remove item & close the modal
    document.getElementById("confirm-btn").addEventListener("click", function() {
        if (currentResultId) {
            //Remove the search result
            document.getElementById(currentResultId)?.remove();

            // hide the modal after removing the item
            const confirmationModal = bootstrap.Modal.getInstance(document.getElementById('confirmationModal'));
            confirmationModal.hide();

            // Ensure that the backdrop is removed
            const backdrop = document.querySelector('.modal-backdrop');
            if (backdrop) {
                backdrop.parentNode.removeChild(backdrop);
            }
        }
    });

     // Ensure the cancel button closes the modal (Bootstrap default =bug fix=)
     document.getElementById("cancel-btn")?.addEventListener("click", function() {
        const confirmationModal = new bootstrap.Modal(document.getElementById('confirmationModal'));
        confirmationModal.hide();
    });
});

    // Hide the 'all-slangs' section when there's a query
    const query = "{{ query }}";
    if (query) {
        document.getElementById('all-slangs').style.display = 'none';
    }

    // Attach event for edit modal on admin dashboard
    document.querySelectorAll(".edit-btn").forEach(button => {
        button.addEventListener("click", function() {
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
            document.getElementById("editSlangForm").action = "/admin/edit_slang/" + slangId;

            const editModal = new bootstrap.Modal(document.getElementById('editModal'));
            editModal.show();
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
        window.location.replace(homeUrl); // Ensure 'homeUrl' is defined
    }, 10000);