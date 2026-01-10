let darkModeButton = document.getElementById("darkModeButton");

const toggleDarkMode = () => {
    let body = document.querySelector('body');
    body.classList.toggle("dark-mode");
}

darkModeButton.addEventListener('click', toggleDarkMode);