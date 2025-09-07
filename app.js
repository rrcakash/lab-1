document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const main = document.getElementById("main");
  if (!main) return;

  const listContainer = document.createElement("section");
  listContainer.id = "employee-list";
  main.appendChild(listContainer);

  function renderDepartments(departments) {
    departments.forEach((dept) => {
      const group = document.createElement("section");
      group.className = "dept";

      const h4 = document.createElement("h4");
      h4.textContent = dept.department;

      const ul = document.createElement("ul");
      (dept.employees || []).forEach((name) => {
        const li = document.createElement("li");
        li.textContent = name;
        ul.appendChild(li);
      });

      group.appendChild(h4);
      group.appendChild(ul);
      listContainer.appendChild(group);
    });
  }

  // Try JSON first
  fetch("./employees.json?cb=" + Date.now())
    .then((res) => {
      if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText}`);
      return res.json();
    })
    .then((departments) => {
      renderDepartments(departments);
    })
    .catch((err) => {
      console.error("Error loading employees.json:", err);

      // Fallback silently to employees.js if available
      if (typeof DEPARTMENTS !== "undefined") {
        renderDepartments(DEPARTMENTS);
      }

    });
});
