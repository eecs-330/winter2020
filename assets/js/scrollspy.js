(function() {
    'use strict';
  
    let sections = {};
    const container = document.querySelector('.two-column');
    const toggleHeader = (prevScroll, scrollPosition) => {
        if (prevScroll < scrollPosition) {
            hideHeader();
            setTimeout(initPositions, 500);
        } else if (scrollPosition < 100) {
            showHeader();
            setTimeout(initPositions, 500);
        }
    };

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
    };


    document.querySelectorAll("aside a").forEach(e => {
        e.onclick = (ev) => {
            const currentLink = document.querySelector('aside .active');
            if (currentLink) {
                currentLink.setAttribute('class', ' ');
            }
            ev.target.classList.add('active');
            // ev.stopPropogation();
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
            if (sections[key] <= scrollPosition + 30) {
                const currentLink = document.querySelector('aside .active');
                if (currentLink) {
                    currentLink.setAttribute('class', ' ');
                }
                const selector = 'a[href*=' + key + ']';
                console.log(selector);
                document.querySelector(selector).setAttribute('class', 'active');
            }
        }
        prevScroll = scrollPosition;
    };
  })();
  