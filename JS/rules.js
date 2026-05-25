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
document.title = `${yourServerName} - Rules`;


document.addEventListener("DOMContentLoaded", () => {
    const revealElements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach((el) => observer.observe(el));
});


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


// Navigation menu toggle for mobile
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const bars = document.querySelectorAll('.bar');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    bars.forEach(bar => bar.classList.toggle('active'));
});

// Close menu when clicking on a nav link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        bars.forEach(bar => bar.classList.remove('active'));
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


import { rules } from "../config.js"; // Correct import

document.addEventListener("DOMContentLoaded", () => {
    const rulesList = document.querySelector(".rules-list");

    if (!rulesList) return;

    rulesList.innerHTML = ""; // Clear existing rules

    rules.rulesList.forEach(ruleObj => {
        const ruleItem = document.createElement("li");
        ruleItem.classList.add("rule-item");
        ruleItem.innerHTML = `
            <div class="rule-title">
                <i class="fas fa-exclamation-triangle"></i> ${ruleObj.rule}
            </div>
            <div class="rule-details">
                <p><strong>Details:</strong> ${ruleObj.details}</p>
                <p><strong>Punishment:</strong> ${ruleObj.punishment}</p>
            </div>
        `;
        rulesList.appendChild(ruleItem);
    });
});





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
