const toggleBtn = document.getElementById("themeToggle");
    
const body = document.body

    
toggleBtn.addEventListener("click", () =>{    
  body.classList.toggle("light")
  if (body.classList.contains("light")) {
    toggleBtn.textContent = "🌙"
  } else {
    toggleBtn.textContent = "☀️"
  }
  });




