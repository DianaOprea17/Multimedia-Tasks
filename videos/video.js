const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const video = document.getElementById('video');
const buton = document.getElementById('buton');

buton.addEventListener('click', function() 
{
    
    video.currentTime = 30;
    video.play();
})


video.addEventListener('play', function() {
    durata();
});
function durata(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let timeRemaining = video.duration - video.currentTime;
    let minutes = Math.floor(timeRemaining / 60);
    let seconds = Math.floor(timeRemaining % 60);
    let formattedTime = `${minutes}:${seconds.toString().padStart(2, '0')}`;

    // Setarea stilului textului
    ctx.font = '20px Arial';
    ctx.fillStyle = 'black';
    ctx.textAlign = 'center';
    ctx.fillText(`Timp rămas: ${formattedTime}`, canvas.width / 2, 30);

    // Solicitarea desenării următorului cadru
    if (!video.paused && !video.ended) {
        requestAnimationFrame(durata);
    }
}