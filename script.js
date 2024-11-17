window.addEventListener('load', () => {
    // Splash screen disappearance after 5 seconds (3s animation + 2s fade out)
    setTimeout(() => {
        // Sembunyikan splash screen setelah animasi keluar selesai
        document.getElementById('splash-screen').style.display = 'none';

        // Tampilkan konten utama dan navbar
        document.getElementById('main-content').style.display = 'block';  // Tampilkan halaman utama setelah splash screen
        document.getElementById('navbar').style.opacity = 1;  // Navbar muncul setelah splash screen hilang
        document.getElementById('navbar').style.transition = 'opacity 1s'; // Smooth transition saat navbar muncul
    }, 5000);  // Tunda selama 5 detik (3s animasi + 2s fade out)
});
// Fungsi untuk toggle menu dan tombol hamburger
function toggleMenu() {
    const menu = document.querySelector('.navbar-menu');
    const hamburger = document.querySelector('.navbar-toggle');
    
    // Toggle kelas 'active' pada menu dan tombol hamburger
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');
}


function toggleMenu() {
    const menu = document.getElementById('navbarMenu');
    menu.classList.toggle('active');
}
function toggleFlip(card) {
  card.classList.toggle('flipped');
}

// Toggle menu untuk perangkat mobile
function toggleMenu() {
  const menu = document.getElementById('navbarMenu');
  menu.classList.toggle('active');
}
let currentPillarIndex = 0;
let currentCardIndex = 0;
let currentIndexTargets = 0; // Indeks awal aktif untuk targets

// Fungsi untuk navigasi pilar
function showPillar(direction) {
  const pillars = document.querySelectorAll('.pillar');

  // Periksa apakah layar dalam kondisi mobile
  if (window.innerWidth > 768) {
    pillars.forEach(pillar => pillar.classList.add('active')); // Tampilkan semua pilar di desktop
    return;
  }

  // Sembunyikan pilar aktif saat ini
  pillars[currentPillarIndex].classList.remove('active');

  // Hitung indeks baru
  currentPillarIndex = (currentPillarIndex + direction + pillars.length) % pillars.length;

  // Tampilkan pilar baru
  pillars[currentPillarIndex].classList.add('active');
}

// Fungsi untuk navigasi flip card pada section Direction
function showDirectionCard(direction) {
  const directionCards = document.querySelectorAll('#direction .flip-card');

  // Sembunyikan card aktif saat ini
  directionCards[currentCardIndex].classList.remove('active');

  // Hitung indeks baru
  currentCardIndex = (currentCardIndex + direction + directionCards.length) % directionCards.length;

  // Tampilkan card baru
  directionCards[currentCardIndex].classList.add('active');
}

// Fungsi untuk navigasi flip card pada section Targets
function updateTargets(indexChange) {
  const targetCards = document.querySelectorAll('#targets .flip-card');

  // Periksa jika di mobile mode
  if (window.innerWidth > 768) {
    targetCards.forEach(card => card.classList.add('active')); // Semua aktif di desktop
    return;
  }

  // Hapus kelas aktif pada card saat ini
  targetCards[currentIndexTargets].classList.remove('active');

  // Hitung indeks baru
  currentIndexTargets = (currentIndexTargets + indexChange + targetCards.length) % targetCards.length;

  // Tambahkan kelas aktif pada card baru
  targetCards[currentIndexTargets].classList.add('active');
}

// Event listener untuk resize
window.addEventListener('resize', () => {
  const pillars = document.querySelectorAll('.pillar');

  if (window.innerWidth > 768) {
    // Tampilkan semua pilar di desktop
    pillars.forEach(pillar => pillar.classList.add('active'));
  } else {
    // Tampilkan hanya pilar aktif di mobile
    pillars.forEach((pillar, index) => {
      pillar.classList.toggle('active', index === currentPillarIndex);
    });
  }

  // Handle resize untuk bagian Targets
  const targetCards = document.querySelectorAll('#targets .flip-card');
  if (window.innerWidth > 768) {
    targetCards.forEach(card => card.classList.add('active'));
  } else {
    targetCards.forEach((card, index) => {
      card.classList.toggle('active', index === currentIndexTargets);
    });
  }
});

