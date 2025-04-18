const yesBtn = document.querySelector("#yesBtn");
const noBtn = document.querySelector("#noBtn");

// Función para responder con el botón "Sí"
yesBtn.addEventListener("click", function () {
  // 🎉 Confeti
  confetti({
    particleCount: 150,
    spread: 100,
    origin: { y: 0.6 },
  });

  // 💌 Mensaje bonito
  Swal.fire({
    title: "¡Sabía que dirías que sí, Deysi! 💖",
    html: `
      <p style="font-size: 1.2rem;">Ahora empieza nuestra historia juntos 🌈💍</p>
      <div style="font-size: 2.5rem;">😍💘✨</div>
    `,
    icon: "success",
    background: "#fff0f5",
    color: "#d63384",
    confirmButtonText: "Yo también te quiero 💕",
    confirmButtonColor: "#ff69b4",
  });

  console.log("Respuesta: SÍ 💖");
});

// Función para el "No", solo se mueve y no muestra el mensaje
noBtn.addEventListener("click", function () {
  // Solo mueve el botón en móviles, no se muestra el mensaje
  console.log("Respuesta: NO 💔");
});

// Función para mover el "No" al azar cuando se pasa el mouse o toca en móviles
noBtn.addEventListener("mouseover", function () {
  const randomX = parseInt(Math.random() * 100);
  const randomY = parseInt(Math.random() * 100);

  noBtn.style.position = "absolute";
  noBtn.style.setProperty("top", randomY + "%");
  noBtn.style.setProperty("left", randomX + "%");
  noBtn.style.setProperty("transform", `translate(-${randomX}%, -${randomY}%)`);
});

// Mobile only (touch event)
noBtn.addEventListener("touchstart", function () {
  // Mueve el botón solo en dispositivos móviles
  const randomX = parseInt(Math.random() * 100);
  const randomY = parseInt(Math.random() * 100);

  noBtn.style.position = "absolute";
  noBtn.style.setProperty("top", randomY + "%");
  noBtn.style.setProperty("left", randomX + "%");
  noBtn.style.setProperty("transform", `translate(-${randomX}%, -${randomY}%)`);
});
