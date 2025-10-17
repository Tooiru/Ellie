const btn = document.getElementById('subscribe-btn');
const fireworks = document.getElementById('fireworks');

btn.addEventListener('click', () => {
    if (btn.classList.contains('subscribed')) return;

    btn.textContent = 'Вы подписаны ✓';
    btn.classList.add('subscribed');
    createFireworks();
});

function createFireworks() {
    for (let i = 0; i < 15; i++) {
        const spark = document.createElement('div');
        spark.classList.add('spark');

        const angle = Math.random() * 2 * Math.PI;
        const distance = Math.random() * 100 + 50;
        const x = Math.cos(angle) * distance + 'px';
        const y = Math.sin(angle) * distance + 'px';

        spark.style.setProperty('--x', x);
        spark.style.setProperty('--y', y);

        fireworks.appendChild(spark);

        setTimeout(() => spark.remove(), 1000);
    }
}