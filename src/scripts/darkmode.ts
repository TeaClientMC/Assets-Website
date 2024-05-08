document.addEventListener("DOMContentLoaded", () => {
	const themeToggle = document.getElementById(
		"theme-toggle",
	) as HTMLButtonElement;

	// Function to update the button text based on the current theme
	function updateButtonText() {
		const isDarkMode = document.body.classList.contains("dark");
		themeToggle.textContent = isDarkMode ? "Light" : "Dark";
	}

	// Check localStorage for a saved theme preference and apply it
	const savedTheme = localStorage.getItem("theme");
	if (savedTheme) {
		document.body.classList.add(savedTheme);
		document.body.setAttribute("data-mode", savedTheme);
		updateButtonText();
	}

	themeToggle.addEventListener("click", () => {
		// Toggle the 'dark' class on the body element
		const isDarkMode = document.body.classList.toggle("dark");

		// Set the 'data-mode' attribute based on the current mode
		if (isDarkMode) {
			document.body.setAttribute("data-mode", "dark");
			// Save the dark mode preference to localStorage
			localStorage.setItem("theme", "dark");
		} else {
			document.body.setAttribute("data-mode", "light");
			// Save the light mode preference to localStorage
			localStorage.setItem("theme", "light");
		}

		// Update the button text after toggling the theme
		updateButtonText();
	});
});
