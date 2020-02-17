---
layout: lecture-two-column
title: Graphic Design
type: lecture
draft: 0
description: |
    Visual design principles + in-class activity
due_date: 2020-02-17
slides_url: https://docs.google.com/presentation/d/1Z2S3WG6kU1_nf8G_0DDVZeiTq-gnTVe5gLF5-ylAvIs/edit?usp=sharing
readings:
  - title: "The Non-Designer's Design Book, Chapter 1"
    url: "https://canvas.northwestern.edu/files/8205184/download?download_frd=1"
    author: "Williams, Robin" 
    date: 2015

  - title: "The Non-Designer's Design Book, Chapter 2"
    url: "https://canvas.northwestern.edu/files/8205183/download?download_frd=1"
    author: "Williams, Robin" 
    date: 2015
---

Today we will be discussing some principles of good composition and visual design (which  will continue into next week).
<img style="width:600px;display:block;margin:auto;" src="{{site.baseurl}}/assets/images/lecture12/composition.png" />


## Activity: Using CSS to Create Good Composition
You're going try to use some CSS to create an image gallery with good composition. Remember some of the principles we've just gone over (in the Williams article):

* Proximity
* Alignment
* Repetition
* Contrast

These principles can be mixed and matched in many ways, and instantiated using size, color, margins, padding, fonts, and so forth.

### Your Task

{:.spaced}
1. Open the following <a href="https://codepen.io/vanwars/pen/vYOGbmL?editors=1000" target="_blank">Codepen</a>. You can either fork it and register for CodePen to save it, or download the files and edit them using a code editor.
2. Select a header and a body copy font from <a href="https://fonts.google.com/" target="_blank">Google Fonts</a>. Here is some <a href="https://codepen.io/vanwars/pen/gOpryzO?editors=0100" target="_blank">sample code</a> of how this is done.
3. Instantiate the principles of **proximity** and **alignment** to create nice photo cards that flow. Consider using flexbox (see <a href="https://codepen.io/vanwars/pen/EJQwej?editors=0100" target="_blank">this sample</a>).
4. Modify the HTML / CSS so that there is one featured photo. Use the principle of **contrast** to make it stand out.
5. When you're done, paste a link to your file (ideally on CodePen) in <a href="https://docs.google.com/document/d/1fA4H-EnNbrQYhrsWHYniG6vUECCbwXsSmd2cgKitb_0/edit" target="_blank">this Google Doc</a> so that we can take a look at different techniques. You will continue working on this next week, so make sure you keep track of your files.

> #### Tips 
> * Use whitespace liberally
> * Play around with different font weights (and choose a font that supports many weights).
> * Try not to use any borders. Let the whitespace shape the sections.
> * For now, don't use color. We'll do that next week!


## CSS Review

### Text Properties
Just a reminder of a few useful text properties for creating nice, readable web pages. Also a note on units:
* **em:** units are relative to the font size of the current element (2em means 2 times the size of the current font)
* **rem:** units are relative to the font size of the root element
* For custom fonts, use <a href="https://fonts.google.com/" target="_blank">Google Fonts</a>. Once you've selected one, scroll down to see suggested parings.

```css
.body-copy
    font-family: "Times New Roman", Times, serif;
    font-style: italic;
    font-weight: bold;
    color: #999;            // font color
    text-align: left;       // left is default
    letter-spacing: 1.5em;  // space between letters
    line-height: 120%;      // space between lines
    word-spacing: 5px;      // Space between words (usually default is good)
    font-size: 1.1em;       // for responsive design, use em units
}
```

### The Box Model
Just a reminder of a few useful text properties for creating nice, readable web pages. Also a note on units:
* **em:** units are relative to the font size of the current element (2em means 2 times the size of the current font)
* **rem:** units are relative to the font size of the root element

```css
.page-section {
    box-sizing: border-box;     // "border-box" does not count padding / border in size calculations
    border: dotted 1px #CCC;    
    padding: 10px;              // note: also padding-right, padding-left, padding-top, padding-bottom
    margin: 10px;               // note: also margin-right, margin-left, margin-top, margin-bottom
    width: 50vh;                // vh stands for viewport height, vw stands for viewport width
}
```

### Flexbox
Flexbox is useful when you have a series of elements that you want to position in a way that flows (flexibly grows and shrinks according to the number of elements and according to the size of the container). To do this, there is typically:
1. A parent container that is assigned a `display` property of `flex` and a `flex-wrap` property of `wrap`
2. A set of child elements where the sizing properties are set.
3. See <a href="https://codepen.io/vanwars/pen/EJQwej?editors=0100" target="_blank">this sample</a> for guidance.