const envelope = document.querySelector('.envelope');
const heartSeal = document.querySelector('.heart-seal');
const audio = document.getElementById('lagu');
let timeoutId;
let isPlaying = false;

// --- FUNGSI UTAMA ---
function putarMusik() {
    if (!isPlaying) {
        audio.volume = 0.6; // Volume 60%
        audio.play().then(() => {
            isPlaying = true;
            console.log("Audio Berhasil Diputar!");
        }).catch((error) => {
            console.log("Menunggu interaksi user (klik layar) untuk memutar musik.");
        });
    }
}

function bukaSegel() {
    clearTimeout(timeoutId);
    heartSeal.style.opacity = 0; // Hilangkan logo
    putarMusik(); // Coba putar musik
}

function tutupSegel() {
    timeoutId = setTimeout(() => {
        heartSeal.style.opacity = 1; // Munculkan logo lagi
    }, 1500);
}

// --- LOGIKA "KLIK PANCINGAN" (WAJIB ADA) ---
// Ini trik supaya browser mengizinkan musik bunyi
document.body.addEventListener('click', () => {
    putarMusik();
}, { once: true }); // Cuma jalan sekali di klik pertama


// --- EVENT LISTENER ---

// 1. Buat Laptop (Mouse)
envelope.addEventListener('mouseover', bukaSegel);
envelope.addEventListener('mouseout', tutupSegel);

// 2. Buat HP (Sentuh)
envelope.addEventListener('click', bukaSegel);

// Animasi transisi
heartSeal.style.transition = 'opacity 0.3s ease';