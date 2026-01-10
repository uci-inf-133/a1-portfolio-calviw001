let darkModeButton = document.getElementById('darkModeButton');

const toggleDarkMode = () => {
    let body = document.querySelector('body');
    let darkmode = localStorage.getItem('dark-mode');

    if (darkmode === 'on') {
        body.classList.remove('dark-mode')
        localStorage.setItem('dark-mode', 'off')
    }
    else {
        body.classList.add('dark-mode')
        localStorage.setItem('dark-mode', 'on')
    }
};

darkModeButton.addEventListener('click', toggleDarkMode);

const toggleDarkModeOnLoad = () => {
    let body = document.querySelector('body');
    let darkmode = localStorage.getItem('dark-mode');
    
    darkmode === 'on' ? body.classList.add('dark-mode') : body.classList.remove('dark-mode')
};

document.addEventListener('DOMContentLoaded', toggleDarkModeOnLoad)