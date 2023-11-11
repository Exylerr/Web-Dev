/*Script for the dropdown menu*/
document.addEventListener("DOMContentLoaded", function () {
    const settingsIcon = document.getElementById("settingsIcon");
    const dropdownPanel = document.getElementById("dropdownPanel");

    settingsIcon.addEventListener("click", function (e) {
        e.stopPropagation();
        if (dropdownPanel.style.display === "block") {
            dropdownPanel.style.display = "none";
        } else {
            dropdownPanel.style.display = "block";
        }
    });

    document.addEventListener("click", function (e) {
        if (e.target !== settingsIcon && e.target !== dropdownPanel && !dropdownPanel.contains(e.target)) {
            dropdownPanel.style.display = "none";
        }
    });
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

    if (selectedACE === "AOS" || selectedACE === "COS") {
        toggleSubmitButton("block"); 
    } else {
        toggleSubmitButton("none"); 
    }
});

// Event listener for form submission
document.querySelector("form").addEventListener("submit", function (event) {
    
    if (!isFormValid()) {
        event.preventDefault(); 
        alert("Please complete the form before submitting."); 
    } else {
        alert("Please check you webmail for updates.");
    }
});

// Function to validate the form
function isFormValid() {
   
    const reasonsField = document.getElementById("Reasons");
    const reasonsValue = reasonsField.value.trim(); 
    if (reasonsValue === "") {
        alert("Please provide a reason for the change of enrollment."); 
        return false; 
    }

    if (!isTableFilled("myTable") && !isTableFilled("toTable")) {
        return false; 
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
            if (cells[j].textContent.trim() === "") {
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
        const newRow = table.insertRow(-1);
        const cells = [];

        for (let i = 0; i < 6; i++) {
            cells.push(newRow.insertCell(i));
            cells[i].contentEditable = true;

            if (i === 0) {
                cells[i].addEventListener("input", function () {
                    if (cells[i].textContent.length > 10) {
                        cells[i].textContent = cells[i].textContent.slice(0, 10);
                    }
                });
            }
        }
        const deleteCell = newRow.insertCell(6);
        const deleteButton = document.createElement("button");
        deleteButton.className = "delete-row";
        deleteButton.textContent = "Delete Row";
        deleteButton.onclick = function () {
            deleteRow(this);
        };
        deleteCell.appendChild(deleteButton);
    }
});

// Event listener for the "Add Row" button for Table2
document.getElementById("add-row2").addEventListener("click", function () {
    const selectedACE = document.getElementById("ACE").value;

    if (selectedACE === "COS") {
        const table = document.getElementById("toTable");
        const newRow = table.insertRow(-1);
        const cells = [];

        for (let i = 0; i < 6; i++) {
            cells.push(newRow.insertCell(i));
            cells[i].contentEditable = true;

            if (i === 0) {
                cells[i].addEventListener("input", function () {
                    if (cells[i].textContent.length > 10) {
                        cells[i].textContent = cells[i].textContent.slice(0, 10);
                    }
                });
            }
        }
        const deleteCell = newRow.insertCell(6);
        const deleteButton = document.createElement("button");
        deleteButton.className = "delete-row2";
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
