// Get references to the form and display area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
var shareableLinkContainer = document.getElementById('shareable-link-container');
var shareableLinkElement = document.getElementById('shareable-link');
var downloadPdfButton = document.getElementById('download-pdf');
// Handle form submission
form.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault(); // prevent page reload
    // Collect input values
    var username = document.getElementById('username').value;
    var name = document.getElementById('name').value;
    var fatherName = document.getElementById('fathername').value;
    var email = document.getElementById('email').value;
    var gender = (_a = document.querySelector('input[name="gender"]:checked')) === null || _a === void 0 ? void 0 : _a.value;
    var nationality = document.getElementById('nationality').value;
    var phone = document.getElementById('tel').value;
    var dob = document.getElementById('dob').value;
    // Education data
    var degree = document.getElementById('degree').value;
    var institute = document.getElementById('institute').value;
    var grade = document.getElementById('grade').value;
    // Skills data
    var skills = document.getElementById('skills').value;
    var computerSkills = document.getElementById('computerSkills').value;
    // Experience data
    var experience = document.getElementById('experience').value;
    var company = document.getElementById('company').value;
    // Save form data in localStorage with the username as the key
    var resumeData = {
        name: name,
        fatherName: fatherName,
        email: email,
        gender: gender,
        nationality: nationality,
        phone: phone,
        dob: dob,
        degree: degree,
        institute: institute,
        grade: grade,
        skills: skills,
        computerSkills: computerSkills,
        experience: experience,
        company: company
    };
    localStorage.setItem(username, JSON.stringify(resumeData)); // Saving the data locally
    // Generate the resume content dynamically
    var resumeHTML = "\n<h3>Personal Information</h3>\n<p><b>Name:</b> <span contenteditable=\"true\"> ".concat(name, "</span></p>\n<p><b>Father's Name:</b> <span contenteditable=\"true\"> ").concat(fatherName, "</span></p>\n<p><b>Email:</b> <span contenteditable=\"true\"> ").concat(email, "</span></p>\n<p><b>Gender:</b> <span contenteditable=\"true\"> ").concat(gender, "</span></p>\n<p><b>Nationality:</b> <span contenteditable=\"true\"> ").concat(nationality, "</span></p>\n<p><b>Phone:</b> <span contenteditable=\"true\">").concat(phone, "</span></p>\n<p><b>Date of Birth:</b> <span contenteditable=\"true\">").concat(dob, "</span></p>\n\n<h3>Education</h3>\n<p contenteditable=\"true\"><b>Degree:</b> ").concat(degree, "</p>\n<p contenteditable=\"true\"><b>Institute:</b> ").concat(institute, "</p>\n<p contenteditable=\"true\"><b>Grade:</b> ").concat(grade, "</p>\n\n<h3>Skills</h3>\n<p contenteditable=\"true\"><b>Skills:</b> ").concat(skills, "</p>\n<p contenteditable=\"true\"><b>Computer Skills:</b> ").concat(computerSkills, "</p>\n\n<h3>Experience</h3>\n<p  contenteditable=\"true\"><b>Experience:</b> ").concat(experience, "</p>\n<p  contenteditable=\"true\"><b>Company:</b> ").concat(company, "</p>\n");
    // Display the generated resume
    resumeDisplayElement.innerHTML = resumeHTML;
    // Generate a shareable URL with the username only
    var shareableURL = " ".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
    // Display the shareable link
    shareableLinkContainer.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
    form.style.display = 'none'; // Hide the form
    resumeDisplayElement.style.display = 'block'; // Ensure the resume is visible
});
// Handle PDF download
downloadPdfButton.addEventListener('click', function () {
    // Hide the download PDF button before printing
    downloadPdfButton.style.display = 'none';
    // Print the page (this will trigger the print dialog and allow the user to save as PDF)
    window.print();
    // Optionally, re-enable the PDF button after printing (if needed)
    downloadPdfButton.style.display = 'block';
});
// Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
    if (username) {
        // Autofill form if data is found in localStorage
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById('username').value = username;
            document.getElementById('name').value = resumeData.name;
            document.getElementById('fathername').value = resumeData.fatherName;
            document.getElementById('email').value = resumeData.email;
            document.getElementById('gender').value = resumeData.gender;
            document.getElementById('nationality').value = resumeData.nationality;
            document.getElementById('phone').value = resumeData.phone;
            document.getElementById('dob').value = resumeData.dob;
            // Education data
            document.getElementById('degree').value = resumeData.degree;
            document.getElementById('institute').value = resumeData.institute;
            document.getElementById('grade').value = resumeData.grade;
            // Skill data
            document.getElementById('skills').value = resumeData.skills;
            document.getElementById('computerskills').value = resumeData.computerSkills;
            // Experience data
            document.getElementById('experience').value = resumeData.experience;
            document.getElementById('company').value = resumeData.company;
        }
    }
});
