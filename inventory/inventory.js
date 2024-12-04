document.addEventListener('DOMContentLoaded', () => {
    const homeLink = document.getElementById('homepage');
    const entriesDefinitionLink = document.getElementById('entriesDef');
    const inventoryParaLink = document.getElementById('inventoryPar');
    const stockMagt = document.getElementById('stockItemMgt');
    const stockTake = document.getElementById('stockTake');
    const barcode = document.getElementById('barcode');
    const openingStockBal = document.getElementById('openingStockTags');


    const container = document.querySelector('.container');
    const defaultPage = document.querySelector('.defaultPage');
  
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
  
    // To handle inventory settings
    entriesDefinitionLink.addEventListener('click', (event) => {
      event.preventDefault();
      loadPage('entriesDef.html');
    });
    inventoryParaLink.addEventListener('click', (event) => {
      event.preventDefault();
      loadPage('inventPara.html');
    });

    //To handle inventory stocks
    stockMagt.addEventListener('click', (event) => {
      event.preventDefault();
      loadPage('stockItemMgt.html');
    });
    stockTake.addEventListener('click', (event) => {
      event.preventDefault();
      loadPage('stockTake.html');
    });
    barcode.addEventListener('click', (event) => {
      event.preventDefault();
      loadPage('barcode.html');
    });
    openingStockBal.addEventListener('click', (event) => {
      event.preventDefault();
      loadPage('openingStocks.html');
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

function toggleCollapseStockItems() {
  var collapseElement = document.getElementById('voucherDropId');
  var stockBtnText = document.getElementById('stockBtn');
  if(collapseElement.classList.toggle('show')){
    stockBtnText.innerHTML = "Close <i class='fa-solid fa-circle-chevron-up'></i>"
  } else {
    stockBtnText.innerHTML = "Expand <i class='fa-solid fa-circle-chevron-down'></i>"
  }
  // collapseElement.classList.toggle('show');
}

