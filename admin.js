const toggleBtn = document.getElementById('toggle-btn');
const sidebar = document.getElementById('sidebar')

function toggleSidebar(){
    sidebar.classList.toggle('close');
    toggleBtn.classList.toggle('rotate');

    // Getting array of all opened dropdown, then loop over them to close.
    // Array.from(sidebar.getElementsByClassName('show')).forEach(ul => {
    //     ul.classList.remove('show');
    //     ul.previousElementSibling.classList.remove('rotate')
    // })
    closeAllSubMenus()
}

function toggleSubMenu(button){

    if(!button.nextElementSibling.classList.contains('show')){
        closeAllSubMenus()
    }
    

    button.nextElementSibling.classList.toggle('show') //The nextElementSibling property returns the next element in the same tree level.
    //This is to rotate the arrow icon 
    button.classList.toggle('rotate')
    //To open the sidebar when the dropdown is accessed.
    if(sidebar.classList.contains('close')){
        sidebar.classList.toggle('close');
        toggleBtn.classList.toggle('rotate')
    }
}

function closeAllSubMenus(){
    Array.from(sidebar.getElementsByClassName('show')).forEach(ul => {
        ul.classList.remove('show');
        ul.previousElementSibling.classList.remove('rotate')
    })
}

// Top navigation bar dropdown
const dropdown = document.querySelector('.dropdown');
dropdown.addEventListener('click', function () {
  // Toggle the 'active' class to show/hide the dropdown
  dropdown.classList.toggle('active');
});


// Get current year
const currentYear = new Date().getFullYear();
console.log(currentYear);
document.getElementById('calendar-notice').textContent = currentYear;
