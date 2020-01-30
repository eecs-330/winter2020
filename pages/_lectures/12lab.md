---
layout: lecture
title: JavaScript Lab
type: lab
draft: 0
due_date: 2020-01-31
toc: 1
description: |
    Practice with DOM manipulation, template literals, and fetch
---

In this assignment, you will be completing a few different exercises to practice using loops to update the DOM. Please download the <a class="lab" href="/winter2020/course-files/assignments/studio04.zip">studio 04 starter files <i class="fas fa-link"></i></a> and save them to your repo folder. Then, open the entire hw05 folder in your code editor and complete the following exercises:

### Part 1: Determinate Loops
Determinate loops are loops that iterate over a finite list of items. In JavaScript, one way to do this is by making use of the **for..of** loop. More information on for...of loops can be found [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of). Please try and complete the following exercises (working from the starter files):

#### 01-unique-messages 
Using a for/of loop, print a message to each person listed in the names list.

#### 02-unique-messages-objects
Using a **for...of loop**, write out each person’s avatar, name, and score, based on `people` list (of objects).

#### 03-unique-messages-template-literal
Using a **for...of loop** and a template literal, write out each person’s avatar, name, and score, based on the `people` list.

#### 04-add-numbers
Using a **for...of loop**, iterate through the list of numbers and add them all together. Then, write the final result to the document.

#### 05-photo-gallery
Modify the `loadCards` function so that it uses a **for...of loop** to generate a card for each photo in the list.

#### 06-gallery-ajax
Update the `loadCars()` and `loadBikes()` functions so that they loads photos from the cars and bikes data files (respectively).


### Part 2: Indeterminate Loops
Indeterminate Loops are loops that can repeat any number of times (not constrained by the length of a list or collection). Please try and complete the following exercises (working from the starter files):

#### 07-identical icons
Using a while loop, print the message provided in `js/index.js` 100 times.

#### 08-icon-variety
Using a **for...of loop**, iterate through the classNames list and output an icon that corresponds to each font awesome class. Note that these icons are drawing from the <a href="https://fontawesome.com/icons?d=gallery&m=free" target="_blank">FontAwesome icons</a>. Feel free to switch them out.

#### 09-bubbles
Using a **while loop**, render 200 bubbles. Note: this code uses a third-party library called <a href="http://paperjs.org/" target="_blank">Paper.js</a>, which makes it easier to use the html5 `<canvas>` tag.

#### 10-different-color-bubbles
Using **any kind of loop**, render 200 bubbles, but make the bubbles different colors by selecting a random color from the colors array. Your solution should render bubbles with all 5 colors. Hint, you’ll need to figure out how to change the colors array index as you loop.

#### 11-fish-left-right
Modify the code inside the onFrame event handler (lines 70-76) so that all of the fish move — not just the first 3. One thing to note here is that you can use canvas to add some whimsical effects w/o animation being the main event. 

**Optional:** If you want, you’re welcome to change the fish images, or to modify the number of fish that get created.

#### 12-animated-bubbles
Similar code to the above. Please complete the following:
1. Modify the  createBubbles function so that it actually creates numBubbles bubbles (currently set to 100 bubbles).
2. Make all the bubbles move by modifying the code inside the onFrame event handler (lines 56-60) 
