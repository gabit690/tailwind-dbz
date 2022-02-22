import capsule from './src/capsule.js';
import explosion from './src/explosion.js';
import smoke from './src/smoke.js'
import radar from './src/radar.js';

const showNextElement = (parent, nextElement, previousElement, delay) => {
    return new Promise(resolve => {
        setTimeout(() => {
            parent.replaceChild(nextElement, previousElement);
            resolve();
        }, delay);
    });
};

const changeLights = (lights, newClass, oldClass) => {
    for (const [key, light] of Object.entries(lights)) {
        light.classList.remove(oldClass);
        light.classList.add(newClass);
    }
};

const configRadar = () => {
    const radarButton = document.getElementById('radar__button');
    radarButton.addEventListener('click', () => {
        radarButton.classList.add('animate-[radar-pushed_.3s_linear_forwards]');
        setTimeout(() => {
            radarButton.classList.remove('animate-[radar-pushed_.3s_linear_forwards]');
        }, 300);
        radarButton.classList.toggle('actived--radar');
        const lights = document.getElementsByClassName('light');
        if (radarButton.classList.contains('actived--radar')) {
            changeLights(lights, 'animate-[blink_.8s_ease-in-out_infinite]', 'hidden');
        } else {
            changeLights(lights, 'hidden', 'animate-[blink_.8s_ease-in-out_infinite]');
        }
    });
};

const configElements = (parent, capsule, explosion, smoke, radar) => {
    parent.appendChild(capsule);
    const capsuleButton = document.getElementById('capsule__button');
    capsuleButton.addEventListener('click', () => {
        if (!capsuleButton.classList.contains('actived--capsule')) {
            capsuleButton.classList.add('actived--capsule', 'animate-[capsule-pushed_.3s_linear_forwards]');
            showNextElement(drawing, explosion, capsule, 3000)
            .then(() => showNextElement(drawing, smoke, explosion, 800))
            .then(() => showNextElement(drawing, radar, smoke, 1000))
            .then(() => configRadar());
        }
    });
};

window.addEventListener('DOMContentLoaded', () => {
    const drawing = document.getElementById('drawing');
    configElements(drawing, capsule, explosion, smoke, radar);
});
