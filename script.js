
function loadPhoto(event) {
    const photo = document.getElementById('photo').files[0];
    const reader = new FileReader();

    reader.onload = function() {
        const imgElement = document.createElement('img');
        imgElement.id = 'resume-photo';
        imgElement.src = reader.result;

        const previewContainer = document.getElementById('resume-preview');
        const existingPhoto = document.getElementById('resume-photo');

        if (existingPhoto) {
            existingPhoto.src = reader.result;
        } else {
            previewContainer.insertBefore(imgElement, previewContainer.firstChild);
        }
    }

    if (photo) {
        reader.readAsDataURL(photo);
    }
}

function generateResume() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value;

    const resumeContent = `
        <h2>${name}</h2>
        <p>${email} | ${phone}</p>
        <h3>Education</h3>
        <p>${education.replace(/\n/g, '<br>')}</p>
        <h3>Experience</h3>
        <p>${experience.replace(/\n/g, '<br>')}</p>
        <h3>Skills</h3>
        <p>${skills.replace(/\n/g, '<br>')}</p>
    `;

    document.getElementById('resume-preview').innerHTML = resumeContent;

    loadPhoto();
}
