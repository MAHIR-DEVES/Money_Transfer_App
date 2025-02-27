document.getElementById('cash-out').style.display = 'none';
document.getElementById('transaction-history').style.display = 'none';

document
  .getElementById('add-money-box')
  .addEventListener('click', function (event) {
    event.preventDefault();
    hsndileToggle('add-money', 'block');
    hsndileToggle('cash-out', 'none');
    hsndileToggle('transaction-history', 'none');
  });
document
  .getElementById('cash-out-box')
  .addEventListener('click', function (event) {
    event.preventDefault();
    hsndileToggle('add-money', 'none');
    hsndileToggle('transaction-history', 'none');
    hsndileToggle('cash-out', 'block');
  });

document
  .getElementById('transaction-box')
  .addEventListener('click', function (event) {
    event.preventDefault();
    hsndileToggle('add-money', 'none');
    hsndileToggle('cash-out', 'none');
    hsndileToggle('transaction-history', 'block');
  });
