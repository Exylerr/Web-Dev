function redirectToApplicationPage() {
    window.location.href = 'ACE-FORM.html';
  }

/* Global function*/
var submitButton = document.getElementById("submit-button");

/*Function for displaying or hiding */
function displaySections() {
    var aceSelect = document.getElementById("ACE");
    var reasonSection = document.getElementById("contentReasons");
    var dateSection = document.getElementById("contentDate");
    var tableAOS = document.getElementById("contentAOS");
    var tableCOS = document.getElementById("contentCOS");
    var tableW = document.getElementById("contentW");
    var alignment = document.getElementById("alignment");

    // Disable all table forms by default
    [tableAOS, tableCOS, tableW].forEach(table => {
        table.style.display = "none";
    });

    // Hide all sections by default
    [reasonSection, dateSection, alignment, submitButton].forEach(section => {
        section.style.display = "none";
    });

    // Check the selected option and enable the corresponding table form
    switch (aceSelect.value) {
        case "AOS":
            tableAOS.style.display = "block";
            break;
        case "COS":
            tableCOS.style.display = "block";
            break;
        case "W":
            tableW.style.display = "block";
            break;
    }

    // Check if any option in "Application for Change of Enrollment" is selected
    if (aceSelect.value !== "") {
        [reasonSection, dateSection, alignment, submitButton].forEach(element => {
            element.style.display = "block";
        });
    } else {
        [reasonSection, dateSection, alignment, submitButton].forEach(element => {
            element.style.display = "none";
        });
    }
}



// Event listener for the "Add Row" button for TableAOS
document.getElementById("add-row-AOS").addEventListener("click", function () {
    const selectedACE = document.getElementById("ACE").value;

    if (selectedACE === "AOS") {
        const table = document.getElementById("AOSTable");
        const newRow = table.insertRow(-1);
        newRow.classList.add("dynamic-row");

        const codeCell = newRow.insertCell(0);
        const subjectTitleCell = newRow.insertCell(1);
        const dayCell = newRow.insertCell(2);
        const timeCell = newRow.insertCell(3);
        const roomCell = newRow.insertCell(4);
        const unitsCell = newRow.insertCell(5);
        const deleteCell = newRow.insertCell(6);

        // Set content and attributes for cells
        codeCell.innerHTML = '<input type="text" name="AOS_code" required>';
        subjectTitleCell.innerHTML = '<input type="text" name="AOS_subjectTitle" required>';
        dayCell.innerHTML = '<input type="text" name="AOS_day" required>';
        timeCell.innerHTML = '<input type="text" name="AOS_time" required>';
        roomCell.innerHTML = '<input type="text" name="AOS_room" required>';
        unitsCell.innerHTML = '<input type="text" name="AOS_units" required>';
        deleteCell.innerHTML = '<button class="delete-row" onclick="deleteRow(this)">Delete Row</button>';
    }
});

// Event listener for the "Add Row" button for COS tables
document.getElementById("add-row-COS").addEventListener("click", function () {
    const selectedACE = document.getElementById("ACE").value;

    if (selectedACE === "COS") {
        // Code to add a row for fromCOS table
        const fromTable = document.getElementById("fromCOSTable");
        const newRowFrom = fromTable.insertRow(-1);
        newRowFrom.classList.add("dynamic-row");

        const codeCellFrom = newRowFrom.insertCell(0);
        const subjectTitleCellFrom = newRowFrom.insertCell(1);
        const dayCellFrom = newRowFrom.insertCell(2);
        const timeCellFrom = newRowFrom.insertCell(3);
        const roomCellFrom = newRowFrom.insertCell(4);
        const unitsCellFrom = newRowFrom.insertCell(5);
        const deleteCellFrom = newRowFrom.insertCell(6);

        // Set content and attributes for cells in fromCOS table
        codeCellFrom.innerHTML = '<input type="text" name="fromCOS_code" required>';
        subjectTitleCellFrom.innerHTML = '<input type="text" name="fromCOS_subjectTitle" required>';
        dayCellFrom.innerHTML = '<input type="text" name="fromCOS_day" required>';
        timeCellFrom.innerHTML = '<input type="text" name="fromCOS_time" required>';
        roomCellFrom.innerHTML = '<input type="text" name="fromCOS_room" required>';
        unitsCellFrom.innerHTML = '<input type="text" name="fromCOS_units" required>';
        deleteCellFrom.innerHTML = '<button class="delete-row2" onclick="deleteRow(this)">Delete Row</button>';

        // Code to add a row for toCOS table
        const toTable = document.getElementById("toCOSTable");
        const newRowTo = toTable.insertRow(-1);
        newRowTo.classList.add("dynamic-row");

        const codeCellTo = newRowTo.insertCell(0);
        const subjectTitleCellTo = newRowTo.insertCell(1);
        const dayCellTo = newRowTo.insertCell(2);
        const timeCellTo = newRowTo.insertCell(3);
        const roomCellTo = newRowTo.insertCell(4);
        const unitsCellTo = newRowTo.insertCell(5);
        const deleteCellTo = newRowTo.insertCell(6);

        // Set content and attributes for cells in toCOS table
        codeCellTo.innerHTML = '<input type="text" name="toCOS_code" required>';
        subjectTitleCellTo.innerHTML = '<input type="text" name="toCOS_subjectTitle" required>';
        dayCellTo.innerHTML = '<input type="text" name="toCOS_day" required>';
        timeCellTo.innerHTML = '<input type="text" name="toCOS_time" required>';
        roomCellTo.innerHTML = '<input type="text" name="toCOS_room" required>';
        unitsCellTo.innerHTML = '<input type="text" name="toCOS_units" required>';
        deleteCellTo.innerHTML = '<button class="delete-row3" onclick="deleteRow(this)">Delete Row</button>';
    }
});


