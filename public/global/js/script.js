document.getElementById("search").addEventListener("keypress", function (event) {
  if (event.key === "Enter") { 
    event.preventDefault(); 
    document.getElementById("web").style.visibility = "visible";
    document.getElementById("controls").style.visibility = "visible";
  }
});
document.querySelector("select").addEventListener("change", function () {
  const selectedValue = this.value; 
  const searchInput = document.querySelector("#search");
  searchInput.setAttribute("data-service", selectedValue);
});
