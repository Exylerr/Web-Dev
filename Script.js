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

/*Script for Table1*/
const addRowButton = document.getElementById("add-row");
addRowButton.addEventListener("click", function() {
    const table = document.getElementById("myTable");
    const newRow = table.insertRow(-1);
    const cells = [];

    for (let i = 0; i < 6; i++) {
        cells.push(newRow.insertCell(i));
        cells[i].contentEditable = true;

        if (i === 0) {
            cells[i].addEventListener("input", function() {
                if (cells[i].textContent.length > 10) {
                    cells[i].textContent = cells[i].textContent.slice(0, 10);
                }
            });
        }
    }
});

/*Script for Table2*/
const addRowButton2 = document.getElementById("add-row2");
addRowButton2.addEventListener("click", function() {
    const toTable = document.getElementById("toTable");
    const newRow = toTable.insertRow(-1);
    const cells = [];

    for (let i = 0; i < 6; i++) {
        cells.push(newRow.insertCell(i));
        cells[i].contentEditable = true;

        if (i === 0) {
            cells[i].addEventListener("input", function() {
                if (cells[i].textContent.length > 10) {
                    cells[i].textContent = cells[i].textContent.slice(0, 10);
                }
            });
        }
    }
});