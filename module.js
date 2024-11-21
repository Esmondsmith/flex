// Select the dropdown icon element
const dropdown = document.querySelector('.dropdown');

dropdown.addEventListener('click', function () {
  // Toggle the 'active' class to show/hide the dropdown
  dropdown.classList.toggle('active');
});

// Close the dropdown if clicked outside
document.addEventListener('click', function (event) {
  if (!dropdown.contains(event.target)) {
    dropdown.classList.remove('active');
  }
});


const side_dropdown = document.getElementsByClassName("drop-link");

for (var i = 0; i < side_dropdown.length; i++) {
  side_dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var side_dropdownContent = this.nextElementSibling;
    if (side_dropdownContent.style.display === "block") {
      side_dropdownContent.style.display = "none";
    } else {
      side_dropdownContent.style.display = "block";
    }
  });
}
