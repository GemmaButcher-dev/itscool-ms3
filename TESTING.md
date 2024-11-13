 #[Testing](#testing)

## Table of contents

  1. [Overall Peformance](#overall-performance)
  2. [Code Validation](#code-validation)
  3. [Accessibility Testing](#accessibility-testing)
  4. [Responsiveness & Compatability Testing](#responsiveness--compatability-testing)
  5. [JavaScript Testing](#javascript-testing)
        * JS Hint
  6. [Bug Fixes](#bug-fixes)
        * 
  7. [Testing User Stories from User Experience (UX) Section](#testing-user-stories)
        * Project Goals
        * Players Goals
        * ItScool helps players meet these goals by:
  8.  [Other Testing Methods](#other-testing)
  9. [Further Testing](#further-testing)

  ------

## Overall Performance

The complete site was tested on the lighthouse facility in Google Developer Tools to assess the overall performance of the site. The site meets the pass criteria and you can see the results in the below table.

| Page                | Screenshot                                      | Notes                                                        |
|---------------------|-------------------------------------------------|--------------------------------------------------------------|
|Start/Home Screen    |![screenshot]() |                          |
|404                  |![screenshot]()   |  |


## Responsiveness & Compatability Testing

 The below matrix shows the responsiveness and browser compatability testing carried out.
![Screenshot]()


## Code Validation

The W3C Markup Validator and W3C CSS Validator Services were used to validate every page of the project to ensure there were no syntax errors in the project. The results and screenshots are in the table below.

| Page                | Screenshot                               | Notes  |
|---------------------|------------------------------------------|--------|
|Start/Home Screen    |![screenshot]() | Passed/Failed |
|404                  |![screenshot]()   | Passed /Failed| 
|CSS                  |![screenshot]()   | Passed /Failed|


## Accesibility Testing

* The complete site was tested using [Web Aim](https://wave.webaim.org/) and has passed. This can be [viewed here for index.html]() and [viewed here for 404.html]().


## JavaScript Testing

### JS Hint

  * The JavaScript code was put though [JS Hint](https://jshint.com/) 

| Test      | Screenshot                                     | Notes                                                |
|-----------|------------------------------------------------|------------------------------------------------------|
| ES5       |![screenshot]()      |  |
| Re-test 1 |![screenshot]() |               | 
| Re-test 2 |![screenshot]() | Passed - No warnings                                 |


## Bug Fixes

### 



### 




## Testing User Stories from User Experience (UX) Section

The project user stories have been met with the following features;


✅  

   ItScool provides:<br>
      * . <br>
      * .<br>
      * .

       can be seen below.

![screenshot]()


✅  

   ItScool provides:<br>
      * .<br>
      * .

      can be seen below

![screenshot]()

✅  .

   ItScool provides:<br>
     * .<br>
     * .

✅  
   ItScool provides:<br>
     * .<br>

      is shown below.

![screenshot]()

✅  
  ItScool provides:<br>
     * 

✅  

  ItScool provides:<br>
      * <br>
      *.

✅  .

  ItScool provides:<br>
     * . <br>
     * .

✅  .

  ItScool provides:<br>
     * .<br>
     * .

      is shown below.

![screenshot]()

✅  

  ItScool provides:<br>
     * .<br>
     * .

✅  

  ItScool provides:<br>
      * .<br>
      * .

✅  

  ItScool provides:<br>
     

![screenshot]()



## Other Testing Methods

### Manual Testing

Behaviour driven Development (BDD) is where a project or product is tested to the user stories and by the user. This has also been done in responsiveness and compatability testing section above. 
This form of testing although useful in terms of user story testing can be subject to bias and sometimes things can get missed due to fatigue and is costly in time and resources. BDD is more user-centric and revolves around system behaviour. This is an Agile software development methodology.
It is particuarly useful as it can encompass a wide range of input from stakeholders to managers and is good for planning a project and monitoring throughout its entirety. Goals can be set along the projects way to delivery and measured.

- Below is a table of the manual user testing carried out.

| **Feature**          | **Test Details**           | **Expected results**                      | **Pass/Fail** |                                             
| :-- | :-- | :-- | :-- |


### Automated Testing

Test Driven Development (TDD) is where developers test first and use these results to guide theor development. The process begins when tests are written in order to fail but only so much so that the tests dont break the programme. TDD is thought of as more developer-centric, and is revolves around code correctness.

A popular technique in TDD is Red-Green-Refactor. TDD is a manageable way of testing code breaking it down into manageable chunks. This is explained below;
Red - Write a failing test. Script a test that will fail around a specific function of the programme.
Green - Make the test pass, enough needs to be done to get it to pass and work
Refactor - Clean up the code. Refining the code is done making it efficient and reliable. 

An example of automated testing for this project would be;

-Red - A test is written for Background image does not change on start game button being clicked.

-Green - Add background image function with event listeners to the start game button so background changes on click. 

-Refactor - Tidy code up and minimise where possible. Check reliability. Revisit when more functions or event listeners are added, or the original function is extended. Monitor.

Various language specific frameworks are available to run automated testing. One of the most popular is Jest for testing JavaScript. 

It is best to combine manual and automated testing. Automated tests will not test user experience and tests will only ever be as good as the questions we ask it to perform.

## Further Testing

 * A large amount of testing was carried out to ensure that all pages, buttons, feedback and functions were working correctly.
 * Friends and family members were asked to review the site and documentation to point out any bugs and/or user 
      experience issues. 