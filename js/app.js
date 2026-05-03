const classes = [
  {
    id: 1,
    title: "Class 1",
    video: "https://www.youtube.com/embed/abc123"
  }
];
const classes = [
  { id: 1, title: "Class 1", video: "https://www.youtube.com/embed/abc123", topic: "Intro" },
  { id: 2, title: "Class 2", video: "https://www.youtube.com/embed/xyz456", topic: "Branches" },
  { id: 3, title: "Class 3", video: "https://www.youtube.com/embed/qwe789", topic: "Merge" }
];
const classes = [
  { id: 1, title: "Class 1", video: "https://www.youtube.com/embed/abc123", topic: "Intro" },
  { id: 2, title: "Class 2", video: "https://www.youtube.com/embed/xyz456", topic: "Branches" },
  { id: 3, title: "Class 3", video: "https://www.youtube.com/embed/qwe789", topic: "Merge" }
];
const container = document.getElementById("contenido");

classes.forEach(clase => {
  const div = document.createElement("div");
  div.innerHTML = `<h2>${clase.title}</h2>`;
  container.appendChild(div);
});
div.innerHTML = `
  <h2>${clase.title}</h2>
  <iframe src="${clase.video}" width="400"></iframe>
`;
function renderClasses(data) {
  const container = document.getElementById("contenido");

  data.forEach(clase => {
    const div = document.createElement("div");

    div.innerHTML = `
      <h2>${clase.title}</h2>
      <iframe src="${clase.video}" width="400"></iframe>
    `;

    container.appendChild(div);
  });
}

renderClasses(classes);
div.addEventListener("click", () => {
  alert("Playing " + clase.title);
});
function filterByTopic(topic) {
  const filtered = classes.filter(c => c.topic === topic);
  renderClasses(filtered);
}