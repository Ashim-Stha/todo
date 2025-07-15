Feature: todo
As a user
I want to add an item to the todo list
So that I can organize tasks

Background:
    Given a user has navigated to the homepage


Scenario: Add item to the todo list
    When the user adds "test" to the todo list using the webUI
    Then card "test" should be displayed on the webUI
    

Scenario Outline: Add multiple items to the todo list
    When the user adds "<item>" to the todo list using the webUI
    Then card "<item>" should be displayed on the webUI
    Examples:
        | item  |
        | one   |
        | two   |
        | three |
        | four  |
        | five  |


Scenario: Add multiple items to the todo list
    When the user adds the following items:
        | one   |
        | two   |
        | three |
        | four  |
        | five  |
    Then they should be added to the list


Scenario: Delete item from the todo list
    Given the user has added "test" to the todo list using the webUI
    When the user delete "item" from the todo list
    Then card "item" should not be displayed on the webUI


Scenario: Delete multiple items from the todo list
    Given the user adds following items to the todo list:
        | item  |
        | one   |
        | two   |
        | three |
        | four  |
        | five  |  
    When the user delete all items from todo list
    Then no item should be on the todo list      

Scenario Outline: Delete multiple items from the todo list
    Given the user adds "<item>" to the todo list
    When the user delete item from the todo list
    Then card item should not be displayed on the webUI
    Examples:
        | item  |
        | one   |
        | two   |
        | three |
        | four  |
        | five  |       

