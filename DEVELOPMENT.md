#[Development](#development)

## Table of contents
1. [Project Board](##project-board)
2. [Fuzzywuzzy](#fuzzywuzzy)
3. [Status Badge](#status-badge)
4. [Action Buttons](#action-buttons)
5. [Modals](#modals)
        -[Bootstrap](#bootstrap)
        -[script.js](#scriptjs)

------

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

* This is important as the admin dashboard is key to maintaining the quality of the database content. The revised button layout can be seen below. This can be compared to the original wireframe [here](documents/wireframes/mobile_admin.png).
![screenshot](documents/development/action_buttons.png)

------

## Modals

### Bootstrap

* Initially the project was built using vanilla javascript and styled in the style.css. There were lots of issues removing a backdrop that greyed out the screen behind the modal. 

* As there was one script.js file running all of the functions on various pages this may have been causing the problem.

* To minimise errors when the script.js file was executing the decision was made to use [Bootstrap 5.3](https://getbootstrap.com/) own modal classes and layout for the modals, thus handling the modal backdrop on closure.

* This hasnt impacted the design aesthetically but has made the code more relaible and freed up the script.js file.

### script.js

* During development, after switching to bootstrap modal classes, there was an error log in the console. This pointed to the edit modal. 

* Initially it wasnt clear what was causing this but it was only occuring on the index page.

* This subsequently stopped the footer date from updating which is where the issue was first noticed within the browser.

* This was useful as it pointed out where the script.js file stopped running. 

* The issue was that the single script.js was trying to run different functions across different template pages. When the script was being excecuted on a template that wasnt relevant it would throw an error and not run the rest of the script. The app was loosing functionality due to this.

* The decision was made to add another JavaScript file to run the edit modal functionality specifically. This could the be linked to the admin dashboard template directly so that the line of code that was causing the issue would only run for the admin dashboard template.

* This fixed the bug and restored original functionality. The console error that was shown for the script.js file can be seen below.

![screenshot](documents/development/edit_modal_bugfix.png)

------



