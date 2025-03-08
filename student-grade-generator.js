// student-grade-generator.js
function generateGrade() {
    const marks = prompt("Enter the student's marks (0-100):");

    if (marks > 79) {
        console.log("A");
    } else if (marks >= 60 && marks <= 79) {
        console.log("B");
    } else if (marks >= 49 && marks < 60) {
        console.log("C");
    } else if (marks >= 40 && marks < 49) {
        console.log("D");
    } else if (marks >= 0 && marks < 40) {
        console.log("E");
    }
}

generateGrade(55); // Replace with your input values