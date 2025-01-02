document.getElementById('resume-form').addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    // Collecting form data
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
    // Generating the dynamic resume
    var resumeContent = "<h2><b>Dynamic Resume</b></h2>\n         <h3>Personal Information</h3>\n        <p><b>Name:</b> ".concat(name, "</p>\n        <p><b>Father's Name:</b> ").concat(fatherName, "</p>\n        <p><b>Email:</b> ").concat(email, "</p>\n        <p><b>Gender:</b> ").concat(gender, "</p>\n        <p><b>Nationality:</b> ").concat(nationality, "</p>\n        <p><b>Phone:</b> ").concat(phone, "</p>\n        <p><b>Date of Birth:</b> ").concat(dob, "</p>\n\n        <h3>Education</h3>\n        <p><b>Degree</b>: ").concat(degree, "</p>\n        <p><b>Institute</b>: ").concat(institute, "</p>\n        <p><b>Grade:</b> ").concat(grade, "</p>\n\n        <h3>Skills</h3>\n        <p><b>Skills:</b> ").concat(skills, "</p>\n        <p><b>Computer Skills:</b> ").concat(computerSkills, "</p>\n\n        <h3>Experience</h3>\n        <p><b>Experience:</b> ").concat(experience, "</p>\n        <p><b>Company:</b> ").concat(company, "</p>\n    ");
    // Displaying the dynamic resume in the resume-display div
    var resumeDisplay = document.getElementById('resume-display');
    resumeDisplay.innerHTML = resumeContent;
});
