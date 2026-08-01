// Planty — watering reminders, stored locally.
const plants = JSON.parse(localStorage.getItem("plants") || "[]");
const list = document.getElementById("plants");
const greeting = document.getElementById("greeting");

// Personalised greeting from the share link, e.g. planty.html#Hi%20Leigh!
greeting.innerHTML = decodeURIComponent(location.hash.slice(1) || "G'day, plant person!");

function save() { localStorage.setItem("plants", JSON.stringify(plants)); }

function render() {
  list.textContent = "";
  plants.forEach(function (p, i) {
    const li = document.createElement("li");
    li.textContent = p.name + " — water every " + p.days + " days ";
    const del = document.createElement("button");
    del.textContent = "remove";
    del.addEventListener("click", function () { plants.splice(i, 1); save(); render(); });
    li.appendChild(del);
    list.appendChild(li);
  });
}

document.getElementById("add-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("plant-name").value.trim();
  const days = parseInt(document.getElementById("days").value, 10);
  if (!name || !days) return;
  plants.push({ name: name, days: days });
  save(); render();
  e.target.reset();
});

render();
