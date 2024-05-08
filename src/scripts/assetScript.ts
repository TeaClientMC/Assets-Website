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
	const toggleButton = document.getElementById(
		"toggleModified",
	) as HTMLButtonElement;
	const modifyInfo = document.querySelector(".modify-info") as HTMLDivElement;
	const copyInfo = document.querySelector(".copy-info") as HTMLDivElement;
	const copyButton = document.getElementById("copyButton") as HTMLButtonElement;
	const urlToCopy = document.getElementById("urlToCopy") as HTMLInputElement;

	if (!copyButton || !urlToCopy) {
		console.error("Button or input field not found");
		return;
	}

	toggleButton.addEventListener("click", () => {
		const showModified = toggleButton.textContent === "Show Info";
		toggleButton.textContent = showModified ? "Hide Info" : "Show Info";
		toggleDisplay(modifyInfo, showModified);
		toggleDisplay(copyInfo, showModified);
	});

	copyButton.addEventListener("click", () =>
		handleCopyButtonClick(copyButton, urlToCopy, copyInfo),
	);
});
