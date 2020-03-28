(function() {
    'use strict';
  
    let sections = {};
    let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    let prevScroll = scrollPosition;
    const nav = document.querySelector("nav");
    const aside = document.querySelector("aside");
    const sticky = nav.offsetTop;

    const stickyToggle = () => {
        if (window.pageYOffset > sticky) {
            nav.classList.add("sticky");
            if (aside) {
                aside.classList.add("sticky");
            }
            initPositions();    
        
        } else {
            nav.classList.remove("sticky");
            if (aside) {
                aside.classList.remove("sticky");
            }
            initPositions(); 
        }
    };

    const findElementByAttributeWorkaround = (attribute, value, element_type) => {
        // useful b/c querySelector breaks if ids start w/numbers:
        element_type = element_type || '*';
        const elements = document.getElementsByTagName(element_type);
        for (let i = 0; i < elements.length; i++)       {
            if (elements[i].getAttribute(attribute).includes(value)) { 
                return elements[i]; 
            }
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
            scrollToAnchor(ev);
        }
    });
    initPositions();
    
    window.onscroll = () => {
        scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
        for (let key in sections) {
            //console.log(scrollPosition + 10);
            if (sections[key] <= scrollPosition + 0) {
                const currentLink = document.querySelector('aside .active');
                if (currentLink) {
                    currentLink.setAttribute('class', ' ');
                }
                findElementByAttributeWorkaround('href', key, 'a').setAttribute('class', 'active');
            }
        }
        stickyToggle();
        prevScroll = scrollPosition;
    };
  })();
  