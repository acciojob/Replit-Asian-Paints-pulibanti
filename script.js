//your JS code here. If required.
function changeColor() {
  var id = document.getElementById("input-id").value;
  var color = document.getElementById("color").value;
  var grid = document.getElementById(id);
  var grids = document.querySelectorAll(".grid");
  grids.forEach((element) => {
    element.style.backgroundColor = "transparent";
  });
  grid.style.backgroundColor = color;
}