// Event listener for the "Add Row" button for tableW
document.getElementById("add-row-W").addEventListener("click", function () {
    const selectedACE = document.getElementById("ACE").value;

    if (selectedACE === "W") {
        const table = document.getElementById("WTable");
        const newRow = table.insertRow(-1);
        newRow.classList.add("dynamic-row");

        const codeCell = newRow.insertCell(0);
        const subjectTitleCell = newRow.insertCell(1);
        const dayCell = newRow.insertCell(2);
        const timeCell = newRow.insertCell(3);
        const roomCell = newRow.insertCell(4);
        const unitsCell = newRow.insertCell(5);
        const deleteCell = newRow.insertCell(6);

        // Set content and attributes for cells
        codeCell.innerHTML = '<input type="text" name="W_code" required>';
        subjectTitleCell.innerHTML = '<input type="text" name="W_subjectTitle" required>';
        dayCell.innerHTML = '<input type="text" name="W_day" required>';
        timeCell.innerHTML = '<input type="text" name="W_time" required>';
        roomCell.innerHTML = '<input type="text" name="W_room" required>';
        unitsCell.innerHTML = '<input type="text" name="W_units" required>';
        deleteCell.innerHTML = '<button class="delete-row" onclick="deleteRow(this)">Delete Row</button>';
    }
});

// Function to delete a row
function deleteRow(button) {
    const row = button.parentElement.parentElement;
    row.remove(); 
}

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

// Function to validate Student Number format
function validateStudentNumber() {
    var studentNumberInput = document.getElementById("stud_number");
    var studentNumberPattern = /^20\d{2}\s?-\s?\d{5}\s?-\s?[A-Z]{2}\s?-\s?\d{1}$/;

    if (!studentNumberPattern.test(studentNumberInput.value)) {
        alert("Please enter a valid format (Ex. 2023 - ##### - MN - 0)");
        studentNumberInput.value = ""; // Clear the input field
        return false;
    }
    return true;
}

// THIS SECTION IS FOR VALIDATIONS OF THE ENTIRE FORM
// Function to validate Student Name format
function validateStudentName() {
    var studentNameInput = document.getElementById("stud_name");
    var studentNamePattern = /^[A-Za-z\s]+$/;

    if (!studentNamePattern.test(studentNameInput.value)) {
        alert("Please enter a valid format (Ex. Juan Dela Cruz)");
        studentNameInput.value = ""; // Clear the input field
        return false;
    }
    return true;
}

// Function to validate Course/Yr/Section format
function validateCourseSection() {
    var courseSectionInput = document.getElementById("course-section");
    var courseSectionPattern = /^[A-Z]{2,5}\s\d{1,2}-\d{1}[A-Z]{0,1}$/;

    if (!courseSectionPattern.test(courseSectionInput.value)) {
        alert("Please enter a valid format (Ex. BSIT 3-1N)");
        courseSectionInput.value = ""; // Clear the input field
        return false;
    }
    return true;
}

