document
  .getElementById('add-money-btn')
  .addEventListener('click', function (event) {
    event.preventDefault();
    const pin = document.getElementById('pin').value;
    const convaredPin = parseInt(pin);

    const amount = document.getElementById('Amount').value;
    const convaredAmount = parseFloat(amount);
    const mainBalence = document.getElementById('main-blasnce').innerText;
    const convartedMainBlance = parseFloat(mainBalence);

    if (amount && pin) {
      if (convaredPin === 1234) {
        const sum = convartedMainBlance + convaredAmount;
        document.getElementById('main-blasnce').innerText = sum;
      } else {
        alert('inter valid pin');
      }
    } else {
      alert('enter amount');
    }
  });
