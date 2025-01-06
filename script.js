// Mouse Tracker Script
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', (event) => {
    cursor.style.transform = `translate(${event.clientX - cursor.offsetWidth / 2}px, ${event.clientY - cursor.offsetHeight / 2}px)`;
});

// Particles.js Config
particlesJS('particles-js', {
    particles: {
        number: {
            value: 200,
            density: { enable: true, value_area: 1000 }
        },
        color: { value: '#b026ff' },
        opacity: {
            value: 0.4,
            random: true,
            anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false }
        },
        size: {
            value: 4.6,
            random: false,
            anim: { enable: true, speed: 5, size_min: 0.1, sync: false }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#b026ff',
            opacity: 0.6,
            width: 1
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
                distance: 200,
                line_linked: { opacity: 1 }
            }
        }
    },
    retina_detect: true
});