// Event listener untuk tombol navigasi flip card pada Direction
document.addEventListener('DOMContentLoaded', () => {
  const directionCards = document.querySelectorAll('#direction .flip-card');
  const prevBtnDirection = document.querySelector('#direction .prev-btn');
  const nextBtnDirection = document.querySelector('#direction .next-btn');

  // Atur card pertama sebagai aktif
  if (directionCards.length > 0) {
    directionCards[currentCardIndex].classList.add('active');
  }

  // Event listener untuk tombol navigasi flip card pada Direction
  prevBtnDirection.addEventListener('click', () => showDirectionCard(-1));
  nextBtnDirection.addEventListener('click', () => showDirectionCard(1));

  // Inisialisasi untuk bagian Targets
  const targetCards = document.querySelectorAll('#targets .flip-card');
  if (targetCards.length > 0) {
    targetCards[currentIndexTargets].classList.add('active');
  }

  // Tambahkan event listener untuk tombol navigasi Targets
  const prevBtnTargets = document.querySelector('#targets .prev-btn');
  const nextBtnTargets = document.querySelector('#targets .next-btn');

  if (prevBtnTargets && nextBtnTargets) {
    prevBtnTargets.addEventListener('click', () => updateTargets(-1));
    nextBtnTargets.addEventListener('click', () => updateTargets(1));
  }
});

// Fungsi untuk navigasi flip card pada section Targets
function updateTargets(indexChange) {
  const targetCards = document.querySelectorAll('#targets .flip-card');

  // Periksa jika di mobile mode
  if (window.innerWidth > 768) {
    targetCards.forEach(card => card.classList.add('active')); // Semua aktif di desktop
    return;
  }

  // Hapus kelas aktif pada card saat ini
  targetCards[currentIndexTargets].classList.remove('active');

  // Hitung indeks baru
  currentIndexTargets = (currentIndexTargets + indexChange + targetCards.length) % targetCards.length;

  // Tambahkan kelas aktif pada card baru
  targetCards[currentIndexTargets].classList.add('active');
}



let currentIndexDirection = 0; // Indeks awal aktif
const directionCards = document.querySelectorAll('#direction .flip-card');
const directionPrevBtn = document.querySelector('#direction .prev-btn');
const directionNextBtn = document.querySelector('#direction .next-btn');

function updateDirection(indexChange) {
    // Periksa jika di mobile mode
    if (window.innerWidth > 768) {
        directionCards.forEach(card => card.classList.add('active')); // Semua aktif di desktop
        return;
    }

    // Hapus kelas aktif pada card saat ini
    directionCards[currentIndexDirection].classList.remove('active');

    // Hitung indeks baru
    currentIndexDirection =
        (currentIndexDirection + indexChange + directionCards.length) %
        directionCards.length;

    // Tambahkan kelas aktif pada card baru
    directionCards[currentIndexDirection].classList.add('active');
}

// Inisialisasi untuk bagian Direction
document.addEventListener('DOMContentLoaded', () => {
    if (directionCards.length > 0) {
        directionCards[currentIndexDirection].classList.add('active');
    }
});

// Event listener untuk tombol navigasi di bagian Direction
directionPrevBtn.addEventListener('click', () => updateDirection(-1));
directionNextBtn.addEventListener('click', () => updateDirection(1));

// Handle resize untuk bagian Direction
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        directionCards.forEach(card => card.classList.add('active'));
    } else {
        directionCards.forEach((card, index) => {
            card.classList.toggle('active', index === currentIndexDirection);
        });
    }
});







// Fungsi untuk toggle efek flip pada kartu saat diklik
document.querySelectorAll('.flip-card').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });
  });
const sections = document.querySelectorAll('.about, .timeline, .direction, .cta');
const options = {
    threshold: 0.1
};
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        } else {
            entry.target.style.opacity = 0;
            entry.target.style.transform = 'translateY(50px)';
        }
    });
}, options);
sections.forEach(section => {
    observer.observe(section);
});

function showVideo(url, button) {
    document.getElementById('video-frame').src = url;
    var buttons = document.querySelectorAll('.button');
    buttons.forEach(function(btn) {
        btn.classList.remove('active');
    });
    button.classList.add('active');
}
// Menunggu animasi selesai sebelum menyembunyikan splash screen
document.getElementById('splash-screen').addEventListener('animationend', function(event) {
    if (event.animationName === 'splashFadeOut') {
        // Menyembunyikan splash screen setelah animasi keluar selesai
        document.getElementById('splash-screen').style.display = 'none';
        // Menampilkan konten utama
        document.getElementById('main-content').style.display = 'block';
    }
});


function handleScroll() {
    var buttonContainer = document.querySelector('.button-container');
    var videoContainer = document.querySelector('.video-container');
    var buttonRect = buttonContainer.getBoundingClientRect();
    var videoRect = videoContainer.getBoundingClientRect();

    if (buttonRect.top < window.innerHeight && buttonRect.bottom >= 0) {
        buttonContainer.classList.add('visible');
    } else {
        buttonContainer.classList.remove('visible');
    }

    if (videoRect.top < window.innerHeight && videoRect.bottom >= 0) {
        videoContainer.classList.add('visible');
    } else {
        videoContainer.classList.remove('visible');
    }
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);