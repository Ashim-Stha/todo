class TodoPage {
  page;
  homepageElement;
  todoInput;
  todoButton;
  todoItem;
  deleteButton;
  BASE_URL = "http://localhost:3000";
  constructor({ page }) {
    this.page = page;
    this.homepageElement = page.locator(".borderTodo");
    this.todoInput = page.locator(".todo-input");
    this.todoButton = page.locator(".todo-button");
    this.todoItem = page.locator(".todo .todo-item");
    this.deleteButton = page.getByRole("button", { name: "\uf1f8" });
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

  async getAllItems() {
    return await this.todoItem.allTextContents();
  }

  async deleteItem() {
    return await this.deleteButton.click();
  }

  async deleteAllItems() {
    while ((await this.deleteButton.count()) > 0) {
      await this.deleteButton.first().click();
    }
  }
}

module.exports = TodoPage;
