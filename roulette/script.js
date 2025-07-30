const min = 49900;
const max = 149900; // using 10000 step starting from 49900
const step = 10000;

function randomBonus() {
    const count = Math.floor((max - min) / step) + 1;
    const index = Math.floor(Math.random() * count);
    return min + index * step;
}

function animateResult(finalValue) {
    const display = document.getElementById('result');
    const interval = 50; // ms
    const duration = 2000; // total animation time
    const steps = duration / interval;
    let progress = 0;
    const timer = setInterval(() => {
        const randomValue = randomBonus();
        display.textContent =
            "Ваш бонус: " +
            randomValue.toLocaleString('ru-RU') +
            ' ₸';
        progress++;
        if (progress >= steps) {
            clearInterval(timer);
            display.textContent =
                "Ваш бонус: " +
                finalValue.toLocaleString('ru-RU') +
                ' ₸';
        }
    }, interval);
}

const button = document.getElementById('spin');
button.addEventListener('click', () => {
    const finalValue = randomBonus();
    animateResult(finalValue);
});
