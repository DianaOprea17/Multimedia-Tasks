const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const audio = document.getElementById('audio');
const btnRedare = document.getElementById('redare');
const btnPauza = document.getElementById('pauza');

function Redare() {
    if (audio.paused) {
        audio.play();
        btnRedare.innerHTML = "Pauză";
    } else {
        audio.pause();
        btnRedare.innerHTML = "Redare";
    }
}

var text = "Diana";
var angle = 90 * Math.PI / 180; // Convertirea unghiului în radiani

// Setarea poziției și rotația textului
ctx.translate(100, 100);
ctx.rotate(angle);

// Desenarea textului
ctx.font = "20px Arial";
ctx.fillText(text, 0, 0);