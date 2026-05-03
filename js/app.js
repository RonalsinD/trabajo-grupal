// Datos de las clases
const classes = [
  { id: 1, title: "Class 1", video: "https://www.youtube.com/embed/abc123", topic: "Intro" },
  { id: 2, title: "Class 2", video: "https://www.youtube.com/embed/xyz456", topic: "Branches" },
  { id: 3, title: "Class 3", video: "https://www.youtube.com/embed/qwe789", topic: "Merge" }
];

// Función para renderizar clases
function renderClasses(data) {
  const container = document.getElementById("contenido");
  container.innerHTML = ""; // Limpia antes de renderizar

  data.forEach(clase => {
    const div = document.createElement("div");
    div.classList.add("feature-card"); // reutiliza estilos de CSS

    div.innerHTML = `
      <h2>${clase.title}</h2>
      <iframe src="${clase.video}" width="400" height="225" frameborder="0" allowfullscreen></iframe>
      <p><strong>Tema:</strong> ${clase.topic}</p>
    `;

    // Interactividad: click en la tarjeta
    div.style.cursor = "pointer";
    div.addEventListener("click", () => {
      alert("Reproduciendo: " + clase.title);
    });

    container.appendChild(div);
  });
}

// Filtrar por tema
function filterByTopic(topic) {
  const filtered = classes.filter(c => c.topic === topic);
  renderClasses(filtered);
}

// Buscar por título
function searchClass(text) {
  const result = classes.filter(c =>
    c.title.toLowerCase().includes(text.toLowerCase())
  );
  renderClasses(result);
}

// Render inicial
renderClasses(classes);
