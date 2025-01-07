// Mouse Tracker Script
const cursor = document.getElementById("cursor");

document.addEventListener("mousemove", (event) => {
    cursor.style.transform = `translate(${event.clientX - cursor.offsetWidth / 2}px, ${event.clientY - cursor.offsetHeight / 2}px)`;
});


// Particles.js Config
particlesJS('particles-js', {
    particles: {
        number: {
            value: 450, // Increased the number of particles to make it look bigger
            density: { enable: true, value_area: 4500 } // Expanded the area for better coverage
        },
        color: { value: '#b026ff' },
        opacity: {
            value: 0.4,
            random: true,
            anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false }
        },
        size: {
            value: 11, // Made particles larger
            random: false,
            anim: { enable: true, speed: 5, size_min: 0.1, sync: false }
        },
        line_linked: {
            enable: true,
            distance: 160, // Increased distance to match larger particles
            color: '#b026ff',
            opacity: 0.6,
            width: 4 // Increased line width for better visibility
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
                distance: 108, // Increased grab distance to match larger scale
                line_linked: { opacity: 9 }
            }
        }
    },
    retina_detect: true
});

// Hover Animation for Profile Name
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
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

        iteration += 1 / 4; // Controls the speed of iteration
    }, 40); // Interval in milliseconds
};
