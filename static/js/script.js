document.addEventListener("DOMContentLoaded", function () {
    let currentSlangId = null;
    let currentSlangElement = null;
    let currentForm = null;

    const confirmationModalElement = document.getElementById("confirmationModal");

    if (confirmationModalElement) {
        const confirmationModal = new bootstrap.Modal(confirmationModalElement);

        function attachDeleteEvents() {
            document.querySelectorAll(".remove-btn").forEach(button => {
                button.removeEventListener("click", handleDeleteClick);
                button.addEventListener("click", handleDeleteClick);
            });
        }

        function handleDeleteClick(event) {
            event.preventDefault();
            currentSlangId = this.getAttribute("data-id");
            currentSlangElement = document.getElementById(`slang-${currentSlangId}`);
            currentForm = this.closest(".delete-form");
            confirmationModal.show();
        }

        attachDeleteEvents();

        document.addEventListener("searchResultsUpdated", function () {
            attachDeleteEvents();
        });

        document.getElementById("confirm-btn").addEventListener("click", function () {
            if (currentSlangId) {
                fetch("/admin/delete_slang", {
                    method: "POST",
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                    body: `slang_id=${currentSlangId}`
                })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        if (currentSlangElement) {
                            currentSlangElement.remove();
                        }
                        alert("Slang deleted successfully!");
                    } else {
                        alert(data.message || "Error deleting slang.");
                    }
                })
                .catch(error => {
                    console.error("Error:", error);
                    alert("An error occurred. Please check the console for details.");
                });

                currentSlangId = null;
                currentSlangElement = null;
                currentForm = null;
                confirmationModal.hide();
            }
        });

        document.getElementById("cancel-confirmation").addEventListener("click", function () {
            confirmationModal.hide();
        });
    }

    function emitSearchResultsUpdated() {
        const event = new Event("searchResultsUpdated");
        document.dispatchEvent(event);
    }

    const searchForm = document.getElementById("search-form");
    if (searchForm) {
        searchForm.addEventListener("submit", function () {
            setTimeout(emitSearchResultsUpdated, 500);
        });
    }

    // ✅ Handle Admin Approving a Delete Request (Removes from UI Immediately)
    document.querySelectorAll(".approve-delete-btn").forEach(button => {
        button.addEventListener("click", function () {
            const slangId = this.getAttribute("data-id");
            const slangElement = document.getElementById(`slang-${slangId}`);

            fetch(`/admin/approve_delete/${slangId}`, { method: "POST" })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert("Slang deletion approved!");
                    if (slangElement) {
                        slangElement.remove(); // ✅ Remove from pending list without refresh
                    }
                } else {
                    alert("Error: Unable to approve deletion.");
                }
            })
            .catch(error => {
                console.error("Error:", error);
                alert("An error occurred. Please try again.");
            });
        });
    });

    // ✅ Handle Admin Rejecting a Delete Request (Removes from UI Immediately)
    document.querySelectorAll(".reject-delete-btn").forEach(button => {
        button.addEventListener("click", function () {
            const slangId = this.getAttribute("data-id");
            const slangElement = document.getElementById(`slang-${slangId}`);

            fetch(`/admin/reject_delete/${slangId}`, { method: "POST" })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert("Deletion request rejected.");
                    if (slangElement) {
                        slangElement.remove(); // ✅ Remove from pending list without refresh
                    }
                } else {
                    alert("Error: Unable to reject deletion.");
                }
            })
            .catch(error => {
                console.error("Error:", error);
                alert("An error occurred. Please try again.");
            });
        });
    });

    // ✅ Handle Admin Directly Deleting a Pending Slang (Removes from UI Immediately)
    document.querySelectorAll(".remove-btn").forEach(button => {
        button.addEventListener("click", function () {
            const slangId = this.getAttribute("data-id");
            const slangElement = document.getElementById(`slang-${slangId}`);

            fetch(`/admin/delete_slang`, {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: `slang_id=${slangId}`
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert("Slang deleted successfully!");
                    if (slangElement) {
                        slangElement.remove(); // ✅ Remove from pending list without refresh
                    }
                } else {
                    alert("Error deleting slang.");
                }
            })
            .catch(error => {
                console.error("Error:", error);
                alert("An error occurred. Please try again.");
            });
        });
    });

    // ✅ Functionality for Favoriting a Slang
    document.querySelectorAll(".favorite-btn").forEach(button => {
        button.addEventListener("click", function () {
            const slangId = this.dataset.id;

            fetch("/favourite/add", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ slang_id: slangId })
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert("Slang added to favorites!");
                    this.classList.add("active");
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

    function updateDate() {
        const today = new Date();
        const footerDate = document.getElementById("current-date");
        if (footerDate) {
            footerDate.textContent = today.getFullYear();
        }
    }
    updateDate();

    if (typeof homeUrl !== "undefined") {
        setTimeout(() => {
            window.location.replace(homeUrl);
        }, 10000);
    }
});
