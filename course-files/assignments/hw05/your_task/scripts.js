const showArtists = (e) => {
    const times = 20;
    const elem = document.querySelector('#featured-content');
    elem.innerHTML = "";
    data = {
        imageURL: "https://i.scdn.co/image/62b33d12e2b9a033cf77585f6e3d4b2c6b3a63a1",
        artist: "Taylor Swift"
    };
    for (let i = 0; i < times; i++) {
        elem.innerHTML += getCardHTML(data);
    } 
    if (e) { e.preventDefault(); }
};

const showAlbums = (e) => {
    const times = 20;
    const elem = document.querySelector('#featured-content');
    elem.innerHTML = "";
    data = {
        imageURL: "https://i.scdn.co/image/0c9057cb30520f9f883a220051260fc66a2f3ffa",
        artist: "BTS"
    };
    for (let i = 0; i < times; i++) {
        elem.innerHTML += getCardHTML(data);
    } 
    if (e) { e.preventDefault(); }
};

const getCardHTML = (data) => {
    return `<section class="artist-card">
        <div>
            <img src="${data.imageURL}" />
            <h3>${data.artist}</h3>
            <div class="footer">
                <p>Artist</p>
                <span class="play-button"><i class="fas fa-play"></i></span>
            </div>
        </div>
    </section>`;
}

document.querySelector('.artists').onclick = showArtists;
document.querySelector('.albums').onclick = showAlbums;

showArtists();