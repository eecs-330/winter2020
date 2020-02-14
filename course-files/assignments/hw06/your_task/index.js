// This function demonstrates an alternative (and preferred) version of setting an element's innerHtml
const renderArtists = artists => {
    const featuredContent = document.getElementById("featured-content");
    let tabIndex = 0;
    for (const [artistName, imgUrl] of Object.entries(artists)) {
        const section = document.createElement("section");
        section.id = "artist-card";
        featuredContent.appendChild(section);

        const wrapper = document.createElement("div");
        wrapper.tabIndex = tabIndex; // Sets the order that screen readers read elements
        section.appendChild(wrapper);

        const img = document.createElement("img");
        img.src = imgUrl;
        wrapper.appendChild(img);

        const name = document.createElement("h3");
        name.textContent = artistName;
        wrapper.appendChild(name);

        const p = document.createElement("p");
        p.textContent = "Artist";
        wrapper.appendChild(p);

        const span = document.createElement("span");
        span.className = "play-button";
        wrapper.appendChild(span);

        const play = document.createElement("i");
        play.className = "material-icons";
        play.textContent = "play_arrow";
        span.appendChild(play);

        tabIndex += 1;
    }
};

const artists = {
    "Taylor Swift": "https://i.scdn.co/image/62b33d12e2b9a033cf77585f6e3d4b2c6b3a63a1",
    "Chance the Rapper": "https://i.scdn.co/image/0433f521b1fadf1d839b6e70c3914021f122901f",
    "BTS": "https://i.scdn.co/image/0c9057cb30520f9f883a220051260fc66a2f3ffa",
    "Lizzo": "https://i.scdn.co/image/e33e4245fe5901ed940ba95070bb8d56679b6fe0",
    "Rihanna": "https://i.scdn.co/image/1fc2f537d678d701d7d143a8fd4f0c2f29fbde22",
    "Ariana Grande": "https://i.scdn.co/image/b1dfbe843b0b9f54ab2e588f33e7637d2dab065a",
    "Billie Eilish": "https://i.scdn.co/image/2622edec99d68d1d141886be593c88cbe509f6d8",
    "Beyoncé": "https://i.scdn.co/image/9fef2047e4e3f05031807d5fa9e121b7862ba259",
    "Lil Nas X": "https://i.scdn.co/image/12d5ab979779aa41e697ce823328d527e643e4cf",
    "Travis Scott": "https://i.scdn.co/image/fec51156ed94b7ee30fbd4c7fd29b4a840e7daec"
};

window.addEventListener("load", () => {
    renderArtists(artists);
});
