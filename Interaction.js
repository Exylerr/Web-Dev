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
    var tablefromCOS = document.getElementById("contentCOS");
    var tabletoCOS = document.getElementById("contentCOS");
    var tableW = document.getElementById("contentW");
    var alignment = document.getElementById("alignment");

    // Disable all table forms by default
    [tableAOS, tablefromCOS, tabletoCOS, tableW].forEach(table => {
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
            tablefromCOS.style.display = "block";
            tabletoCOS.style.display = "block";
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

// Event listener for the "Add Row" button for fromCOSTable
document.getElementById("add-row-from").addEventListener("click", function () {
    const selectedACE = document.getElementById("ACE").value;

    if (selectedACE === "COS") {
        const table = document.getElementById("fromCOSTable");
        const newRow = table.insertRow(-1);

        const codeCell = newRow.insertCell(0);
        const subjectTitleCell = newRow.insertCell(1);
        const dayCell = newRow.insertCell(2);
        const timeCell = newRow.insertCell(3);
        const roomCell = newRow.insertCell(4);
        const unitsCell = newRow.insertCell(5);
        const deleteCell = newRow.insertCell(6);

        // Set content and attributes for cells
        codeCell.innerHTML = '<input type="text" name="fromCos_code" required>';
        subjectTitleCell.innerHTML = '<input type="text" name="fromCos_subjectTitle" required>';
        dayCell.innerHTML = '<input type="text" name="fromCos_day" required>';
        timeCell.innerHTML = '<input type="text" name="fromCos_time" required>';
        roomCell.innerHTML = '<input type="text" name="fromCos_room" required>';
        unitsCell.innerHTML = '<input type="text" name="fromCos_units" required>';
        deleteCell.innerHTML = '<button class="delete-row" onclick="deleteRow(this)">Delete Row</button>';
    }
});
// Event listener for the "Add Row" button for toCOSTable
document.getElementById("add-row-to").addEventListener("click", function () {
    const selectedACE = document.getElementById("ACE").value;

    if (selectedACE === "COS") {
        const table = document.getElementById("toCOSTable");
        const newRow = table.insertRow(-1);

        const codeCell = newRow.insertCell(0);
        const subjectTitleCell = newRow.insertCell(1);
        const dayCell = newRow.insertCell(2);
        const timeCell = newRow.insertCell(3);
        const roomCell = newRow.insertCell(4);
        const unitsCell = newRow.insertCell(5);
        const deleteCell = newRow.insertCell(6);

        // Set content and attributes for cells
        codeCell.innerHTML = '<input type="text" name="toCos_code" required>';
        subjectTitleCell.innerHTML = '<input type="text" name="toCos_subjectTitle" required>';
        dayCell.innerHTML = '<input type="text" name="toCos_day" required>';
        timeCell.innerHTML = '<input type="text" name="toCos_time" required>';
        roomCell.innerHTML = '<input type="text" name="toCos_room" required>';
        unitsCell.innerHTML = '<input type="text" name="toCos_units" required>';
        deleteCell.innerHTML = '<button class="delete-row" onclick="deleteRow(this)">Delete Row</button>';
    }
});

// Event listener for the "Add Row" button for tableW
document.getElementById("add-row-W").addEventListener("click", function () {
    const selectedACE = document.getElementById("ACE").value;

    if (selectedACE === "W") {
        const table = document.getElementById("WTable");
        const newRow = table.insertRow(-1);

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

// Function to validate TablefromCOS rows
function validateTablefromCOS() {
    var fromTable = document.getElementById("fromCOSTable");
    var toTable = document.getElementById("toCOSTable"); // Added line to get the "toCOSTable" table

    var fromRows = fromTable.getElementsByTagName("tr");
    var toRows = toTable.getElementsByTagName("tr");

    for (var i = 1; i < fromRows.length; i++) {
        var fromCells = fromRows[i].getElementsByTagName("td");
        var toCells = toRows[i].getElementsByTagName("td");

        for (var j = 0; j < fromCells.length - 1; j++) { // Exclude the last cell with the delete button
            var fromInput = fromCells[j].getElementsByTagName("input")[0];
            var toInput = toCells[j].getElementsByTagName("input")[0];

            if (fromInput.value.trim() === "" || toInput.value.trim() === "") {
                alert("Please fill in all fields in the Change of Subject table");
                return false;
            }
        }
    }

    return true;
}

// Function to validate TabletoCOS rows
function validateTabletoCOS() {
    var toTable = document.getElementById("toCOSTable");
    var fromTable = document.getElementById("fromCOSTable"); // Added line to get the "fromCOSTable" table

    var fromRows = fromTable.getElementsByTagName("tr");
    var toRows = toTable.getElementsByTagName("tr");

    for (var i = 1; i < fromRows.length; i++) {
        var fromCells = fromRows[i].getElementsByTagName("td");
        var toCells = toRows[i].getElementsByTagName("td");

        for (var j = 0; j < fromCells.length - 1; j++) { // Exclude the last cell with the delete button
            var fromInput = fromCells[j].getElementsByTagName("input")[0];
            var toInput = toCells[j].getElementsByTagName("input")[0];

            if (fromInput.value.trim() === "" || toInput.value.trim() === "") {
                alert("Please fill in all fields in the Change of Subject table");
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
        var isTablefromCOSValid = validateTablefromCOS();
        if (!isStudentNumberValid || !isStudentNameValid || !isCourseSectionValid ||
            !isAcademicYearValid || !isAcademicSemesterValid || !isDateValid || !isReasonValid ||
            !isNumberOfUnitsValid || !isNumberOfUnitsAddedValid || !isTotalUnitsValid || !isTablefromCOSValid) {
            console.log("Validation failed");
            if (event) event.preventDefault(); // Prevent form submission if validation fails
            return false;
        }
    } else if (selectedACE === "COS") {
        var isTabletoCOSValid = validateTabletoCOS();
        if (!isStudentNumberValid || !isStudentNameValid || !isCourseSectionValid ||
            !isAcademicYearValid || !isAcademicSemesterValid || !isDateValid || !isReasonValid ||
            !isNumberOfUnitsValid || !isNumberOfUnitsAddedValid || !isTotalUnitsValid || !isTabletoCOSValid) {
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
            var cells = rows[i].getElementsByTagName("td");
            var rowData = {};

            for (var j = 0; j < cells.length - 1; j++) {
                var input = cells[j].getElementsByTagName("input")[0];
                rowData[input.name] = input.value.trim();
            }

            tableData.push(rowData);
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
            // You can perform any other actions here if needed
        }
    });
}
