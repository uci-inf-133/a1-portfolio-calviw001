let darkModeButton = document.getElementById("darkModeButton");

const toggleDarkMode = () => {
    // Debug 1: Is button click registering?
    console.log("✅ Button clicked!");
    let body = document.querySelector('body');
    body.classList.toggle("dark-mode");
    // Debug: Check if class is being added
    console.log("Body classes:", body.classList);
    console.log("Has dark-mode?", body.classList.contains("dark-mode"));
}

darkModeButton.addEventListener('click', toggleDarkMode);