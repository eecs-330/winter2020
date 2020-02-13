---
layout: assignment
title: Accessible Web Development
abbreviation: HW6
type: individual
due_date: 2020-02-27
files: course-files/assignments/hw07.zip
ordering: 2
points: 15
draft: 0
---
<style>
    img {
        max-width: 1000px;
        max-height: 600px;
    }
</style>

## Background

### Learning Objectives

The goal of this assignment is to get you thinking about designing websites such that they are accessible to people of different abilities.
As web designers, we have the responsibility to make sure that everyone has access to what we create regardless of ability, context, or situation.

If you haven't already, go through the [Lynda.com HTML/CSS Tutorial][Lynda] discussing structuring web content.
This whole section is super important - make sure to get through at least the tutorial on on [WAI-ARIA roles][Lynda WAI-ARIA]. 

### WCAG

The Web Content Accessibility Guidelines (WCAG) are a set of web accessibility guidelines published by the Web Accessibility Initiative (WAI) of the World Wide Web Consortium (W3C), the main international standards organization for the Internet.
They are a set of recommendations for making Web content more accessible, primarily for people with disabilities—but also for all user agents, including highly limited devices, such as mobile phones.

There are three different levels of standards that WCAG2 (the newest set of standards) proposes: A, AA, and AAA, where A has the lightest requirements and AAA the heaviest.
It's recommended that all web content to conform to at least WCAG2 AA guidelines, which means that all A and AA guidelines are followed.
You can find a quick reference to the WCAG guidelines [here][WCAG Quickref].

## Part 1

Your job for this part of the assignment is to edit the Spotify interface you built in HW5 to conform to WCAG guidelines.
This will give you some experience with using accessibility regulations in a practical setting and prepare you for building your final projects in an accessible manner.

### Lighthouse

![Lighthouse Score Report: Accessibility Score 61 out of 100][lighthouse-img]

For this assignment, we will be using the [Lighthouse][Lighthouse] Chrome extension as measure of webpage accessibility.
To use Lighthouse, download the Chrome extension and create a report while your webpage is open.
A new window will open with scores for various categories.

The score that we care about here is Accessibility. If your webpage scores a 98 or above, you'll get full points for this part of the assignment.

Note: just because your webpage scores highly doesn't necessarily mean it's truly accessible.
Try to follow WCAG AA guidelines as closely as possible when redesigning your page!

### Grading

{:.checkbox-list}
* Spotify UI:
  * Lighthouse Score >= 98 **(5 pts)**

## Part 2

For the second part of this assignment, your job is to find an interface that fails to follow one or more accessibility standards.
These standards can be found through navigating the interfaces yourself or inspecting the source code of the website.

You have two options for this part of the assignment, which are detailed below and both worth the same number of points overall. *You only need to do one of the two options; doing both won't get you extra points*.

### Option 1: Interface Critique

**Write a paper critiquing the accessibility of the website you chose.**
This paper should include a discussion of the site's purpose, user goals, and interface strengths and flaws.

Feel free to be creative with your papers!
Some ideas for paper topics (feel free to use any number of these or craft your own!):

* Inspect the source code of a website and point out WCAG rules it doesn't follow and how this could be fixed.
* Discuss accessibility problems with the interface that may not fall under WCAG guidelines (i.e. usability, page structure. etc.)
* Try navigating the interface using only a screen reader and talk about the experience
  * Mac: [VoiceOver][VoiceOver]
  * Windows: [NVDA][NVDA]
* Conduct research about the company or site's history with legal issues surrounding web accessibility (e.g. [Target][Target])

