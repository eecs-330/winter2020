---
layout: assignment
title: JavaScript
abbreviation: HW5
type: individual
due_date: 2020-02-11
points: 15
draft: 1
---

## Learning Objectives
The goal of homework 5 is to introduce you to some of the common uses of JavaScript in frontend web development. In particular, you will be practicing the following:
1. Dynamically manipulating the DOM
2. Rendering HTML templates
3. Building event handlers to respond to user events
4. Leveraging data from external files using the ES6 fetch API

## Some Background Concepts

### CORS and Running a Local Server
```bash
# If Python version returned above is 3.X
python3 -m http.server
# On windows try "python" instead of "python3"
# If Python version returned above is 2.X
python -m SimpleHTTPServer
```

### REST API Endpoints

#### Search
```javascript
// note: id is the id of the album:
const endpoint = "https://www.apitutor.org/spotify/v1/albums/{id}/tracks";
fetch(endpoint)
    .then(response => response.json())
    .then((myJSON) => {
        console.log(myJSON);
    });
```