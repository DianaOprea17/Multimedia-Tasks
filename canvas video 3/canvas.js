const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const video = document.getElementById('video');


ctx.font = '24px Arial'; 
ctx.fillStyle = 'red'; 

const nume = 'Diana'; 

// Desenarea textului pe canvas
ctx.fillText(nume, 10, 50); 

video.addEventListener('play', function() {
    draw();
});

function draw() {
    if (!video.paused && !video.ended) {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        
        // Aplicarea filtrului de tonuri de gri
        let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        let data = imageData.data;
        for (let i = 0; i < data.length; i += 4) {
            let grey = data[i] * 0.3 + data[i + 1] * 0.59 + data[i + 2] * 0.11;
            data[i] = grey;    // rosu
            data[i + 1] = grey; // verde
            data[i + 2] = grey; // albastru
        }
        ctx.putImageData(imageData, 0, 0);

        // Solicitarea desenării urmatorului cadru
        requestAnimationFrame(draw);
    }
}