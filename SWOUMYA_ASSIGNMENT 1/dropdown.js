
document.addEventListener('DOMContentLoaded', function() {
    var dropdown = document.querySelector('.dropdown');
    var dropdownContent = dropdown.querySelector('.dropdown-content');

    dropdown.addEventListener('click', function() {
        dropdownContent.classList.toggle('show');
    });
});

