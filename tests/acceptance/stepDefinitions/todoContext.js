const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");
const TodoPage = require("./pages/TodoPage.js");

let todoPage;

Given("a user has navigated to the homepage", async () => {
  todoPage = new TodoPage({ page: global.page });
  await todoPage.navigate();
  await todoPage.waitForLoad();
});

When(
  "the user adds {string} to the todo list using the webUI",
  async (item) => {
    await todoPage.add(item);
  }
);

Then("card {string} should be displayed on the webUI", async (item) => {
  expect(await todoPage.getItem()).toBe(item);
});
