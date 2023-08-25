function setupCode() {
    const textInput = document.getElementById("textInput");
    const addButton = document.getElementById("addButton");
    const paragraphContainer = document.getElementById("paragraphContainer");
  
    textInput?.addEventListener("input", () => {
      if (textInput.value.trim() !== "") {
        addButton.style.display = "block";
      } else {
        addButton.style.display = "none";
      }
    });
  
    addButton?.addEventListener("click", () => {
      const newParagraph = document.createElement("p");
      newParagraph.innerHTML = textInput.value;
      paragraphContainer.appendChild(newParagraph);
  
      textInput.value = "";
      addButton.style.display = "none";
  
      const paragraphs = paragraphContainer.getElementsByTagName("p");
      if (paragraphs.length > 5) {
        paragraphContainer.removeChild(paragraphs[0]);
      }
    });
  
    return {
      textInput,
      addButton,
      paragraphContainer,
    };
  }


  setupCode();
  
  module.exports = setupCode
  