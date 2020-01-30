const loadCards = (photos) => {
    console.log(photos);

    // add a photo card to the DOM:
    let template = `
        <li class="card">
            <div class="image" style="background-image:url('${photos[0]}')"></div>
        </li>
    `;
    document.querySelector('.cards').innerHTML += template;

    // add another photo card to the DOM:
    let template = `
        <li class="card">
            <div class="image" style="background-image:url('${photos[1]}')"></div>
        </li>
    `;
    document.querySelector('.cards').innerHTML += template;
    
    // YOUR CODE HERE:
    // how could you use a for..of loop to do the same thing?

};

loadCards([
    'images/poppies.jpg',
    'images/dogwoods.jpg',
    'images/blossom.jpg',
    'images/field3.jpg',
    'images/field4.jpg',
    'images/branch.jpg',
    'images/red.jpg',
    'images/purple2.jpg',
    'images/field1.jpg',
    'images/purple.jpg',
    'images/jar.jpg',
    'images/green.jpg',
    'images/green1.jpg',
    'images/purple1.jpg',
    'images/magnolias.jpg',
    'images/daisy1.jpg'
]);
initCarousel();
