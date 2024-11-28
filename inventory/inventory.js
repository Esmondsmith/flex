document.addEventListener('DOMContentLoaded', () => {
    const homeLink = document.getElementById('homepage');
    const entriesDefinitionLink = document.getElementById('entriesDef');
    const inventoryParaLink = document.getElementById('inventoryPar');

    const container = document.querySelector('.container');
    const defaultPage = document.querySelector('.default-page');
  
    function loadPage(url) {
      if (defaultPage) {
        defaultPage.style.display = 'none'; 
      }
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.text();
        })
        .then((html) => {
          // Load the content into the container
          container.innerHTML = html;
        })
        .catch((error) => {
          console.error('Error loading the page:', error);
          container.innerHTML = '<p>Error loading page. Please try again later.</p>';
        })
    }
  
    // Handle the "Entries Definition" link click
    entriesDefinitionLink.addEventListener('click', (event) => {
      event.preventDefault();
      loadPage('entriesDef.html');
    });
  
     // Handle the "system parameters" link click
     inventoryParaLink.addEventListener('click', (event) => {
      event.preventDefault();
      loadPage('inventPara.html');
      });
  
    // Handle the "Home" link click
    homeLink.addEventListener('click', (event) => {
      event.preventDefault();
      // Hide loaded content
      container.innerHTML = '<h2>INVENTORY MODULE</h2> <p>Use sidebar to navigate through Inventory Module</p>';
      // Show the default content
      if (defaultPage) {
        defaultPage.style.display = 'block';
      }
    });
});
  

//Module collapse down and expand 
function toggleCollapse() {
    var collapseElement = document.getElementById('voucherDropId');
    collapseElement.classList.toggle('show');
}