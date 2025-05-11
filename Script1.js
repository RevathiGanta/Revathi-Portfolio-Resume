let currentIndex = 0;

function showSlide(index) {
  const carousel = document.getElementById('carousel');
  const items = document.querySelectorAll('.carousel-item');
  const itemWidth = items[0].offsetWidth + 16; // width + margin

  carousel.scrollTo({
    left: index * itemWidth,
    behavior: 'smooth'
  });
}

function nextSlide() {
  const items = document.querySelectorAll('.carousel-item');
  if (currentIndex < items.length - 1) {
    currentIndex++;
    showSlide(currentIndex);
  }
}

function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
    showSlide(currentIndex);
  }
}
