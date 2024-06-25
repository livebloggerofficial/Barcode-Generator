const generateBtn = document.querySelector(".generate-btn");

const generateBarcode = () => {
  const input = document.querySelector(".barcode-input").value;
  if (input.trim() !== "") {
    JsBarcode(".barcode", input, {
      height: 100,
      displayValue: true,
    });
  } else {
    alert("Please enter a valid text or number to generate a barcode.");
  }
};

generateBtn.addEventListener("click", generateBarcode);
