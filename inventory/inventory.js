
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

// FOR STOCK ITEMS MANAGEMENT EXPAND  BUTTONS
function toggleExpandStockItems() {
  let collapseElement = document.getElementById('closeUpDownId');
  let stockBtnText = document.getElementById('stockBtn');
  if(collapseElement.classList.toggle('show')){
    stockBtnText.innerHTML = "Close <i class='fa-solid fa-circle-chevron-up'></i>"
  } else {
    stockBtnText.innerHTML = "Expand <i class='fa-solid fa-circle-chevron-down'></i>"
  }
  // collapseElement.classList.toggle('show');
}


function showPage(pageId) {
  const pageOneDiv = document.getElementById('page1');
  const pageTwoDiv = document.getElementById('page2');
  const pageThreeDiv = document.getElementById('page3');

    if (pageOneDiv) pageOneDiv.style.display = "none";
    if (pageTwoDiv) pageTwoDiv.style.display = "none";
    if (pageThreeDiv) pageThreeDiv.style.display = "none";
  
    const targetPage = document.getElementById(pageId);
    if (targetPage) targetPage.style.display = "block";
}

