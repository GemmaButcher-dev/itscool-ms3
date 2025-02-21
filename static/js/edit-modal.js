document.addEventListener("DOMContentLoaded", function () {
    // EDIT SLANG FUNCTIONALITY
    const editModalElement = document.getElementById("editModal");

    // Ensure the modal element exists before initializing
    if (editModalElement) {
        const editModal = new bootstrap.Modal(editModalElement);

        // Attach event listeners to edit buttons to open the edit modal
        document.querySelectorAll(".edit-btn").forEach(button => {
            button.addEventListener("click", function () {
                const slangId = this.getAttribute("data-id");
                const slang = this.getAttribute("data-slang");
                const definition = this.getAttribute("data-definition");
                const age = this.getAttribute("data-age");
                const type = this.getAttribute("data-type");

                // Populate the modal form fields with data
                document.getElementById("editSlangId").value = slangId;
                document.getElementById("editSlang").value = slang;
                document.getElementById("editDefinition").value = definition;
                document.getElementById("editAge").value = age;
                document.getElementById("editType").value = type;

                // Show the edit modal
                editModal.show();
            });
        });
    
        // Save changes to the slang word and close edit modal
        document.getElementById("save-edit").addEventListener("click", function () {
            document.getElementById("editSlangForm").submit();
        });
    
        // Close edit modal when clicking cancel or close button
        document.getElementById("cancel-edit").addEventListener("click", function () {
            editModal.hide();
        });
        document.getElementById("close-edit").addEventListener("click", function () {
            editModal.hide();
        });
        
    } else {
        console.error("Edit modal element not found in the DOM.");
    }
});