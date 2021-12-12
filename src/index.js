import "./styles.css";

const inputsArray = Array.from(document.querySelectorAll("input[type=file]"));

function updateImageForInput({ target: { id } }) {
  console.log({ id });
}
inputsArray.forEach((input) =>
  input.addEventListener("change", updateImageForInput)
);
