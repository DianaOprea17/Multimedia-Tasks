const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const video = document.getElementById('video');
const buton = document.getElementById('buton');

buton.addEventListener('click', function() 
{
    if (video.readyState >= 2) {
        // Calculul noii pozitii a timpului video
        let newTime = video.currentTime - 10;
        if (newTime < 0) newTime = 0;  // Asigurarea ca timpul nu devine negativ
        video.currentTime = newTime;  // Setarea noului timp al video-ului
    }
});


const startButton = document.getElementById('buton1');

startButton.addEventListener('click', function() {
    // Setarea timpului de începere la 30 de secunde
    video.currentTime = 30;
    video.play();
});

video.addEventListener('play', function() {
    draw();
});

video.addEventListener('loadedmetadata', function() {
    console.log(video.duration);  
    console.log(video.currentTime);
});

function draw() {
    // Curatarea canvas-ului
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Calculul timpului ramas
    let timeRemaining = video.duration - video.currentTime;
    let minutes = Math.floor(timeRemaining / 60);
    let seconds = Math.floor(timeRemaining % 60);
    let formattedTime = `${minutes}:${seconds.toString().padStart(2, '0')}`;

    // Setarea stilului textului
    ctx.font = '20px Arial';
    ctx.fillStyle = 'black';
    ctx.textAlign = 'center';
    ctx.fillText(`Timp rămas: ${formattedTime}`, canvas.width / 2, 30);

    if (!video.paused && !video.ended) {
        requestAnimationFrame(draw);
    }
}

ctx.font = '24px Arial'; 
ctx.fillStyle = 'red';

const nume = 'Oprea'; 

ctx.fillText(nume, 10, 50); 