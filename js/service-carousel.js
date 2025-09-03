document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".carousel");
    const track = carousel.querySelector(".track");
    const cards = track.querySelectorAll(".service-card");
    const indicatorsContainer = carousel.querySelector(".carousel-indicators");

    const cardWidth = cards[0].offsetWidth + 360; // Card width + gap
    let currentIndex = 0;
    let intervalId;

    // Variables for drag functionality
    let isDragging = false;
    let startX = 0;
    let currentTranslate = 0;
    let previousTranslate = 0;
    let animationFrameId;
    let isAutoplayPaused = false;
    let autoplayTimeout;

    // Duplicate cards for infinite loop effect
    cards.forEach((card) => {
        const clone = card.cloneNode(true);
        track.appendChild(clone);
    });

    // Create indicators (dots)
    cards.forEach((_, index) => {
        const indicator = document.createElement("div");
        indicator.classList.add("indicator");
        if (index === 0) indicator.classList.add("active");
        indicator.addEventListener("click", () => {
            clearInterval(intervalId);
            updateCarousel(index);
            startAutoplay();
        });
        indicatorsContainer.appendChild(indicator);
    });

    const updateCarousel = (index) => {
        currentIndex = index;
        track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

        // Update dots
        document.querySelectorAll(".indicator").forEach((indicator, i) => {
            indicator.classList.toggle("active", i === currentIndex);
        });
    };

    const startAutoplay = () => {
        if (isAutoplayPaused) return; // Prevent multiple intervals
        intervalId = setInterval(() => {
            currentIndex = (currentIndex + 1) % cards.length;
            updateCarousel(currentIndex);
        }, 3000);
    };

    const stopAutoplay = () => {
        clearInterval(intervalId);
        isAutoplayPaused = true;
    };

    // Drag functionality
    const handleTouchStart = (e) => {
        isDragging = true;
        startX = e.type.includes("mouse") ? e.pageX : e.touches[0].clientX;
        previousTranslate = -currentIndex * cardWidth;
        cancelAnimationFrame(animationFrameId);
        track.style.transition = "none"; // Disable smooth transition during drag
        stopAutoplay();
        clearTimeout(autoplayTimeout);
    };

    const handleTouchMove = (e) => {
        if (!isDragging) return;
        const currentX = e.type.includes("mouse") ? e.pageX : e.touches[0].clientX;
        const deltaX = currentX - startX;
        currentTranslate = previousTranslate + deltaX;
        track.style.transform = `translateX(${currentTranslate}px)`;
    };

    const handleTouchEnd = () => {
        isDragging = false;
        const movedBy = currentTranslate - previousTranslate;
        if (movedBy < -50 && currentIndex < cards.length - 1) {
            currentIndex += 1;
        } else if (movedBy > 50 && currentIndex > 0) {
            currentIndex -= 1;
        }
        track.style.transition = "transform 0.5s ease-in-out"; // Re-enable smooth transition
        updateCarousel(currentIndex);

        // Delay autoplay resumption to ensure smooth transition
        autoplayTimeout = setTimeout(() => {
            isAutoplayPaused = false;
            startAutoplay();
        }, 500);
    };

    // Add event listeners for drag and touch
    carousel.addEventListener("mousedown", handleTouchStart);
    carousel.addEventListener("mousemove", handleTouchMove);
    carousel.addEventListener("mouseup", handleTouchEnd);
    carousel.addEventListener("mouseleave", () => {
        if (isDragging) handleTouchEnd();
    });

    carousel.addEventListener("touchstart", handleTouchStart);
    carousel.addEventListener("touchmove", handleTouchMove);
    carousel.addEventListener("touchend", handleTouchEnd);

    // Pause autoplay on mouse enter
    carousel.addEventListener("mouseenter", stopAutoplay);
    // Resume autoplay on mouse leave
    carousel.addEventListener("mouseleave", startAutoplay);

    // Start autoplay
    startAutoplay();

    // Adjust track width dynamically
    const resizeObserver = new ResizeObserver(() => {
        track.style.width = `${cards.length * cardWidth}px`;
        updateCarousel(currentIndex);
    });
    resizeObserver.observe(carousel);
});
