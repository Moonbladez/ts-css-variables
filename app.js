var inputs = document.querySelectorAll(".controls input");
function handleUpdate() {
    var suffix = this.dataset.sizing || "";
    document.documentElement.style.setProperty("--" + this.name, this.value + suffix);
    console.log(this);
}
inputs.forEach(function (input) { return input.addEventListener("change", handleUpdate); });
