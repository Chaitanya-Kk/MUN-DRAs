 
    const circle = document.getElementById("circle");
    const trigger = document.getElementById("events");

    function updateCircle() {
      const triggerRect = trigger.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = triggerRect.height;
      const triggerTop = triggerRect.top;
      const threshold = sectionHeight * 0.4;

      if (triggerTop <= windowHeight - threshold && triggerRect.bottom >= 0) {
        circle.classList.add("expanded");
      } else {
        circle.classList.remove("expanded");
      }

      requestAnimationFrame(updateCircle);
    }

    window.addEventListener("scroll", () => {
      requestAnimationFrame(updateCircle);
    });

    document.addEventListener('DOMContentLoaded', () => {
      const section = document.getElementById('events');
      const cards = document.querySelectorAll('.event-card');

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              cards.forEach((card, index) => {
                setTimeout(() => {
                  card.classList.add('visible');
                }, index * 200);
              });
              observer.unobserve(section);
            }
          });
        },
        { threshold: 0.2 }
      );

      observer.observe(section);
    });

    const inputs = document.querySelectorAll('input[name="fan"]');
    const images = document.querySelectorAll('.gallery-image');
    const galleryMessage = document.querySelector('.gallery-message');
    const galleryContainer = document.querySelector('.gallery-container');

    inputs.forEach(input => {
      input.addEventListener('change', () => {
        images.forEach(img => img.classList.remove('active'));
        if (input.id === 'fan_off') {
          galleryMessage.classList.remove('hidden');
          galleryContainer.classList.remove('images-active');
        } else {
          galleryMessage.classList.add('hidden');
          galleryContainer.classList.add('images-active');
          const selectedImage = document.querySelector(`#${input.id.replace('fan_', 'image-')}`);
          if (selectedImage) {
            selectedImage.classList.add('active');
          }
        }
      });
    });