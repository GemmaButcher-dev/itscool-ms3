Welcome to

#  ItsCool 
![device mockup]()

View the live project [here!]()

## Table of Contents (#table-of-contents)
1. [UX](#ux)

  * Project Goals
  * User Goals 
  * Design Choices
  * Wireframes

2. [Features](#features)

   * Navigation Bar
   * Sign Up
   * Log In
   * Logout
   * Add slang word
   * Create username
   * Create password
   * User dashboard
   * Footer
   * 404 Page
   * Error Handling
   * Features left to implement

3. [Technologies used](#technologies-used)

  * Languages Used
  * Frameworks, Programs and Libraries Used

4. [Testing](#testing)

5. [Deployment](#deployment)

  * GitHub Pages
  * Forking the GitHub Repository
  * Making a Local Clone

6. [Credits](#credits)

  * Content
  * Media
  * Code
  * Acknowledgements

------

## UX

### User Stories

#### Project Goals

The target audience is for teenagers and adults trying to determine the definition of school slang words used in the UK and to add tot he current ItsCool community dictionary.

#### User Goals

"**_As a guest user, I would like to_** _______________"

✅  browse through the slang terms listed alphabetically so I can see all the terms that are available.

✅  click on slang terms to view their definitions and sample usage, so I can understand the meaning and context.

✅  search for slang terms by typing keywords or phrases, so I can quickly find the slang term I'm interested in.

✅  browse slang terms by selecting a letter from A-Z, so I can easily find terms that start with a specific letter.

✅  read about the purpose of this slang dictionary, so I can understand the context and relevance of the terms listed.


"**_As a registered user, I would like to_** _______________"

✅  as a new user, create an account by providing a username and password, so I can log in and use additional features.

✅  as a returning user, I want to log in with my username and password, so I can access my account.

✅  as a logged-in user, I want to update my profile details if necessary, so my account information is accurate.

✅  as a logged-in user, I want to log out of my account, so I can ensure my account remains secure on shared devices.

✅  get immediate feedback to know if I have signed up, logged in or signed out.

✅  be able to turn on and off all sounds throughout the app

✅  add new slang terms and definitions, so I can expand the slang dictionary and help others learn.

✅  to edit slang terms I’ve added to correct or improve definitions, ensuring the information stays accurate and up-to-date.

✅  delete slang terms that are no longer relevant or are duplicates, so the dictionary remains clean and useful.

"**_As an student user, I would like to_** _______________"

✅  Learn About Common School Slang:
    As a student, I want to browse school-related slang so I can understand the informal language and slang used by peers in the school environment.

✅  Contribute School-Specific Slang:
    As a student, I want to contribute slang that’s specific to my school or region, so I can share it with other students who may find it relevant or interesting.

✅  See Slang Organized Alphabetically:
    As a student, I want to see slang words organized by their first letter, so I can easily find terms that I hear frequently.

✅  Report Incorrect or Inappropriate Content:
    As a student, I want to report slang entries that are incorrect, outdated, or inappropriate, so I can help maintain a positive and accurate dictionary.

"**_As an teacher or parent, I would like to_** _______________"

✅  Understand Student Language:
    As a teacher or parent, I want to look up slang terms and definitions, so I can understand the language students are using in social and school settings.

✅  View Related Terms and Meanings:
    As a teacher or parent, I want to see related terms or common slang phrases grouped together, so I can get a better context for terms that might be used together.

✅  Browse by Letter or Category:
    As a teacher or parent, I want to browse slang by letter or category to find terms more easily and understand common slang patterns.



"**_As an administrator, I would like to_** _______________"

✅  review slang terms submitted by users before they are published, so I can ensure quality and appropriateness.

✅  manage user accounts, including editing and deleting accounts if needed, so I can enforce rules and maintain site integrity.

✅  edit or delete any slang term to correct inaccuracies, enforce content guidelines, and remove inappropriate entries.

✅ 

✅ 

✅ 

✅ 

✅ 



### Design Choices

   * Mobile first, single column responsive design. 

#### Colour Scheme

 The global colour selection for Super Squad is shown below.

 * 
 * white #ffffff
 * 
 * 

#### Typography

   * The Exo+2 google font with a fall back font of sans-serif should the font fail to load. It is used for the header logo text, introduction text and footer.
   * Supernova 2 font from cdn fonts is used for the game selection buttons text with a fall back font of sans serif should it fail to load. This font has a fun and slightly dramatic comic characteristics whilst remaining legible. 

#### Imagery

A range of imagery is used from free background images at [freepik](https://www.freepik.com/) to using [leonardo AI](https://app.leonardo.ai/image-generation) something unique and effective, bespoke to this project.

The below image was created using Leonardo AI.

![screenshot]()

### Wireframes

Wireframes were created using [Balsamiq](https://balsamiq.com/) and can be found in the [wireframes folder](docs/wireframes).
Below is the mobile view wireframe of the homepage.

![screenshot]()
------
The wireframe showing the

![screenshot]()

## Features

### Existing Features

   #### Navigation Bar

   * 
![screenshot]()

   #### Sign Up

   * 
![screenshot]()



   #### Log In

   * 

|    | Example Image  |
|----|----------------|
|    | ![screenshot]() |
|    | ![screenshot]() |
|    | ![screenshot]()|



   #### Log Out

   * 

|        | Example Image     |                 |
|--------|------------------|-----------------|
|         | ![screenshot]() | ![sound clip]() |
|         | ![screenshot]() | ![sound clip]() |
|         | ![screenshot]() | ![sound clip]() |



   ![screenshot]()

   #### User Dashboard

   * 
   
   #### Footer

   * There is a fixed footer at the bottom of the page. 
   * The footer contains the game developer name and copyright with an automatically updated year. This has been done using JavaScript and updates when the page is loaded to the current year. The function updates the span element in the footer.


   #### 404 Page

   * A 404 page is navigated to when an error occurs or the website fails load. The page explains to the user that there is an issue and offers a button to navigate back to the homepage/index.html without using browser buttons.

   ![screenshot]()

   #### Error Handling

   * Error handling is built directly into the game functions so should the game data not load or be 'fetched' from the json the function will handle the error and will show an error by way or stating 'error fetching game data'.

### Features Left To Implement

   * 
   * 
   * 
   * 

## Technologies Used

### Languages Used

- ![HTML5](https://img.shields.io/static/v1?label=HTML&message=5&color=E34F26&logo=html5&logoColor=ffffff)
    - [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5) - Used as the base for markup text.
- ![CSS3](https://img.shields.io/static/v1?label=CSS&message=3&color=1572B6&logo=css3&logoColor=ffffff)
    - [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3) - Used as the base for cascading styles.
- ![JavaScript](https://img.shields.io/static/v1?label=JavaScript&message=ES6&color=F7DF1E&logo=javascript&logoColor=ffffff)
    - [JavaScript ES6](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Used as the base for game interaction.

### Frameworks, Programs and Libraries Used

1. [Bootstrap 5.3](https://getbootstrap.com/):
   Bootstrap was used to assist with the responsiveness and styling of the website.
2. [Google Fonts](https://fonts.google.com/):
   Google fonts were used to import the 'Exo+2' font into the index.html and style.css files which is used on all pages throughout the project.
3. [Font Awesome](https://fontawesome.com/):
   Font Awesome was used on all pages throughout the website to add icons for aesthetic and UX purposes.
4. jQuery:
   jQuery came with Bootstrap to make the app responsive.
5. [Git](https://git-scm.com/):
   Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
6. [GitHub](https://github.com/):
   GitHub is used to store the projects code after being pushed from Git and manage version control.
7. [Balsamiq](https://balsamiq.com/):
   Balsamiq was used to create the wireframes during the design process.
8. [Am i responsive?](https://ui.dev/amiresponsive):
   Am i reponsive was used to create the device mockup in README.md.
9. [ahrefs](https://ahrefs.com/writing-tools/img-alt-text-generator):
   ahrefs was used to help generate alt text for images.
10. [Canva](https://www.canva.com/colors/color-palette-generator/):
    Canva's logo generator was used to create a logo for the favicons.

## Testing

All detailed testing information can be seen in the [TESTING.md](TESTING.md) file.
Thorough manual testing has been carried out.

 The below matrix shows the responsiveness and browser compatability testing carried out.
![Screenshot](docs/testing/testing_matrix.png)

## Deployment

### GitHub Pages

The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/GemmaButcher-dev/freestyle_dance.git)
2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
    - Alternatively Click [Here](https://raw.githubusercontent.com/) for a GIF demonstrating the process starting from Step 2.
3. Scroll down the Settings page until you locate the "GitHub Pages" Section.
4. Under "Source", click the dropdown called "None" and select "Master Branch".
5. The page will automatically refresh.
6. Scroll back down through the page to locate the now published site [link](https://gemmabutcher-dev.github.io/freestyle_dance/) in the "GitHub Pages" section.

### Forking the GitHub Repository

By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/GemmaButcher-dev/freestyle_dance.git)
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. You should now have a copy of the original repository in your GitHub account.

### Making a Local Clone

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/GemmaButcher-dev/freestyle_dance.git)
2. Under the repository name, click "Clone or download".
3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type `git clone`, and then paste the URL you copied in Step 3.

```
$ git clone https://github.com/GemmaButcher-dev/freestyle_dance.git
```

7. Press Enter. Your local clone will be created.

```
$ git clone https://github.com/GemmaButcher-dev/freestyle_dance.git
> Cloning into `CI-Clone`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```

Click [Here](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository#cloning-a-repository-to-github-desktop) to retrieve pictures for some of the buttons and more detailed explanations of the above process.

## Credits

### Code

  * [Bootstrap4](https://getbootstrap.com/docs/4.4/getting-started/introduction/): Bootstrap Library used throughout the 
    project mainly to make site responsive using the Bootstrap Grid System.
  * [Google Developer Tools](https://developer.chrome.com/docs/devtools) : For problem solving with layout and managing css 
    overrides and use of console.
  * [ahref](https://ahrefs.com/writing-tools/img-alt-text-generator) : For image alt text.
  * Favicon sitemanifest and header tags were provided by [Favicon Generator](https://favicon.io/)
  * ChatGPT for problem solving out of hours and providing help with function formatting.
  * 
  * 
   

### Content

  * All content was designed by the developer. 
  * Base Secondary slang content was sourced using [BBC Bitesize](https://www.bbc.co.uk/bitesize/articles/zkvwgwx).
  * Base middle slang content was sourced using [Tiny Beans](https://tinybeans.com/middle-school-slang/).
  * Base primary slang content was sourced using [Twinkle](https://www.twinkl.co.uk/resource/kids-explain-british-slang-words-mini-lesson-twinkl-kids-tv-t-tp-1659009278).
  * [ChatGPT](https://openai.com/index/chatgpt/).
  * [Code institute](https://learn.codeinstitute.net) Learning material.

### Media

  * All background images were sourced at [canva](https://www.canva.com/)
  * Hero theme audio was sourced at [uppbeat](https://uppbeat.io/music/theme/superhero)
  *  [Leonardo AI](https://app.leonardo.ai/image-generation)
  * [My Instants](https://www.myinstants.com/)
  * image title  [Flaming Text](https://eu1.flamingtext.com/)
  * Favicon icons and png files were generated by [Favicon Generator](https://favicon.io/)
  * Markdown badges for README were sourced from [Shields.io](https://shields.io)

### Acknowledgements

  * My Mentor for continuous helpful feedback and guidance.
  * Cohort Leader Rachel Furlong for her continued support.
  * Tutor support at Code Institute for their support.
  * ChatGPT for problem solving out of hours.


## Gitpod Reminders

To run a frontend (HTML, CSS, Javascript only) application in Gitpod, in the terminal, type:

`python3 -m http.server`

A blue button should appear to click: _Make Public_,

Another blue button should appear to click: _Open Browser_.

To run a backend Python file, type `python3 app.py` if your Python file is named `app.py`, of course.

A blue button should appear to click: _Make Public_,

Another blue button should appear to click: _Open Browser_.

By Default, Gitpod gives you superuser security privileges. Therefore, you do not need to use the `sudo` (superuser do) command in the bash terminal in any of the lessons.

To log into the Heroku toolbelt CLI:

1. Log in to your Heroku account and go to *Account Settings* in the menu under your avatar.
2. Scroll down to the *API Key* and click *Reveal*
3. Copy the key
4. In Gitpod, from the terminal, run `heroku_config`
5. Paste in your API key when asked

You can now use the `heroku` CLI program - try running `heroku apps` to confirm it works. This API key is unique and private to you, so do not share it. If you accidentally make it public, you can create a new one with _Regenerate API Key_.

### Connecting your Mongo database

- **Connect to Mongo CLI on a IDE**
- navigate to your MongoDB Clusters Sandbox
- click **"Connect"** button
- select **"Connect with the MongoDB shell"**
- select **"I have the mongo shell installed"**
- choose **mongosh (2.0 or later)** for : **"Select your mongo shell version"**
- choose option: **"Run your connection string in your command line"**
- in the terminal, paste the copied code `mongo "mongodb+srv://<CLUSTER-NAME>.mongodb.net/<DBname>" --apiVersion 1 --username <USERNAME>`
  - replace all `<angle-bracket>` keys with your own data
- enter password _(will not echo **\*\*\*\*** on screen)_

------

## Release History

We continually tweak and adjust this template to help give you the best experience. Here is the version history:

**June 18, 2024,** Add Mongo back into template

**June 14, 2024,** Temporarily remove Mongo until the key issue is resolved

**May 28 2024:** Fix Mongo and Links installs

**April 26 2024:** Update node version to 16

**September 20 2023:** Update Python version to 3.9.17.

**September 1 2021:** Remove `PGHOSTADDR` environment variable.

**July 19 2021:** Remove `font_fix` script now that the terminal font issue is fixed.

**July 2 2021:** Remove extensions that are not available in Open VSX.

**June 30 2021:** Combined the P4 and P5 templates into one file, added the uptime script. See the FAQ at the end of this file.

**June 10 2021:** Added: `font_fix` script and alias to fix the Terminal font issue

**May 10 2021:** Added `heroku_config` script to allow Heroku API key to be stored as an environment variable.

**April 7 2021:** Upgraded the template for VS Code instead of Theia.

**October 21 2020:** Versions of the HTMLHint, Prettier, Bootstrap4 CDN and Auto Close extensions updated. The Python extension needs to stay the same version for now.

**October 08 2020:** Additional large Gitpod files (`core.mongo*` and `core.python*`) are now hidden in the Explorer, and have been added to the `.gitignore` by default.

**September 22 2020:** Gitpod occasionally creates large `core.Microsoft` files. These are now hidden in the Explorer. A `.gitignore` file has been created to make sure these files will not be committed, along with other common files.

**April 16 2020:** The template now automatically installs MySQL instead of relying on the Gitpod MySQL image. The message about a Python linter not being installed has been dealt with, and the set-up files are now hidden in the Gitpod file explorer.

**April 13 2020:** Added the _Prettier_ code beautifier extension instead of the code formatter built-in to Gitpod.

**February 2020:** The initialisation files now _do not_ auto-delete. They will remain in your project. You can safely ignore them. They just make sure that your workspace is configured correctly each time you open it. It will also prevent the Gitpod configuration popup from appearing.

**December 2019:** Added Eventyret's Bootstrap 4 extension. Type `!bscdn` in a HTML file to add the Bootstrap boilerplate. Check out the <a href="https://github.com/Eventyret/vscode-bcdn" target="_blank">README.md file at the official repo</a> for more options.

------

## FAQ about the uptime script

**Why have you added this script?**

It will help us to calculate how many running workspaces there are at any one time, which greatly helps us with cost and capacity planning. It will help us decide on the future direction of our cloud-based IDE strategy.

**How will this affect me?**

For everyday usage of Gitpod, it doesn’t have any effect at all. The script only captures the following data:

- An ID that is randomly generated each time the workspace is started.
- The current date and time
- The workspace status of “started” or “running”, which is sent every 5 minutes.

It is not possible for us or anyone else to trace the random ID back to an individual, and no personal data is being captured. It will not slow down the workspace or affect your work.

**So….?**

We want to tell you this so that we are being completely transparent about the data we collect and what we do with it.

**Can I opt out?**

Yes, you can. Since no personally identifiable information is being captured, we'd appreciate it if you let the script run; however if you are unhappy with the idea, simply run the following commands from the terminal window after creating the workspace, and this will remove the uptime script:

```
pkill uptime.sh
rm .vscode/uptime.sh
```

**Anything more?**

Yes! We'd strongly encourage you to look at the source code of the `uptime.sh` file so that you know what it's doing. As future software developers, it will be great practice to see how these shell scripts work.

---

Happy coding!
