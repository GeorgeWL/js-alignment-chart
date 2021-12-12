import "./styles.css";

// document.getElementById("app").innerHTML = `
// <h1>Hello Vanilla!</h1>
// <div>
//   We use the same configuration as Parcel to bundle this sandbox, you can find more
//   info about Parcel
//   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
// </div>
// `;
const inputsArray = Array.from(document.querySelectorAll("input[type=file]"));
console.log(inputsArray);
function updateImageForInput({ target: { id } }) {
  console.log({ id });
}
inputsArray.forEach((input) =>
  input.addEventListener("change", updateImageForInput)
);
