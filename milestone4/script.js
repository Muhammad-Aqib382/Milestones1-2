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
    var resumeContent = "<h3>Personal Information</h3>\n        <p><b>Name:</b> ".concat(name, "</p>\n        <p><b>Father's Name:</b><span contenteditable=\"true\"> ").concat(fatherName, "</span></p>\n        <p><b>Email:</b><span contenteditable=\"true\"> ").concat(email, "</span></p>\n        <p><b>Gender:</b><span contenteditable=\"true\"> ").concat(gender, "</span></p>\n        <p><b>Nationality:</b><span contenteditable=\"true\"> ").concat(nationality, "</span></p>\n        <p><b>Phone:</b><span contenteditable=\"true\"> ").concat(phone, "</span></p>\n        <p><b>Date of Birth:</b><span contenteditable=\"true\"> ").concat(dob, "</span></p>\n\n        <h3>Education</h3>\n        <p  contenteditable=\"true\"><b>Degree</b>: ").concat(degree, "</p>\n        <p  contenteditable=\"true\"><b>Institute</b>: ").concat(institute, "</p>\n        <p  contenteditable=\"true\"><b>Grade:</b> ").concat(grade, "</p>\n\n        <h3>Skills</h3>\n        <p  contenteditable=\"true\"><b>Skills:</b> ").concat(skills, "</p>\n        <p  contenteditable=\"true\"><b>Computer Skills:</b> ").concat(computerSkills, "</p>\n\n        <h3>Experience</h3>\n        <p  contenteditable=\"true\"><b>Experience:</b> ").concat(experience, "</p>\n        <p  contenteditable=\"true\"><b>Company:</b> ").concat(company, "</p>\n    ");
    // Displaying the dynamic resume in the resume-display div
    var resumeDisplay = document.getElementById('resume-display');
    resumeDisplay.innerHTML = resumeContent;
});
