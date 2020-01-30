---
layout: lecture
title: JavaScript Lab
type: lab
draft: 0
due_date: 2020-01-31
lecture_files_url: /winter2020/course-files/assignments/studio04.zip
toc: 1
description: |
    Practice with DOM manipulation, template literals, and fetch
---

## Instructions
In this assignment, you will be completing a few different exercises to practice using loops to update the DOM. Please download the <a class="lab" href="/winter2020/course-files/assignments/studio04.zip">studio 04 starter files <i class="fas fa-link"></i></a> and save them to your repo folder. Then, open the entire studio04 folder in your code editor and complete the exercise below. The "determinate loops" section is the most important, but both sets of activities are useful. Just get as far as you can. I encourage you to complete all of these exercises so that you become comfortable with JavaScript in preparation for next week's HW assignment.

## Part 1: Determinate Loops
Determinate loops are loops that iterate over a finite list of items. In JavaScript, one way to do this is by making use of the **for..of** loop. More information on for...of loops can be found [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of). Please try and complete the following exercises (working from the starter files):

### 01-unique-messages 
Using a for/of loop, print a message to each person listed in the names list.

### 02-unique-messages-objects
Using a **for...of loop**, write out each person’s avatar, name, and score, based on `people` list (of objects).

### 03-unique-messages-template-literal
Using a **for...of loop** and a template literal, write out each person’s avatar, name, and score, based on the `people` list.

> For more information about template literals (template strings), please refer to the following:
> 1. [Assigned Video](https://learning.oreilly.com/learning-paths/learning-path-introduction/9781491987308/9781491912324-video215247) (Safari Books)
> 2. [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

### 04-add-numbers
Using a **for...of loop**, iterate through the list of numbers and add them all together. Then, write the final result to the document.

### 05-photo-gallery
Modify the `loadCards` function so that it uses a **for...of loop** to generate a card for each photo in the list.

### 06-gallery-ajax 
<span class="hw">Spotify prep</span> 
In preparation for the Spotify data activity, you are going to be using the JavaScript's fetch API. As described via the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch" target="_blank">Mozilla developer pages</a>:

{:.quote} 
> The Fetch API provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline, such as requests and responses. It also provides a global fetch() method that provides an easy, logical way to fetch resources asynchronously across the network.

Consider the following example, which fetches a JSON file from across the network and prints it to the console:

```js
const addressOfData = 'https://raw.githubusercontent.com/hci330/winter2020/master/course-files/assignments/studio04/06-gallery-ajax/data/flowers.json'

fetch(addressOfData)
    .then((response) => {
        return response.json();
    })
    .then((myJson) => {
        console.log(myJson);
    });
```

{:.quote} 
> The simplest use of fetch() takes one argument — the path to the resource you want to fetch — and returns a promise containing the response (a Response object).
> This is just an HTTP response, not the actual JSON. To extract the JSON body content from the response, we use the json() method.

#### Your Task
Update the `loadCars()` and `loadBikes()` functions so that they loads photos from the cars and bikes data files (respectively).


## Part 2: Indeterminate Loops
Indeterminate Loops are loops that can repeat any number of times (not constrained by the length of a list or collection). Please try and complete the following exercises (working from the starter files):

### 07-identical icons
Using a while loop, print the message provided in `js/index.js` 100 times.

### 08-icon-variety
Using a **for...of loop**, iterate through the classNames list and output an icon that corresponds to each font awesome class. Note that these icons are drawing from the <a href="https://fontawesome.com/icons?d=gallery&m=free" target="_blank">FontAwesome icons</a>. Feel free to switch them out.

### 09-bubbles
Using a **while loop**, render 200 bubbles. Note: this code uses a third-party library called <a href="http://paperjs.org/" target="_blank">Paper.js</a>, which makes it easier to use the html5 `<canvas>` tag.

### 10-different-color-bubbles
Using **any kind of loop**, render 200 bubbles, but make the bubbles different colors by selecting a random color from the colors array. Your solution should render bubbles with all 5 colors. Hint, you’ll need to figure out how to change the colors array index as you loop.

### 11-fish-left-right
Modify the code inside the onFrame event handler (lines 70-76) so that all of the fish move — not just the first 3. One thing to note here is that you can use canvas to add some whimsical effects w/o animation being the main event. 

**Optional:** If you want, you’re welcome to change the fish images, or to modify the number of fish that get created.

### 12-animated-bubbles
Similar code to the above. Please complete the following:
1. Modify the  createBubbles function so that it actually creates numBubbles bubbles (currently set to 100 bubbles).
2. Make all the bubbles move by modifying the code inside the onFrame event handler (lines 56-60) 
