document
  .getElementById('login-btn')
  .addEventListener('click', function (event) {
    event.preventDefault();
    const accountNumber = document.getElementById('account-number').value;
    const pin = document.getElementById('pin').value;
    const convartPin = parseInt(pin);
    if (accountNumber.length === 11) {
      if (convartPin === 1234) {
        window.location.href = './main.html';
      } else {
        alert('pin thik nai');
      }
    } else {
      alert('need valid account number');
    }
  });
