const inputs = document.querySelectorAll(".controls input");

function handleUpdate() {
	const suffix: string = this.dataset.sizing || "";
	document.documentElement.style.setProperty(
		`--${this.name}`,
		this.value + suffix
	);
	console.log(this);
}

inputs.forEach((input) => input.addEventListener("change", handleUpdate));
