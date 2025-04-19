
document.addEventListener("DOMContentLoaded", () => {
  const ball = document.getElementById("ball");
  const sparkleContainerRight = document.getElementById("sparkleContainerRight");
  const sparkleContainerLeft = document.getElementById("sparkleContainerLeft");
  const imgContainer = document.getElementById("imgContainer");
  const welText = document.getElementById("welText");
  const enterMessage = document.querySelector(".enter-message");
  const eventBurstContainer = document.querySelector(".event-burst-container");
  const letters = [
    { element: document.getElementById("l1"), trigger: 0.2 },
    { element: document.getElementById("l2"), trigger: 0.4 },
    { element: document.getElementById("l3"), trigger: 0.6 }
  ];

  function updatePosition() {
    const scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight);
    const maxLeft = window.innerWidth - ball.offsetWidth;
    const ballLeft = scrollPercent * maxLeft;
    ball.style.left = `${ballLeft}px`;

    const isAtRightEdge = ballLeft >= maxLeft - 5;
    sparkleContainerRight.classList.toggle("active", isAtRightEdge);
    sparkleContainerLeft.classList.toggle("active", isAtRightEdge);


    letters.forEach(({ element, trigger }) => {
      element.classList.toggle("revealed", scrollPercent > trigger);
    });

    imgContainer.classList.toggle("revealed", scrollPercent > 0.1);
    welText.classList.toggle("revealed", scrollPercent > 0.15);

    enterMessage.classList.toggle("visible", scrollPercent > 0.8);

    eventBurstContainer.classList.toggle("scrolled", scrollPercent > 0.5);
  }

  document.addEventListener("click", () => {
    if (enterMessage.classList.contains("visible")) {
      window.location.href = "main.html"; 
    }
  });

  window.addEventListener("scroll", updatePosition);
  window.addEventListener("resize", updatePosition);
  updatePosition(); 
});