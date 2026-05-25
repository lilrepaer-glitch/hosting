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



window.onbeforeunload = () => {
    window.scrollTo(0, 0);
};
// Navigation menu toggle for mobile
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links a');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');

        // Animate hamburger
        const bars = document.querySelectorAll('.bar');
        bars[0].classList.toggle('active');
        bars[1].classList.toggle('active');
        bars[2].classList.toggle('active');
    });
}

// Close mobile menu when clicking on a nav link
navLinksItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Select all elements with class "copyIP"
import { ServerIP } from '../config.js'; // Import Server IP from config.js

document.querySelectorAll('.copyIP').forEach(button => {
    button.addEventListener('click', () => {
        // Use ServerIP from config.js
        const serverIP = ServerIP || 'Your Server Ip';

        navigator.clipboard.writeText(serverIP)
            .then(() => {
                const originalText = button.textContent;
                button.textContent = 'IP Copied!';

                setTimeout(() => {
                    button.textContent = originalText;
                }, 2000);
            })
            .catch(err => {
                console.error('Failed to copy IP: ', err);
            });
    });
});

import { yourServerName } from '../config.js';
document.title = `${yourServerName} - Home`;


// Start animations when page loads
document.addEventListener('DOMContentLoaded', () => {

    // Add active class to nav links based on scroll position
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });
});

// Add smooth reveal animations for sections
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements to animate
document.querySelectorAll('.about-content, .feature, .gamemode-card, .vote-card').forEach(el => {
    el.classList.add('animate');
    observer.observe(el);
});

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
  .animate {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  
  .reveal {
    opacity: 1;
    transform: translateY(0);
  }
  
  .bar.active:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }
  
  .bar.active:nth-child(2) {
    opacity: 0;
  }
  
  .bar.active:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }
`;
document.head.appendChild(style);


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
