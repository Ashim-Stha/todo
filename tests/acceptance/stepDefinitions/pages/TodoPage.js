class TodoPage {
  page;
  homepageElement;
  todoInput;
  todoButton;
  todoItem;
  BASE_URL = "http://localhost:3001";
  constructor({ page }) {
    this.page = page;
    this.homepageElement = page.locator(".borderTodo");
    this.todoInput = page.locator(".todo-input");
    this.todoButton = page.locator(".todo-button");
    this.todoItem = page.locator(".todo .todo-item");
  }

  async navigate() {
    await this.page.goto(this.BASE_URL);
  }

  async waitForLoad() {
    await this.page.waitForURL(this.BASE_URL);
    await this.homepageElement.waitFor();
  }

  async add(item) {
    await this.todoInput.fill(item);
    await this.todoButton.click();
  }

  async getItem() {
    return await this.todoItem.innerText();
  }
}

module.exports = TodoPage;
