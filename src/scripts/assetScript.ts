// Function to toggle the display of elements
function toggleDisplay(element: HTMLElement, show: boolean): void {
	element.style.display = show ? "block" : "none";
}

// Function to handle the copy button click
function handleCopyButtonClick(
	copyButton: HTMLButtonElement,
	urlToCopy: HTMLInputElement,
	copyInfo: HTMLElement,
): void {
	urlToCopy.select();
	urlToCopy.setSelectionRange(0, 99999); // For mobile devices

	navigator.clipboard
		.writeText(urlToCopy.value)
		.then(() => {
			copyButton.textContent = "Copied";
			copyInfo.classList.add("bg-indigo-500");

			setTimeout(() => {
				copyButton.textContent = "Copy URL";
				copyInfo.classList.remove("bg-indigo-500");
			}, 2000); // 2000 milliseconds = 2 seconds
		})
		.catch((err) => {
			console.error("Failed to copy text: ", err);
		});
}

document.addEventListener("DOMContentLoaded", () => {
	const toggleButtons = document.querySelectorAll(
		".toggleModified",
	) as NodeListOf<HTMLButtonElement>;
	const modifyInfos = document.querySelectorAll(
		".modify-info",
	) as NodeListOf<HTMLDivElement>;
	const copyInfos = document.querySelectorAll(
		".copy-info",
	) as NodeListOf<HTMLDivElement>;
	const copyButtons = document.querySelectorAll(
		"#copyButton",
	) as NodeListOf<HTMLButtonElement>;
	const urlToCopies = document.querySelectorAll(
		"#urlToCopy",
	) as NodeListOf<HTMLInputElement>;

	if (copyButtons.length !== urlToCopies.length) {
		console.error("Mismatch in the number of copy buttons and input fields");
		return;
	}

	toggleButtons.forEach((toggleButton, index) => {
		toggleButton.addEventListener("click", () => {
			const showModified = toggleButton.textContent === "Show Info";
			toggleButton.textContent = showModified ? "Hide Info" : "Show Info";
			toggleDisplay(modifyInfos[index], showModified);
			toggleDisplay(copyInfos[index], showModified);
		});
	});

	copyButtons.forEach((copyButton, index) => {
		copyButton.addEventListener("click", () =>
			handleCopyButtonClick(copyButton, urlToCopies[index], copyInfos[index]),
		);
	});
});
