#[Development](#development)

## Table of contents
1. [Project Board](##project-board)
2. [Fuzzywuzzy](#fuzzywuzzy)

## Project Board

* Throughout the development of this project i managed tasks using a git hub project board within the repository. I was able to order task by priority and progress status.
* Using the project board provides a great visual prioritisation and task management aid. This was essential for running a project with lots of files at various stsges of development.
* The github project board was particuarly useful for highlighting external sourcing tasks with attached thougth and ideas around that which can be edited quickly and easily. The project board can be seen below.
![screenshot](documents/development/github_project_1.png)

------

## Fuzzywuzzy

After reviewing the search function it did not align well with all user stories. This is because the nature of the slang words, their definitions and origins mean that they are often not spelled as you might expect. For example a lot of newer slangs are adopted and popularised from youtubers. The key objective of the app is to help users find the words and their associated meanings. It is logical to assume that you may not know how to spell a slang word correctly in order to find it.
There is a clear need to allow some margin for error from the user when taking inputs and matching them to a document in mongoDB. 
Research suggested several options for text operators, but the best operator for the solution that offers an adjustable threshold control for matching and filtering was Fuzzywuzzy. This will be initially set to 80% before testing.