// Function to validate Academic Year format
function validateAcademicYear() {
    var academicYearInput = document.getElementById("academic_year");

    if (academicYearInput.value === "") {
        alert("Please select an Academic Year");
        return false;
    }

    return true;
}

// Function to validate Academic Semester format
function validateAcademicSemester() {
    var academicSemesterInput = document.getElementById("academic_semester");

    if (academicSemesterInput.value === "") {
        alert("Please select an Academic Semester");
        return false;
    }

    return true;
}

// Function to validate the Date field
function validateDate() {
    var dateInput = document.getElementById("date");

    // Check if the value is not an empty string
    if (!dateInput.value) {
        alert("Please select a Date");
        return false;
    }

    return true;
}

// Function to validate the Reason field
function validateReason() {
    var reasonInput = document.getElementById("Reasons");

    if (reasonInput.value.trim().length < 5) {
        alert("Please enter a Reason");
        reasonInput.value = ""; // Clear the input field
        return false;
    }

    return true;
}

// Function to validate TableAOS rows
function validateTableAOS() {
    var table = document.getElementById("AOSTable");
    var rows = table.getElementsByTagName("tr");

    for (var i = 1; i < rows.length; i++) {
        var cells = rows[i].getElementsByTagName("td");

        for (var j = 0; j < cells.length - 1; j++) { // Exclude the last cell with the delete button
            var input = cells[j].getElementsByTagName("input")[0];

            if (input.value.trim() === "") {
                alert("Please fill in all fields in the Adding of Subject/s table");
                return false;
            }
        }
    }

    return true;
}

// Function to validate TableCOS rows
function validateTableCOS() {
    var fromTable = document.getElementById("fromCOSTable");
    var toTable = document.getElementById("toCOSTable");

    var fromRows = fromTable.getElementsByTagName("tr");
    var toRows = toTable.getElementsByTagName("tr");

    for (var i = 1; i < fromRows.length; i++) {
        var fromCells = fromRows[i].getElementsByTagName("td");
        var toCells = toRows[i].getElementsByTagName("td");

        // Validate From table
        for (var j = 0; j < fromCells.length - 1; j++) {
            var fromInput = fromCells[j].getElementsByTagName("input")[0];

            if (fromInput.value.trim() === "") {
                alert("Please fill in all fields in the From COS table");
                return false;
            }
        }

        // Validate To table
        for (var k = 0; k < toCells.length - 1; k++) {
            var toInput = toCells[k].getElementsByTagName("input")[0];

            if (toInput.value.trim() === "") {
                alert("Please fill in all fields in the To COS table");
                return false;
            }
        }
    }

    return true;
}


// Function to validate TableW rows
function validateTableW() {
    var table = document.getElementById("WTable");
    var rows = table.getElementsByTagName("tr");

    for (var i = 1; i < rows.length; i++) {
        var cells = rows[i].getElementsByTagName("td");
        
        for (var j = 0; j < cells.length - 1; j++) { // Exclude the last cell with the delete button
            var input = cells[j].getElementsByTagName("input")[0];
            if (input.value.trim() === "") {
                alert("Please fill in all fields in the Withdrawal table");
                return false;
            }
        }
    }

    return true;
}

// Function to validate Units field
function validateNumberField(fieldId, fieldName) {
    var field = document.getElementById(fieldId);
    var fieldValue = field.value.trim();
    var numericPattern = /^\d+$/;

    if (!numericPattern.test(fieldValue) || parseInt(fieldValue) < 0) {
        alert("Please enter a postive number for " + fieldName);
        field.value = ""; // Clear the input field
        return false;
    }

    return true;
}

