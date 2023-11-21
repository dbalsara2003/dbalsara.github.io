// theme-switch.js
document.addEventListener('DOMContentLoaded', function () {
    // Check the initial theme preference
    if (localStorage.getItem('theme') === 'dark') {
        setDarkTheme();
        document.getElementById('theme-toggle').checked = true;
    } else {
        setLightTheme();
    }

    // Toggle the theme on checkbox change
    document.getElementById('theme-toggle').addEventListener('change', function () {
        if (this.checked) {
            setDarkTheme();
            localStorage.setItem('theme', 'dark');
        } else {
            setLightTheme();
            localStorage.setItem('theme', 'light');
        }
    });

    function setDarkTheme() {
        document.getElementById('light-theme').disabled = true;
        document.getElementById('dark-theme').disabled = false;
        document.getElementById('theme-icon').innerHTML = '<i class="fas fa-moon"></i>';
    }

    function setLightTheme() {
        document.getElementById('light-theme').disabled = false;
        document.getElementById('dark-theme').disabled = true;
        document.getElementById('theme-icon').innerHTML = '<i class="fas fa-sun"></i>';
    }
});

