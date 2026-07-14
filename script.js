var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");
var imgCounter = document.getElementById("imgCounter");

var images = [
    "images/image1.jpg", "images/image2.jpg", "images/image3.jpg", "images/image4.jpg",
    "images/image5.jpg", "images/image6.jpg", "images/image7.jpg", "images/image8.jpg"
];
var currentIndex = 0; 

// Counter render karne ka function
function updateCounter() {
    imgCounter.innerText = (currentIndex + 1) + " / " + images.length;
}

// 1. Open Lightbox View
function openFullImg(index){
    fullImgBox.classList.add("show"); 
    currentIndex = index; 
    fullImg.src = images[currentIndex];
    document.body.style.overflow = "hidden"; 
    updateCounter();
}

// 2. Next/Prev Navigation (Premium Cross-Fade Animation Jisme Image Smoothly Badlegi)
function changeImg(direction) {
    fullImg.style.opacity = 0; // Pehle current image ko fade-out karega
    
    // 150 milliseconds ke baad source badlega aur fade-in karega
    setTimeout(() => {
        currentIndex = currentIndex + direction;
        if (currentIndex >= images.length) { currentIndex = 0; }
        if (currentIndex < 0) { currentIndex = images.length - 1; }
        
        fullImg.src = images[currentIndex]; // Nayi image load hui
        updateCounter(); // Counter update hua
        fullImg.style.opacity = 1; // Nayi image smoothly fade-in ho gayi
    }, 150);
}

// 3. Close Lightbox view
function closeFullImg(){
    fullImgBox.classList.remove("show"); 
    document.body.style.overflow = "auto"; 
}

// 4. Keyboard Support
document.addEventListener("keydown", function(e) {
    if (fullImgBox.classList.contains("show")) { 
        if (e.key === "ArrowRight") changeImg(1);
        if (e.key === "ArrowLeft") changeImg(-1);
        if (e.key === "Escape") closeFullImg();
    }
});