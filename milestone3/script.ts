document.getElementById('resume-form')!.addEventListener('submit', function(event) {
    event.preventDefault();

    // Collecting form data
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const fatherName = (document.getElementById('fathername') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const gender = (document.querySelector('input[name="gender"]:checked') as HTMLInputElement)?.value;
    const nationality = (document.getElementById('nationality') as HTMLInputElement).value;
    const phone = (document.getElementById('tel') as HTMLInputElement).value;
    const dob = (document.getElementById('dob') as HTMLInputElement).value;

    // Education data
    const degree = (document.getElementById('degree') as HTMLInputElement).value;
    const institute = (document.getElementById('institute') as HTMLInputElement).value;
    const grade = (document.getElementById('grade') as HTMLInputElement).value;

    // Skills data
    const skills = (document.getElementById('skills') as HTMLInputElement).value;
    const computerSkills = (document.getElementById('computerSkills') as HTMLInputElement).value;

    // Experience data
    const experience = (document.getElementById('experience') as HTMLInputElement).value;
    const company = (document.getElementById('company') as HTMLInputElement).value;

    // Generating the dynamic resume
    const resumeContent = 
        `<h2><b>Dynamic Resume</b></h2>
         <h3>Personal Information</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Father's Name:</b> ${fatherName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Gender:</b> ${gender}</p>
        <p><b>Nationality:</b> ${nationality}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Date of Birth:</b> ${dob}</p>

        <h3>Education</h3>
        <p><b>Degree</b>: ${degree}</p>
        <p><b>Institute</b>: ${institute}</p>
        <p><b>Grade:</b> ${grade}</p>

        <h3>Skills</h3>
        <p><b>Skills:</b> ${skills}</p>
        <p><b>Computer Skills:</b> ${computerSkills}</p>

        <h3>Experience</h3>
        <p><b>Experience:</b> ${experience}</p>
        <p><b>Company:</b> ${company}</p>
    `;

    // Displaying the dynamic resume in the resume-display div
    const resumeDisplay = document.getElementById('resume-display')!;
    resumeDisplay.innerHTML = resumeContent;
});
