// Импортируем функцию, которая содержит код
import { setupCode } from "../src/app";

// Создаем заглушки для HTML-элементов, которые будут использоваться в тестах
document.body.innerHTML = `
  <input id="textInput" />
  <button id="addButton" style="display: none;">Add</button>
  <div id="paragraphContainer"></div>
`;

describe("Your code tests", () => {
  let textInput;
  let addButton;
  let paragraphContainer;

  beforeEach(() => {
    textInput = document.getElementById("textInput");
    addButton = document.getElementById("addButton");
    paragraphContainer = document.getElementById("paragraphContainer");

    return setupCode();
  });

  test("adds a new paragraph on addButton click", () => {
    textInput.value = "New paragraph text";
    addButton.style.display = "block";
    addButton.click();
    const paragraphs = paragraphContainer.getElementsByTagName("p");
    expect(paragraphs).toHaveLength(1);
    expect(paragraphs[0].textContent).toBe("New paragraph text");
    expect(textInput.value).toBe("");
    expect(addButton.style.display).toBe("none");
  });

  test("removes the oldest paragraph when more than 5 paragraphs exist", () => {
    for (let i = 0; i < 5; i++) {
      const paragraph = document.createElement("p");
      paragraph.textContent = `Paragraph ${i}`;
      paragraphContainer.appendChild(paragraph);
    }
    const paragraphsBefore =
      paragraphContainer.getElementsByTagName("p").length;
    expect(paragraphsBefore).toBe(6);

    textInput.value = "New paragraph text";
    addButton.style.display = "block";
    addButton.click();

    const paragraphsAfter = paragraphContainer.getElementsByTagName("p").length;
    expect(paragraphsAfter).toBe(5);
    const paragraphs = paragraphContainer.getElementsByTagName("p");
    expect(paragraphs[0]).not.toContain("Paragraph 1");
  });

  test("hides addButton when textInput is empty", () => {
    expect(addButton.style.display).toBe("none");
    textInput.value = "Hello";
    textInput.dispatchEvent(new Event("input"));
    expect(addButton.style.display).toBe("block");
    textInput.value = "";
    textInput.dispatchEvent(new Event("input"));
    expect(addButton.style.display).toBe("none");
  });
});
