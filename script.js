function previewImage(input) {
    var preview = document.querySelector('.image-preview');
    var file = input.files[0];
    var reader = new FileReader();

    reader.onload = function (e) {
        preview.src = e.target.result;
    };

    if (file) {
        reader.readAsDataURL(file);
    }
}

function saveFormData() {
    var companyName = document.querySelector('input[placeholder="Compnay Name"]').value;
    var companyMail = document.querySelector('input[placeholder="Company Mail"]').value;
    var companyWebsite = document.querySelector('input[placeholder="https://"]').value;
    var companyAddress = document.querySelector('input[placeholder="Compnay Address"]').value;
    var country = document.querySelector('.select-box select').value;
    var description = document.querySelector('textarea[name="description"]').value;


    console.log('Company Name:', companyName);
    console.log('Company Mail:', companyMail);
    console.log('Company Website:', companyWebsite);
    console.log('Company Address:', companyAddress);
    console.log('Country:', country);
    console.log('Description:', description);
}


document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('saveButton').addEventListener('click', function (event) {
        event.preventDefault();
        saveFormData();
    });
});
