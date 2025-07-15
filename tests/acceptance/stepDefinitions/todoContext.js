const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");
const TodoPage = require("../pages/TodoPage.js");

let todoPage;
let todoItems = [];

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

When("the user adds the following items:", async (dataTable) => {
  todoItems = dataTable.raw().map((row) => row[0]);
  for (const item of todoItems) {
    await todoPage.add(item);
  }
});

Then("they should be added to the list", async () => {
  const items = await todoPage.getAllItems();
  expect(items).toEqual(todoItems);
});

Given(
  "the user has added {string} to the todo list using the webUI",
  async (item) => {
    await todoPage.add(item);
  }
);

When("the user delete {string} from the todo list", async function (string) {
  await todoPage.deleteItem();
});

Then("card {string} should not be displayed on the webUI", async (string) => {
  expect(await todoPage.todoItem).not.toBeVisible();
});

Given(
  "the user adds following items to the todo list:",
  async function (dataTable) {
    todoItems = dataTable.hashes().map((item) => item.item);
    for (const item of todoItems) {
      await todoPage.add(item);
    }
  }
);

When("the user delete all items from todo list", async function () {
  await todoPage.deleteAllItems();
});

Then("no item should be on the todo list", async function () {
  expect(await todoPage.todoItem).not.toBeVisible();
});

Given("the user adds {string} to the todo list", async function (item) {
  await todoPage.add(item);
});

When("the user delete item from the todo list", async function () {
  await todoPage.deleteItem();
});

Then("card item should not be displayed on the webUI", async function () {
  expect(await todoPage.todoItem).not.toBeVisible();
});
