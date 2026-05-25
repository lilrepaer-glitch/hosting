document.addEventListener('DOMContentLoaded', () => {
    const loader = document.querySelector('.sonic-loader');
    
    // Add loader-active class to body when loading starts
    document.documentElement.classList.add('loader-active');

    let progress = 0;
    const loadInterval = setInterval(() => {
        progress += 1;
        if(progress >= 100) {
            clearInterval(loadInterval);
            loader.style.transition = 'opacity 0.5s ease-out';
            loader.style.opacity = '0';
            
            loader.addEventListener('transitionend', () => {
                loader.style.display = 'none';
                // Remove loader-active class after transition
                document.documentElement.classList.remove('loader-active');
            });
        }
    }, 30);
});


import { yourServerName } from '../config.js';
document.title = `${yourServerName} - Vote`;


particlesJS("particles-js", {
    particles: {
        number: { value: 100, density: { enable: true, value_area: 800 } },
        color: { value: "#00a8ff" },
        shape: { type: "circle" },
        opacity: { value: 0.7, random: true },
        size: { value: 5, random: true },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#00a8ff",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 4,
            direction: "none",
            out_mode: "out",
            attract: { enable: true, rotateX: 600, rotateY: 600 }
        }
    },
    interactivity: {
        events: {
            onhover: { enable: true, mode: ["grab", "repulse"] },
            onclick: { enable: true, mode: "push" }
        },
        modes: {
            grab: { distance: 150, line_linked: { opacity: 0.8 } },
            repulse: { distance: 50, duration: 0.4 },
            push: { particles_nb: 3 }
        }
    }
});
