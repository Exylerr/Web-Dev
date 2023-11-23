// Function to handle logout
function logout() {
    // Redirect to the login page
    window.location.href = "PUP-ACE.html";
}
document.getElementById("logoutLink").addEventListener("click", function (event) {
    event.preventDefault();
    logout();
});

/*Script for Date Output*/
function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

function updateDateOutput() {
    const currentDate = new Date();
    const formattedDate = formatDate(currentDate);
    document.getElementById('date-output').textContent = `(${formattedDate})`;
}

updateDateOutput();

/*Script for Displaying the AOS/COS content*/
function displayACE() {
    var select = document.getElementById("ACE");
    var selectedACE = select.options[select.selectedIndex].value;

    // Get the content divs
    var contentAOS = document.getElementById("contentAOS");
    var contentCOS = document.getElementById("contentCOS");

    if (selectedACE === "AOS") {
        contentAOS.style.display = "block";
        contentCOS.style.display = "none";
    } else if (selectedACE === "COS") {
        contentAOS.style.display = "none";
        contentCOS.style.display = "block";
    } else {
        contentAOS.style.display = "none";
        contentCOS.style.display = "none";
    }
}

// Function to display or hide the submit button
function toggleSubmitButton(display) {
    const submitButton = document.getElementById("submit");
    submitButton.style.display = display;
}

// Event listener for the ACE dropdown
document.getElementById("ACE").addEventListener("change", function () {
    const selectedACE = this.value;

    clearReasonsTextArea(); // Clear the Reasons text area

    if (selectedACE === "AOS" || selectedACE === "COS") {
        toggleSubmitButton("block"); // Display the submit button
    } else {
        toggleSubmitButton("none"); // Hide the submit button
    }
});

// Function to clear the form after successful submission
function clearForm() {
    // Clear the reasons textarea
    document.getElementById("Reasons").value = "";

    // Clear the AOS table
    clearTable("myTable");

    // Clear the COS tables
    clearTable("fromTable");
    clearTable("toTable");
}

// Function to clear a table
function clearTable(tableId) {
    const table = document.getElementById(tableId);
    const rows = table.getElementsByTagName("tr");

    // Remove all rows except the header row
    for (let i = rows.length - 1; i > 0; i--) {
        table.deleteRow(i);
    }

    // If there are no rows, add one empty row
    if (rows.length === 1) {
        const newRow = table.insertRow(-1);
        for (let j = 0; j < rows[0].cells.length; j++) {
            const newCell = newRow.insertCell(j);
            newCell.innerHTML = "<input type='text' name='code[]' required>";
        }
    }
}

// Function to validate the form
function isFormValid(selectedACE) {
    const reasonsField = document.getElementById("Reasons");
    const reasonsValue = reasonsField.value.trim();

    if (reasonsValue === "") {
        alert("Please provide a reason for the change of enrollment.");
        return false;
    }

    if (selectedACE === "AOS") {
        if (!isTableFilled("myTable")) {
            return false;
        }
    } else if (selectedACE === "COS") {
        if (!isTableFilled("fromTable") || !isTableFilled("toTable")) {
            return false;
        }
    }

    return true;
}


// Function to check if the table is filled
function isTableFilled(tableId) {
    const table = document.getElementById(tableId);
    const rows = table.getElementsByTagName("tr");

    for (let i = 1; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName("td");
        for (let j = 0; j < cells.length; j++) {
            const inputField = cells[j].getElementsByTagName("input")[0];
            if (inputField && inputField.value.trim() === "") {
                alert("Please fill in all the fields in the table.");
                return false;
            }
        }
    }
    return true;
}

