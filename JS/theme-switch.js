// theme-switch.js
document.addEventListener('DOMContentLoaded', function () {
    // Check the initial theme preference
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('bg-dark', 'text-white');
        document.getElementById('theme-toggle').checked = true;
    }

    // Toggle the theme on checkbox change
    document.getElementById('theme-toggle').addEventListener('change', function () {
        if (this.checked) {
            document.body.classList.add('bg-dark', 'text-white');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('bg-dark', 'text-white');
            localStorage.setItem('theme', 'light');
        }
    });
});

