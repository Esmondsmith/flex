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

//Sidebar dropdown for the calendar.
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

// Getting the full date.
function displayFullDate(dateDisplayId) {
  const today = new Date();
  const day = today.getDate(); 
  const month = today.toLocaleString('default', { month: 'long' }); 
  const year = today.getFullYear(); 

  const fullDate = `${day} ${month}, ${year}`;
  const element = document.getElementById("dateDisplayId");

  if (element) {
    element.textContent = fullDate; 
  } else {
    console.error(`Element with ID "${dateDisplayId}" not found.`);
  }
}
// Call the function and pass the ID.
displayFullDate('dateDisplayId');
