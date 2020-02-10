---
layout: assignment
title: JavaScript
abbreviation: HW5
type: individual
due_date: 2020-02-25
points: 25
draft: 1
---

<style>
    img {
        max-width: 700px;
        max-height: 300px;
    }
</style>


## Learning Objectives
The goal of homework 5 is to introduce you to some of the common uses of JavaScript in frontend web development. In particular, you will be practicing the following:
1. Dynamically manipulating the DOM
2. Rendering HTML templates
3. Building event handlers to respond to user events
4. Leveraging data from external files using the ES6 fetch API

## Background
In order to complete this assignment, you will be using the JavaScript fetch API and a proxy server that queries Spotify. Relevant lectures and labs:
* AAA
* BBB

### REST API Endpoints
Spotify makes many resources available to its developer community through its REST API. For this assignment, we will only be querying resources (i.e. using HTTP GET requests) using the search endpoint.

* To search for artists:<br><a target="_blank" href="https://www.apitutor.org/spotify/simple/v1/search?type=artist&q=BTS">https://www.apitutor.org/spotify/simple/v1/search?type=artist&q=BTS</a>
* To search for albums:<br><a target="_blank" href="https://www.apitutor.org/spotify/simple/v1/search?type=album&q=BTS">https://www.apitutor.org/spotify/simple/v1/search?type=album&q=BTS</a>
* To search for tracks:<br><a target="_blank" href="https://www.apitutor.org/spotify/simple/v1/search?type=track&q=BTS">https://www.apitutor.org/spotify/simple/v1/search?type=track&q=BTS</a>


### Files Provided
For this task, I have created the HTML and CSS widgets for you. If you open `sample/index.html` in your web browser, you will see an example of how I want your final interface to look (<a href="" target="_blank">preview</a>. However, data from BTS is hardcoded in the interface. I want you to make it so that music / media from ANY artist can be searched. That is, each of the HTML widgets below must be converted into templates that can bind to data from Spotify.

#### Artist Card
Note that the values for `id` `src` `href` and `h3's inner HTML` should be rendered dynamically using live Spotify data.

```html
<section class="artist-card" id="3Nrfpe0tUJi4K4DXYWgMUX">
    <div>
        <img src="https://i.scdn.co/image/0c9057cb30520f9f883a220051260fc66a2f3ffa">
        <h3>BTS</h3>
        <div class="footer">
            <a href="https://open.spotify.com/artist/3Nrfpe0tUJi4K4DXYWgMUX" target="_blank">
                view on spotify
            </a>
        </div>
    </div>
</section>
```

#### Track Item
Note that the values for `data-preview-track` `src` `h3's inner HTML` and `p's inner HTML` should be rendered dynamically using live Spotify data.

```html
<section class="track-item preview" data-preview-track="https://p.scdn.co/mp3-preview/879c7106422b0b53852209da6a63210be7e09b01?cid=9697a3a271d24deea38f8b7fbfa0e13c">
    <img src="https://i.scdn.co/image/1aacaefb0ef07755e5a155d96ee7f1073063e428">
    <i class="fas play-track fa-play" aria-hidden="true"></i>
    <div class="label">
        <h3>Black Swan</h3>
        <p>
            BTS
        </p>
    </div>
</section>
```

#### Album Card
Note that the values for `id` `src` `h3's inner HTML` and `href` should be rendered dynamically using live Spotify data.

```html
<section class="album-card" id="2lATw9ZAVp7ILQcOKPCPqp">
    <div>
        <img src="https://i.scdn.co/image/ab67616d0000b2736feb6d9ed7891f40e9a524dd">
        <h3>Love Yourself 結 'Answer'</h3>
        <div class="footer">
            <a href="https://open.spotify.com/album/2lATw9ZAVp7ILQcOKPCPqp" target="_blank">
                view on spotify
            </a>
        </div>
    </div>
</section>
```

## Assignment Instructions
In this assignment, you will use JavaScript to make the Spotify search/browse interface work. To do this, you will be editing files in the `your_task` folder. You are welcome (and are encouraged to) use any HTML code from the `sample/index.html`. Please complete the five tasks listed below, following the guidelines listed:

> ### Rules
> * You **may not use any external libraries** other than the audio-player.js file that I made for you.
> * You can make as many helper functions as you want to complete the assignment.
> * All server queries must be done using the **JavaScript fetch API**.



### Step #1: Display Artist
Implement the `getArtist` function. This function should:

* Query the Spotify search endpoint with the appropriate query parameters using the built-in `fetch` function. Example:<br><a target="_blank" href="https://www.apitutor.org/spotify/simple/v1/search?type=artist&q=BTS">https://www.apitutor.org/spotify/simple/v1/search?type=artist&q=BTS</a>
* Display the first artist that gets returned. In other words, rather than displaying all of the artists, you will just display the first one.
* If no artists are returned for the search query, display a message that indicates that no artist has been returned.
* **NOTE:** The artist card should look like the one shown in `sample/index.html`.


<img src="{{site.baseurl}}/assets/images/hw05/artist_card.png" />

  
### Step #2: Display Tracks
Implement the `getTracks` function. This function should:
* Query the Spotify search endpoint with the appropriate query parameters. Example:<br><a target="_blank" href="https://www.apitutor.org/spotify/simple/v1/search?type=track&q=BTS">https://www.apitutor.org/spotify/simple/v1/search?type=track&q=BTS</a>
* Display the first five tracks that gets returned (not all of them -- just the first five).
* **NOTE:** The tracks should look like the ones shown in `sample/index.html`. Note the hover effects.
* If no tracks are returned for the search query, display a message like "No tracks were returned."
* Also, ensure that your code still works if less than 5 tracks get returned.

<img src="{{site.baseurl}}/assets/images/hw05/tracks.png" />


### Step #3: Display Albums
Implement the `getAlbums` function. This function should:
* Query the Spotify search endpoint with the appropriate query parameters. Example:<br><a target="_blank" href="https://www.apitutor.org/spotify/simple/v1/search?type=album&q=BTS">https://www.apitutor.org/spotify/simple/v1/search?type=album&q=BTS</a>
* Display all of the albums that get returned.
* **NOTE:** The album cards should look like the ones shown in `sample/index.html`.
* If no albums are returned for the search query, display a message like "No albums were returned."

<img src="{{site.baseurl}}/assets/images/hw05/albums.png" />

### Step #4: Connect Tracks to the Audio Player
abc

## Extra Credit
The following enhancements can be completed for extra credit. Note: You are only entitled to 6 points extra credit in this class (3 percentage points).

## Rubric

{:.checkbox-list}
* Artist **(5 points)**
   * A
   * B
* Tracks **(5 points)**
   * A
   * B
* Albums **(5 points)**
   * A
   * B
* Play Audio Event Handler **(5 points)**
   * A
   * B
   * track preview updated in footer when user clicks a track
* Overall guidelines followed **(5 points)**
   * Used fetch API (no jQuery or other third-party libraries)

## What to Turn In
Turn in a zip file of the your_task files, with your updated `js/scripts.js` file, and the original `js/audio-player.js` `index.html` and `style.css` files. You ***can*** make edits to any of the other files, but it shouldn't be necessary.