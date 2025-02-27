document
  .getElementById('login-btn')
  .addEventListener('click', function (event) {
    event.preventDefault();
    const acountNumber = document.getElementById('account-number').value;
    const convartedAcountNumber = parseInt(acountNumber);
    const pinNumber = document.getElementById('pin').value;
    const convaredPin = parseInt(pinNumber);

    if (acountNumber.length === 11) {
      if (convaredPin === 1234) {
        window.location.href = '../main.html';
      } else {
        console.log('toor pin tik nai');
      }
    } else {
      console.log('tur account number tik nai');
    }
  });
