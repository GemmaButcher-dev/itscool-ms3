#[Development](#development)

## Table of contents
1. [Project Board](##project-board)
2. [Fuzzywuzzy](#fuzzywuzzy)
3. [Status Badge](#status-badge)
4. [Action Buttons](#action-buttons)

## Project Board

* Throughout the development of this project i managed tasks using a git hub project board within the repository. I was able to order task by priority and progress status.

* Using the project board provides a great visual prioritisation and task management aid. This was essential for running a project with lots of files at various stsges of development.

* The github project board was particuarly useful for highlighting external sourcing tasks with attached thougth and ideas around that which can be edited quickly and easily. The project board can be seen below.

![screenshot](documents/development/github_project_1.png)

------

## Fuzzywuzzy

* After reviewing the search function it did not align well with all user stories. This is because the nature of the slang words, their definitions and origins mean that they are often not spelled as you might expect. For example a lot of newer slangs are adopted and popularised from youtubers.

* The key objective of the app is to help users find the words and their associated meanings. It is logical to assume that you may not know how to spell a slang word correctly in order to find it.

* There is a clear need to allow some margin for error from the user when taking inputs and matching them to a document in mongoDB. 

* Research suggested several options for text operators, but the best operator for the solution that offers an adjustable threshold control for matching and filtering was Fuzzywuzzy. This will be initially set to 80% before testing.

------

## Status Badge

* In the initial design it was planned that there would be a status badge in the admin dashboard next to the pending slang list item.

* After building the admin dashboard and styling as per the [wireframe](documents/wireframes/mobile_admin.png), the section seemed cluttered.

* As well as the red, green and purple buttons there was then an additional yellow pending badge that looked like it could be easily mistaken for a button. This was noticed from feedback from the school users testing the app. please see [TESTING.md](TESTING.md).

------

## Action buttons

* After the status badge was removed the buttons that update, approve or delete the pending slangs were moved into their own space underneath the pending slang list item.

* This makies them much easier to style and adjust layout and style to media queries more easily.

* They were grouped into a section called 'action' buttons. This makes the create, update and delete functionalities of CRUD very clear and does not get lost within a list item as before.

* This is important as the admin dashboard is key to maintaining the quality of the database content.

