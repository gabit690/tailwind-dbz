import capsule from './src/capsule.js';
import explosion from './src/explosion.js';
import smoke from './src/smoke.js'
import Timer from './src/timer.js'
import radar from './src/radar.js';

const addSoundEffect = (audioPath, removeAudio = true) => {
    const newAudio = document.createElement('audio');
    newAudio.setAttribute('src', audioPath);
    document.body.appendChild(newAudio);
    newAudio.play();
    if (removeAudio) {
        newAudio.addEventListener('ended', () => {
            document.body.removeChild(newAudio);
        });
    }
};

const showNextElement = (parent, nextElement, previousElement, delay) => {
    return new Promise(resolve => {
        setTimeout(() => {
            parent.replaceChild(nextElement, previousElement);
            resolve();
        }, delay);
    });
};

const configRadar = () => {
    const radarButton = document.getElementById('radar__button');
    const activateLights = new Timer(() => {
        addSoundEffect('./audio/beep.m4a');
        document.getElementsByTagName('audio')[0].play();
    }, 1000);
    radarButton.addEventListener('click', () => {
        if (!radarButton.classList.contains('actived--radar')) {
            radarButton.classList.add('actived--radar', 'animate-[radar-pushed_.3s_linear_forwards]');
            addSoundEffect('./audio/radar-pushed.m4a');
            setTimeout(() => {
                radarButton.classList.remove('animate-[radar-pushed_.3s_linear_forwards]');
                radarButton.classList.remove('actived--radar');
            }, 300);
            const lights = document.getElementById('lights');
            lights.classList.toggle('hidden');
            if (!lights.classList.contains('hidden')) {
                addSoundEffect('./audio/beep.m4a');
                activateLights.start();
            } else {
                activateLights.stop();
            }
        }
    });
};

const configElements = (parent, capsule, explosion, smoke, radar) => {
    parent.appendChild(capsule);
    const capsuleButton = document.getElementById('capsule__button');
    capsuleButton.addEventListener('click', () => {
        if (!capsuleButton.classList.contains('actived--capsule')) {
            addSoundEffect('./audio/capsule-pushed.mp3');
            capsuleButton.classList.add('actived--capsule', 'animate-[capsule-pushed_.3s_ease-in-out_forwards]');
            showNextElement(drawing, explosion, capsule, 3000)
            .then(() => {
                addSoundEffect('./audio/explosion.mp3');
                showNextElement(drawing, smoke, explosion, 300);
            })
            .then(() => {
                setTimeout(() => {
                    drawing.prepend(radar);
                    configRadar();
                    setTimeout(() => {
                        drawing.removeChild(smoke);
                    }, 2000);
                }, 2000);
            });
        }
    });
};

window.addEventListener('DOMContentLoaded', () => {
    const drawing = document.getElementById('drawing');
    configElements(drawing, capsule, explosion, smoke, radar);
});
