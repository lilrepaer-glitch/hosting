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


import { staffData, rankColors } from '../config.js'; // Adjust the path to the root

const staffContainer = document.getElementById("staff-container");

Object.keys(staffData).forEach(rank => {
    const members = staffData[rank];
    if (members.length > 0) {
        const section = document.createElement("div");
        section.className = "staff-section";
        section.style.borderLeft = `5px solid ${rankColors[rank]}`;

        const title = document.createElement("h2");
        title.className = "staff-title";
        title.innerText = rank;
        title.style.color = rankColors[rank];

        const memberList = document.createElement("div");
        memberList.className = "staff-list";

        members.forEach(username => {
            const memberDiv = document.createElement("div");
            memberDiv.className = "staff-member";

            const skinImg = document.createElement("img");
            skinImg.src = `https://mc-heads.net/avatar/${username}`;
            skinImg.alt = username;
            
            const name = document.createElement("p");
            name.className = "staff-name";
            name.innerText = username;

            memberDiv.appendChild(skinImg);
            memberDiv.appendChild(name);
            memberList.appendChild(memberDiv);
        });

        section.appendChild(title);
        section.appendChild(memberList);
        staffContainer.appendChild(section);
    }
});


import { yourServerName } from '../config.js';
document.title = `${yourServerName} - Staff`;


window.onbeforeunload = () => {
    window.scrollTo(0, 0);
};
// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links li a');
const bars = document.querySelectorAll('.bar');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
        
        // Toggle body overflow when menu is open
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : 'auto';
    });
}

// Close menu when clicking links
navLinksItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar') && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});
import { ServerIP } from '../config.js'; // Adjust path if needed

document.addEventListener("DOMContentLoaded", () => {
    // Set the server IP dynamically
    document.querySelector('.server-ip').textContent = ServerIP;

    document.querySelector('.copy-ip').addEventListener('click', () => {
        const ip = document.querySelector('.server-ip');

        navigator.clipboard.writeText(ServerIP) // Copy from config.js
            .then(() => {
                const originalText = ip.textContent;
                ip.textContent = 'Copied!';
                
                setTimeout(() => {
                    ip.textContent = originalText;
                }, 2000);
            })
            .catch(err => {
                console.error('Failed to copy IP:', err);
            });
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
