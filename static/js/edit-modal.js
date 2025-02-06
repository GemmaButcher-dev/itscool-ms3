document.addEventListener("DOMContentLoaded", function () {
    // EDIT SLANG FUNCTIONALITY
    const editModalElement = document.getElementById("editModal");

    if (editModalElement) {
        const editModal = new bootstrap.Modal(editModalElement);

        // Attach event listeners to edit buttons to open the edit modal
        document.querySelectorAll(".edit-btn").forEach(button => {
            button.addEventListener("click", function () {
                const slangId = this.getAttribute("data-id");
                const slang = this.getAttribute("data-slang") || "";
                const definition = this.getAttribute("data-definition") || "";
                const age = this.getAttribute("data-age") || "";
                const type = this.getAttribute("data-type") || "";

                // Ensure elements exist before setting values
                const slangIdField = document.getElementById("editSlangId");
                const slangField = document.getElementById("editSlang");
                const definitionField = document.getElementById("editDefinition");
                const ageField = document.getElementById("editAge");
                const typeField = document.getElementById("editType");

                if (slangIdField) slangIdField.value = slangId;
                if (slangField) slangField.value = slang;
                if (definitionField) definitionField.value = definition;
                if (ageField) ageField.value = age;
                if (typeField) typeField.value = type;

                // Show the edit modal
                editModal.show();
            });
        });

        // Save changes to the slang word and close edit modal
        const saveButton = document.getElementById("save-edit");
        if (saveButton) {
            saveButton.addEventListener("click", function () {
                const form = document.getElementById("editSlangForm");
                if (form) {
                    form.submit();
                } else {
                    console.error("Edit form not found.");
                }
            });
        }

        // Close edit modal when clicking cancel or close button
        const cancelButton = document.getElementById("cancel-edit");
        if (cancelButton) {
            cancelButton.addEventListener("click", function () {
                editModal.hide();
            });
        }

        const closeButton = document.getElementById("close-edit");
        if (closeButton) {
            closeButton.addEventListener("click", function () {
                editModal.hide();
            });
        }
    } else {
        console.error("Edit modal element not found in the DOM.");
    }
});