// Event listener for the "Add Row" button for Table1
document.getElementById("add-row").addEventListener("click", function () {
    const selectedACE = document.getElementById("ACE").value;

    if (selectedACE === "AOS") {
        const table = document.getElementById("myTable");
        const originalRow = table.rows[1]; // Assuming the first row is the original row
        const newRow = table.insertRow(-1);

        for (let i = 0; i < originalRow.cells.length - 1; i++) {
            const newCell = newRow.insertCell(i);
            newCell.innerHTML = originalRow.cells[i].innerHTML; // Clone the cell structure
            newCell.contentEditable = true; // Make the cell editable

            if (i === 0) {
                newCell.addEventListener("input", function () {
                    if (newCell.textContent.length > 10) {
                        newCell.textContent = newCell.textContent.slice(0, 10);
                    }
                });
            }
        }

        const deleteCell = newRow.insertCell(originalRow.cells.length - 1);
        const deleteButton = document.createElement("button");
        deleteButton.className = "delete-row";
        deleteButton.textContent = "Delete Row";
        deleteButton.onclick = function () {
            deleteRow(this);
        };
        deleteCell.appendChild(deleteButton);
    }
});

// Event listener for the "Add Row" button for Table2 (fromTable)
document.getElementById("add-row-to").addEventListener("click", function () {
    const selectedACE = document.getElementById("ACE").value;

    if (selectedACE === "COS") {
        const table = document.getElementById("toTable");
        const originalRow = table.rows[1]; // Assuming the first row is the original row
        const newRow = table.insertRow(-1);

        for (let i = 0; i < originalRow.cells.length - 1; i++) {
            const newCell = newRow.insertCell(i);
            newCell.innerHTML = originalRow.cells[i].innerHTML; // Clone the cell structure
            newCell.contentEditable = true; // Make the cell editable

            if (i === 0) {
                newCell.addEventListener("input", function () {
                    if (newCell.textContent.length > 10) {
                        newCell.textContent = newCell.textContent.slice(0, 10);
                    }
                });
            }
        }

        const deleteCell = newRow.insertCell(originalRow.cells.length - 1);
        const deleteButton = document.createElement("button");
        deleteButton.className = "delete-row";
        deleteButton.textContent = "Delete Row";
        deleteButton.onclick = function () {
            deleteRow(this);
        };
        deleteCell.appendChild(deleteButton);
    }
});

// Event listener for the "Add Row" button for Table2 (toTable)
document.getElementById("add-row-from").addEventListener("click", function () {
    const selectedACE = document.getElementById("ACE").value;

    if (selectedACE === "COS") {
        const table = document.getElementById("fromTable");
        const originalRow = table.rows[1]; // Assuming the first row is the original row
        const newRow = table.insertRow(-1);

        for (let i = 0; i < originalRow.cells.length - 1; i++) {
            const newCell = newRow.insertCell(i);
            newCell.innerHTML = originalRow.cells[i].innerHTML; // Clone the cell structure
            newCell.contentEditable = true; // Make the cell editable

            if (i === 0) {
                newCell.addEventListener("input", function () {
                    if (newCell.textContent.length > 10) {
                        newCell.textContent = newCell.textContent.slice(0, 10);
                    }
                });
            }
        }

        const deleteCell = newRow.insertCell(originalRow.cells.length - 1);
        const deleteButton = document.createElement("button");
        deleteButton.className = "delete-row2"; // Change class to delete-row2
        deleteButton.textContent = "Delete Row";
        deleteButton.onclick = function () {
            deleteRow(this);
        };
        deleteCell.appendChild(deleteButton);
    }
});

// Function to clear the Reason/s for Change of Enrollment text area
function clearReasonsTextArea() {
    const reasonsField = document.getElementById("Reasons");
    reasonsField.value = ""; 
}

// Event listener for the ACE dropdown
document.getElementById("ACE").addEventListener("change", function () {
    clearReasonsTextArea(); 
    const selectedACE = this.value;

    if (selectedACE === "AOS" || selectedACE === "COS") {
        toggleSubmitButton("block"); 
    } else {
        toggleSubmitButton("none"); 
    }
});

// Function to delete a row
function deleteRow(button) {
    const row = button.parentElement.parentElement;
    row.remove(); 
}
// Event listener for the "Add Row" button
document.getElementById("add-row").addEventListener("click", function () {
    addRow("myTable");
});

// Function to display the pop-up
function openPopup() {
    document.getElementById("popupContainer").style.display = "block";
}
// Function to close the pop-up
function closePopup() {
    document.getElementById("popupContainer").style.display = "none";
}
// Automatically open the pop-up when the page loads
window.onload = openPopup;