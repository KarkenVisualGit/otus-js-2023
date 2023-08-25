// Импортируем функцию, которая содержит код
import setupCode from "../src/app";


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
    // Получаем ссылки на элементы перед каждым тестом
    textInput = document.getElementById("textInput");
    addButton = document.getElementById("addButton");
    paragraphContainer = document.getElementById("paragraphContainer");

    // Запускаем код для настройки обработчиков событий перед каждым тестом
    setupCode();
  });

  it("hides addButton when textInput is empty", () => {
    expect(addButton.style.display).toBe("none");
    textInput.value = "Hello";
    textInput.dispatchEvent(new Event("input"));
    expect(addButton.style.display).toBe("block");
    textInput.value = "";
    textInput.dispatchEvent(new Event("input"));
    expect(addButton.style.display).toBe("none");
  });

  it("adds a new paragraph on addButton click", () => {
    textInput.value = "New paragraph text";
    addButton.style.display = "block";
    addButton.click();
    const paragraphs = paragraphContainer.getElementsByTagName("p");
    expect(paragraphs.length).toBe(1);
    expect(paragraphs[0].textContent).toBe("New paragraph text");
    expect(textInput.value).toBe("");
    expect(addButton.style.display).toBe("none");
  });

  it("removes the oldest paragraph when more than 5 paragraphs exist", () => {
    for (let i = 1; i < 5; i++) {
      const paragraph = document.createElement("p");
      paragraph.textContent = `Paragraph ${i}`;
      paragraphContainer.appendChild(paragraph);
    }
    const paragraphsBefore = paragraphContainer.getElementsByTagName("p").length;
    expect(paragraphsBefore).toBe(6);

    textInput.value = "New paragraph text";
    addButton.style.display = "block";
    addButton.click();

    const paragraphsAfter = paragraphContainer.getElementsByTagName("p").length;
    expect(paragraphsAfter).toBe(5);
    expect(paragraphContainer.textContent).not.toContain("Paragraph 1");
  });
});
