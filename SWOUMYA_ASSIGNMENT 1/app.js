
// let next = document.querySelector('#next');
// let prev = document.querySelector('#prev');

// next.addEventListener('click', function(){
//     let items = document.querySelectorAll('.item');
//     let firstItem = items[0];
//     document.querySelector('.slide').appendChild(firstItem);
// });

// prev.addEventListener('click', function(){
//     let items = document.querySelectorAll('.item');
//     let lastItem = items[items.length - 1];
//     let slide = document.querySelector('.slide');
//     slide.insertBefore(lastItem, slide.firstChild);
// });

// let next = document.querySelector('#next');
// let prev = document.querySelector('#prev');
// let slide = document.querySelector('.slide');
// let items = document.querySelectorAll('.item');
// let playPauseBtn = document.querySelector('#playPause');
// let isPlaying = false;
// let interval;

// next.addEventListener('click', function() {
//     shiftSlide(1);
// });

// prev.addEventListener('click', function() {
//     shiftSlide(-1);
// });





let next = document.querySelector('#next');
let prev = document.querySelector('#prev');
let slide = document.querySelector('.slide');
let items = document.querySelectorAll('.item');
let playPauseBtn = document.querySelector('#playPause');
let isPlaying = false;
let interval;

next.addEventListener('click', function() {
    shiftSlide(1);
});

prev.addEventListener('click', function() {
    shiftSlide(-1);
});

// Function to shift the slides
function shiftSlide(direction) {
    // Adding a transition class for smooth effect
    slide.style.transition = "transform 0.5s ease-in-out";
    let firstItem = items[0];
    if (direction === 1) {
        slide.appendChild(firstItem); // Move first to last (next)
    } else {
        let lastItem = items[items.length - 1];
        slide.insertBefore(lastItem, slide.firstChild); // Move last to first (prev)
    }

    // Update the items after moving
    items = document.querySelectorAll('.item');
}

// Play/Pause functionality
playPauseBtn.addEventListener('click', function() {
    if (isPlaying) {
        clearInterval(interval);
        playPauseBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
    } else {
        startAutoSlide();
        playPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
    }
    isPlaying = !isPlaying;
});

function startAutoSlide() {
    interval = setInterval(() => {
        shiftSlide(1);
    }, 3000); // Slide every 3 seconds
}






