---
layout: lecture
title: JavaScript & REST
type: lecture
draft: 0
slides_url: https://docs.google.com/presentation/d/1ybf_UOEwh58sB6bjfCGnWt-Y8M8SBp1y-tCpXwNRZ38/edit?usp=sharing
lecture_files: "../course-files/lectures/lecture10.zip"
description: |
    Working with REST APIs (querying servers) and the JavaScript fetch API.
due_date: 2020-02-10
---

Today, you will do an in-class activity to practice working with data from various popular REST APIs. This activity will give you practice with the following concepts:
1. Understanding how to query Third-Party APIs
2. More practice with looping through data
3. More practice using ES6 templates

### Instructions
1. Pick two of the APIs that are available in the starter files (Flickr, Spotify, Twitter, Yelp, and YouTube) — whichever ones are most interesting to you.
2. Update the "search" function (i.e. event handler), located in js/index.js, so that the search honors the search term that the user enters into the search box. For instance, if I selected Spotify as my API, and the user entered the search term "BTS," my app should retrieve a list of BTS tracks.
Note: this requires that you dynamically modify the url so that the query parameters reflect the user's preferences.
3. Update the "displayResults" function so that instead of displaying raw JSON data, you display HTML that presents the data in a way that makes sense. For instance, if you selected Spotify, I would expect to see an <audio> or <iframe> tag so that a user could listen to a song, and an <img> tag to display the album art.
4. Style each of your interfaces using CSS

### If Time...
#### 5. Create a “Mashup”
“Mashups” are apps that combine data from two or more services to create an integrated experience. For instance, if I were making a “music news” app, I might combine information about my favorite band, BTS (jk), by pulling down data from Twitter, Spotify, and YouTube to create a multimedia showcase. This would entail issuing three queries to three different APIs, and then outputting that information in an interesting way. Give it a shot.

#### 6. Integrate an interesting UI detail 
There are a million different directions you could pursue for this. Examples: 
* Use the latitude and longitude data from Yelp to create an interactive Map, using Leaflet (see demo) or the Google Maps API.
* Convert the Flickr images to an interactive gallery (like we’ve been exploring over the past two weeks).

#### 7. Create a responsive design
Create and implement an interesting desktop and mobile/responsive design using HTML and CSS. Perhaps you could try to emulate a screen from the provider (to think about how they did the things they did), or build your own