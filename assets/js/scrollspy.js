(function() {
    'use strict';
  
    let sections = {};
    const container = document.querySelector('.two-column');
    const toggleHeader = (prevScroll, scrollPosition) => {
        if (prevScroll < scrollPosition) {
            hideHeader();
            setTimeout(initPositions, 550);
        } else if (scrollPosition < 100) {
            showHeader();
            setTimeout(initPositions, 550);
        }
    };


    const scrollToAnchor = (ev) => {
        const distanceToTop = (el) => {
            return Math.floor(el.getBoundingClientRect().top);
        };
        var targetID = ev.target.getAttribute('href');
        const targetAnchor = document.querySelector(targetID);
        window.scrollBy({ top: distanceToTop(targetAnchor), left: 0, behavior: 'smooth' });
        ev.preventDefault();
    }

    const hideHeader = () => {
        container.classList.add("scrollUp");
    };

    const showHeader = () => {
        container.classList.remove("scrollUp");
    }
    const initPositions = () => {
        sections = {};
        document.querySelectorAll("h1, h2, h3, h4, h5").forEach(element => {
            // console.log(e.id, e.offsetTop);
            if (element.id.length > 0) {
                sections[element.id] = element.offsetTop - element.clientTop;
            }
        });
        // console.log(sections);
    };


    document.querySelectorAll("aside a").forEach(e => {
        e.onclick = (ev) => {
            // console.log('clicked');
            // const currentLink = document.querySelector('aside .active');
            // if (currentLink) {
            //     currentLink.setAttribute('class', ' ');
            // }
            // ev.target.classList.add('active');
            scrollToAnchor(ev);
        }
    });
    initPositions();
    let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    let prevScroll = scrollPosition;
    if (scrollPosition > 120) {
        hideHeader();
    };
    window.onscroll = () => {
        scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
        toggleHeader(prevScroll, scrollPosition);
        for (let key in sections) {
            // console.log(scrollPosition + 30);
            if (sections[key] <= scrollPosition + 30) {
                const currentLink = document.querySelector('aside .active');
                if (currentLink) {
                    currentLink.setAttribute('class', ' ');
                }
                const selector = 'a[href*=' + key + ']';
                // console.log(selector);
                document.querySelector(selector).setAttribute('class', 'active');
            }
        }
        prevScroll = scrollPosition;
    };
  })();
  