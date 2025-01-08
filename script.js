// script.js

// Loading Screen Handler
document.addEventListener('DOMContentLoaded', () => {
    const loadingScreen = document.querySelector('.loading-screen');
    
    // Hide loading screen after content loads
    window.addEventListener('load', () => {
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
        }, 1000);
    });
});

// Particles.js Configuration
particlesJS('particles-js', {
    particles: {
        number: {
            value: 450,
            density: { enable: true, value_area: 4500 }
        },
        color: { value: '#b026ff' },
        opacity: {
            value: 0.4,
            random: true,
            anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false }
        },
        size: {
            value: 11,
            random: false,
            anim: { enable: true, speed: 5, size_min: 0.1, sync: false }
        },
        line_linked: {
            enable: true,
            distance: 160,
            color: '#b026ff',
            opacity: 0.6,
            width: 4
        },
        move: {
            enable: true,
            speed: 2,
            random: true,
            out_mode: 'out'
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: { enable: true, mode: 'grab' },
            onclick: { enable: false },
            resize: true
        },
        modes: {
            grab: {
                distance: 108,
                line_linked: { opacity: 9 }
            }
        }
    },
    retina_detect: true
});

// Glitch Text Effect for Profile Name
const letters = "?AB%DE0324KL23OP]RS#U32-XYZ&";
let interval = null;

document.querySelector(".profile-name").onmouseover = (event) => {
    let iteration = 0;
    
    clearInterval(interval);
    
    interval = setInterval(() => {
        event.target.innerText = event.target.innerText
            .split("")
            .map((letter, index) => {
                if (index < iteration) {
                    return event.target.dataset.value[index];
                }
                return letters[Math.floor(Math.random() * 26)];
            })
            .join("");
        
        if (iteration >= event.target.dataset.value.length) {
            clearInterval(interval);
        }
        
        iteration += 1 / 2;
    }, 60);
};