In your analysis, you should read and cite *at least 4* external articles to support your arguments (not counting the website you're critiquing itself).

#### Submission Checklist

* Reflection papers should be at least 750 words, double spaced, 12-point font, Times New Roman
* Papers should be converted to PDF format
* Make sure your name and section are listed at the top of your submission
* Cited *at least 4* external articles (inline citations are fine)

### Option 2: Interface Recreation

**Recreate an accessible version of your chosen website.**
Your interface can either be a faithful recreation of the website with accessibility standards met or a redesign of the interface that is more inherently accessible in page structure and navigation.

You can use any method you want in order to complete this website, whether it be directly copying source code or writing your files from scratch. We will be checking for cleanness and simplicity, as well as a 98 score on Lighthouse.

The interface that you submit *does not need to be functional*. We are just looking for accessible design here, not functionality. However, if one or more of the major accessibility-related problems of the original website is tied to functionality, you may want to include a simplified version of that functionality (by using hard-coded data, etc).

At the top level of your project directory, include a file `README.md` containing the following:
* Your name and discussion section
* The name of the website you're recreating
* A list of the accessibility problems you found in the original website
* A short description of what modifications you made and why

Your project should follow the directory structure below:

```
YOURNAME_part2
│   README.md
│   index.html
└───css
│   │   index.css
└───js
    │   index.js
    │   script_1.js
    |   script_2.js
    |   ...
```

#### Submission Checklist

* Project should be submitted as a zip file named `YOURNAME_part2`
* README.md contained in top level of project directory
* Interface loads and works correctly on Google Chrome

### Grading

Whichever assignment you choose to submit will be worth 10 points.

{:.checkbox-list}
* Interface Critique:
  * Discusses the site's purpose and user goals **(1 pt)**
  * Identifies and discusses at least 3 interface problems **(2 pts)**
  * Cites at least 4 external sources meaningfully **(2 pts)**
  * Paper is at least 750 words **(1 pts)**
  * Quality of discussion and writing **(4 pts)**
* Interface Recreation:
  * Interface and code are clean and professional **(3 pts)**
  * README.md
    * List of accessibility problems **(1 pt)**
    * Description of modifications **(2 pts)**
  * Lighthouse Score >= 98 **(5 pts)**

## Optional Readings & Resources

Below are some fantastic (and totally optional) readings about the current state and future of accessible design:

* [Beyond Automated Accessibility Testing][Beyond Automation] - Manuel Matuzovic
* [Inclusive Design, Accessible Design, Universal Design: What's What?][Holmes] - Kat Holmes
* [Understanding Accessibility in Collaborative Writing for People with Vision Impairments][Collab] - Das, M., Gergle, D., and Piper, A.M.
* [WebinSitu: A Comparative Analysis of Blind and Sighted Browsing Behavior][WebinSitu] - Jeffrey P. Bigham

Some labs at NU that are working with HCI and accessible design:
* [Inclusive Technology Lab][ITL]
* [TIDAL Lab][TIDAL]
* [Tiilt Lab][Tiilt]

## What to Turn In

* A zip file of the edited `your_task` files
* A PDF version of your interface critique OR a zip file `YOURNAME_part2` containing the neccessary HTML, CSS, and/or JS files for your interface reconstruction

[Beyond Automation]: https://www.matuzo.at/blog/beyond-automatic-accessibility-testing-6-things-i-check-on-every-website-i-build/
[Collab]: https://dl.acm.org/doi/10.1145/3359293
[Holmes]: https://www.fastcompany.com/90243282/the-no-1-thing-youre-getting-wrong-about-inclusive-design
[ITL]: https://inclusive.northwestern.edu
[Lighthouse]: https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=en
[Lynda]: https://www.linkedin.com/learning/html-essential-training/the-value-of-structure?u=75814418
[Lynda WAI-ARIA]: https://www.linkedin.com/learning/html-essential-training/using-wai-aria-roles?u=75814418
[NVDA]: https://www.nvaccess.org/download/
[Target]: https://arstechnica.com/uncategorized/2008/08/target-to-pay-6-million-to-settle-site-accessibility-suit/
[TIDAL]: https://tidal.northwestern.edu
[Tiilt]: https://tiilt.northwestern.edu/projects/
[VoiceOver]: https://www.applevis.com/guides/beginners-guide-using-macos-voiceover
[WCAG Quickref]: https://www.w3.org/WAI/WCAG21/quickref/
[WebinSitu]: https://dl.acm.org/doi/pdf/10.1145/1296843.1296854

[lighthouse-img]: {{site.baseurl}}/assets/images/hw06/lighthouse.png
