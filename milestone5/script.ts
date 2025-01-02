// Get references to the form and display area
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

const shareableLinkContainer = document.getElementById('shareable-link-container') as HTMLDivElement;

const shareableLinkElement = document.getElementById('shareable-link') as HTMLAnchorElement;
const downloadPdfButton = document.getElementById('download-pdf') as HTMLButtonElement;

// Handle form submission
form.addEventListener('submit', (event: Event) => {
event.preventDefault(); // prevent page reload

// Collect input values
const username = (document.getElementById('username') as HTMLInputElement).value;
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

// Save form data in localStorage with the username as the key
const resumeData = {
name,
fatherName,
email,
gender,
nationality,
phone,
dob,
degree,
institute,
grade,
skills,
computerSkills,
experience,
company
};
localStorage.setItem(username, JSON.stringify(resumeData)); // Saving the data locally
// Generate the resume content dynamically

const resumeHTML = `
<h3>Personal Information</h3>
<p><b>Name:</b> <span contenteditable="true"> ${name}</span></p>
<p><b>Father's Name:</b> <span contenteditable="true"> ${fatherName}</span></p>
<p><b>Email:</b> <span contenteditable="true"> ${email}</span></p>
<p><b>Gender:</b> <span contenteditable="true"> ${gender}</span></p>
<p><b>Nationality:</b> <span contenteditable="true"> ${nationality}</span></p>
<p><b>Phone:</b> <span contenteditable="true">${phone}</span></p>
<p><b>Date of Birth:</b> <span contenteditable="true">${dob}</span></p>

<h3>Education</h3>
<p contenteditable="true"><b>Degree:</b> ${degree}</p>
<p contenteditable="true"><b>Institute:</b> ${institute}</p>
<p contenteditable="true"><b>Grade:</b> ${grade}</p>

<h3>Skills</h3>
<p contenteditable="true"><b>Skills:</b> ${skills}</p>
<p contenteditable="true"><b>Computer Skills:</b> ${computerSkills}</p>

<h3>Experience</h3>
<p  contenteditable="true"><b>Experience:</b> ${experience}</p>
<p  contenteditable="true"><b>Company:</b> ${company}</p>
`;
// Display the generated resume
resumeDisplayElement.innerHTML = resumeHTML;
// Generate a shareable URL with the username only
const shareableURL = ` ${window.location.origin}?username=${encodeURIComponent(username)}`;

// Display the shareable link
shareableLinkContainer.style.display = 'block';
shareableLinkElement.href = shareableURL;
shareableLinkElement.textContent = shareableURL;

form.style.display = 'none';  // Hide the form
resumeDisplayElement.style.display = 'block';  // Ensure the resume is visible
});

// Handle PDF download
downloadPdfButton.addEventListener('click', () => {
    // Hide the download PDF button before printing
    downloadPdfButton.style.display = 'none';
  
    // Print the page (this will trigger the print dialog and allow the user to save as PDF)
    window.print();
  
    // Optionally, re-enable the PDF button after printing (if needed)
    downloadPdfButton.style.display = 'block';
  });

// Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', () => {
const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('username');
if (username) {

// Autofill form if data is found in localStorage
const savedResumeData = localStorage.getItem(username);
if (savedResumeData) {
const resumeData = JSON.parse(savedResumeData);
(document.getElementById('username') as HTMLInputElement).value = username;
(document.getElementById('name') as HTMLInputElement).value = resumeData.name;
(document.getElementById('fathername') as HTMLInputElement).value = resumeData.fatherName;
(document.getElementById('email') as HTMLInputElement).value = resumeData.email;
(document.getElementById('gender') as HTMLInputElement).value = resumeData.gender;
(document.getElementById('nationality') as HTMLInputElement).value = resumeData.nationality;
(document.getElementById('phone') as HTMLInputElement).value = resumeData.phone;
(document.getElementById('dob') as HTMLInputElement).value = resumeData.dob;

// Education data
(document.getElementById('degree') as HTMLTextAreaElement).value = resumeData.degree;
(document.getElementById('institute') as HTMLTextAreaElement).value = resumeData.institute;
(document.getElementById('grade') as HTMLTextAreaElement).value = resumeData.grade;

// Skill data
(document.getElementById('skills') as HTMLTextAreaElement).value = resumeData.skills;
(document.getElementById('computerskills') as HTMLTextAreaElement).value = resumeData.computerSkills;

// Experience data
(document.getElementById('experience') as HTMLTextAreaElement).value = resumeData.experience;
(document.getElementById('company') as HTMLTextAreaElement).value = resumeData.company;
}
}
});