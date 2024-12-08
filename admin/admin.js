// document.addEventListener('DOMContentLoaded', () => {
//     const homeLink = document.getElementById('homepage');
//     const entriesDefinitionLink = document.getElementById('entries-definition-link');
//     const systemparaPage = document.getElementById('systemparapage');
//     const usersLink = document.getElementById('userspage'); // Users link/button
//     const auditPage = document.getElementById('auditpage');
//     const currencyPage = document.getElementById('currencypage');
//     const companyPage = document.getElementById('companypage');
//     const authoriseSetupPage = document.getElementById('authorisesetup');
//     const authoriseTransPage = document.getElementById('authorisetrans');
//     const container = document.querySelector('.container');
//     const defaultPage = document.querySelector('.default-page');
//     const loadingSpinner = document.getElementById('loading-spinner'); 
  
//     // Function to load a page dynamically
//     function loadPage(url) {
//       if (defaultPage) {
//         defaultPage.style.display = 'none'; // Hide the default content
//       }
//       // Show the spinner
//       loadingSpinner.style.display = 'flex';
//       // Fetch the page from the server
//       fetch(url)
//         .then((response) => {
//           if (!response.ok) {
//             throw new Error('Network response was not ok');
//           }
//           return response.text();
//         })
//         .then((html) => {
//           // Load the content into the container
//           container.innerHTML = html;
//         })
//         .catch((error) => {
//           console.error('Error loading the page:', error);
//           container.innerHTML = '<p>Error loading page. Please try again later.</p>';
//         })
//         .finally(() => {
//           // Hide the spinner
//           loadingSpinner.style.display = 'none';
//         });
//     }
  
//     // Handle the "Entries Definition" link click
//     entriesDefinitionLink.addEventListener('click', (event) => {
//       event.preventDefault();
//       loadPage('entriesDef.html');
//     });
  
//      // Handle the "system parameters" link click
//      systemparaPage.addEventListener('click', (event) => {
//       event.preventDefault();
//       loadPage('systemsPar.html');
//       });
  
//     // Handle the "Users" link click
//     usersLink.addEventListener('click', (event) => {
//       event.preventDefault();
//       loadPage('userspage.html');
//     });
  
//     // Handle the "system parameters" link click
//     auditPage.addEventListener('click', (event) => {
//       event.preventDefault();
//       loadPage('audit.html');
//     });
//    // Handle base currency link click
//     currencyPage.addEventListener('click', (event) => {
//       event.preventDefault();
//       loadPage('baseCur.html');
//     });
//     // Handle company link click
//     companyPage.addEventListener('click', (event) => {
//       event.preventDefault();
//       loadPage('companyDet.html');
//     });
//     // Handle Authorise Setup
//     authoriseSetupPage.addEventListener('click', (event) => {
//       event.preventDefault();
//       loadPage('authSetup.html');
//     });
//     // Handle Authorise Transaction
//     authoriseTransPage.addEventListener('click', (event) => {
//       event.preventDefault();
//       loadPage('authTrans.html');
//     });
  
//     // Handle the "Home" link click
//     homeLink.addEventListener('click', (event) => {
//       event.preventDefault();
//       // Hide loaded content
//       container.innerHTML = '<h2>SYSTEM ADMINISTRATOR </h2> <p>Use sidebar to navigate through System Administration Page</p>';
//       // Show the default content
//       if (defaultPage) {
//         defaultPage.style.display = 'block';
//       }
//     });
// });


  
// Getting the full date for Audit Trail Page.
var field = document.querySelector('#todayDate');
var date = new Date();
field.value = (date.getMonth() + 1).toString().padStart(2, 0) + '-' + date.getDate().toString().padStart(2, 0); + '-' + date.getFullYear().toString()  

//Module collapse down and expand 
function toggleCollapse() {
  var collapseElement = document.getElementById('voucherDropId');
  collapseElement.classList.toggle('show');
}
  