// Function to validate all input formats before submitting the form
function validateForm(event) {
    console.log("Inside validateForm");
    var isStudentNumberValid = validateStudentNumber();
    var isStudentNameValid = validateStudentName();
    var isCourseSectionValid = validateCourseSection();
    var isAcademicYearValid = validateAcademicYear();
    var isAcademicSemesterValid = validateAcademicSemester();
    var isDateValid = validateDate();
    var isReasonValid = validateReason();
    var isNumberOfUnitsValid = validateNumberField("number-of-units", "Number of Units (Registration Certificate)");
    var isNumberOfUnitsAddedValid = validateNumberField("number-of-units-added", "Number of Units to be Added");
    var isTotalUnitsValid = validateNumberField("total-units", "Total Number of Units Enrolled");

    var selectedACE = document.getElementById("ACE").value;

    // Additional check for the presence of values in required fields
    if (selectedACE === "AOS") {
        var isTableAOSValid = validateTableAOS();
        if (!isStudentNumberValid || !isStudentNameValid || !isCourseSectionValid ||
            !isAcademicYearValid || !isAcademicSemesterValid || !isDateValid || !isReasonValid ||
            !isNumberOfUnitsValid || !isNumberOfUnitsAddedValid || !isTotalUnitsValid || !isTableAOSValid) {
            console.log("Validation failed");
            if (event) event.preventDefault(); // Prevent form submission if validation fails
            return false;
        }
    } else if (selectedACE === "COS") {
        var isTableCOSValid = validateTableCOS();
        if (!isStudentNumberValid || !isStudentNameValid || !isCourseSectionValid ||
            !isAcademicYearValid || !isAcademicSemesterValid || !isDateValid || !isReasonValid ||
            !isNumberOfUnitsValid || !isNumberOfUnitsAddedValid || !isTotalUnitsValid || !validateTableCOS()) {
            console.log("Validation failed");
            if (event) event.preventDefault(); // Prevent form submission if validation fails
            return false;
        }        
    } else if (selectedACE === "W") {
        var isTableWValid = validateTableW();
        if (!isStudentNumberValid || !isStudentNameValid || !isCourseSectionValid ||
            !isAcademicYearValid || !isAcademicSemesterValid || !isDateValid || !isReasonValid ||
            !isNumberOfUnitsValid || !isNumberOfUnitsAddedValid || !isTotalUnitsValid || !isTableWValid) {
            console.log("Validation failed");
            if (event) event.preventDefault(); // Prevent form submission if validation fails
            return false;
        }
    } else {
        if (!isStudentNumberValid || !isStudentNameValid || !isCourseSectionValid ||
            !isAcademicYearValid || !isAcademicSemesterValid || !isDateValid || !isReasonValid ||
            !isNumberOfUnitsValid || !isNumberOfUnitsAddedValid || !isTotalUnitsValid) {
            console.log("Validation failed");
            if (event) event.preventDefault(); // Prevent form submission if validation fails
            return false;
        }
    }

    // Populate the hidden input field with the table data
    var tableData = getTableData();
    document.getElementById("tableData").value = JSON.stringify(tableData);

    console.log("Validation successful");
    return true;
}

// Function to get table data from the dynamically added rows
function getTableData() {
    var selectedACE = document.getElementById("ACE").value;
    var tableData = [];

    if (selectedACE === "AOS" || selectedACE === "COS" || selectedACE === "W") {
        var tableId = selectedACE + "Table";
        var table = document.getElementById(tableId);
        var rows = table.getElementsByTagName("tr");

        for (var i = 1; i < rows.length; i++) {
            // Check if the row has the class indicating it's dynamically added
            if (rows[i].classList.contains("dynamic-row")) {
                var cells = rows[i].getElementsByTagName("td");
                var rowData = {};

                for (var j = 0; j < cells.length - 1; j++) {
                    var input = cells[j].getElementsByTagName("input")[0];
                    rowData[input.name] = input.value.trim();
                }

                tableData.push(rowData);
            }
        }
    }

    return tableData;
}


// Add event listeners to call validation functions on relevant events
document.getElementById("stud_number").addEventListener("blur", validateStudentNumber);
document.getElementById("stud_name").addEventListener("blur", validateStudentName);
document.getElementById("course-section").addEventListener("blur", validateCourseSection);
document.getElementById("academic_year").addEventListener("change", validateAcademicYear);
document.getElementById("academic_semester").addEventListener("change", validateAcademicSemester);
document.getElementById("date").addEventListener("blur", validateDate);
document.getElementById("Reasons").addEventListener("blur", validateReason);

document.getElementById("number-of-units").addEventListener("input", function () {
    validateNumberField("number-of-units", "Number of Units (Registration Certificate)");
});
document.getElementById("number-of-units-added").addEventListener("input", function () {
    validateNumberField("number-of-units-added", "Number of Units to be Added");
});
document.getElementById("total-units").addEventListener("input", function () {
    validateNumberField("total-units", "Total Number of Units Enrolled");
});

// Add event listener to the submit button
if (submitButton) {
    submitButton.addEventListener("click", function (event) {
        console.log("Submit button clicked");
        if (!validateForm(event)) {
            event.preventDefault(); // Prevent form submission if validation fails
        } else {
            console.log("Submission successful");
            alert("Submission successful! Please Check your PUP Webmail for Updates"); // Show alert for successful submission
        }
    });
}