document
  .getElementById('cashOutBtn')
  .addEventListener('click', function (event) {
    event.preventDefault();
    const pin = document.getElementById('cash-out-pin').value;
    covatrtedPin = parseInt(pin);
    const amount = document.getElementById('cashOut-Amount').value;
    convatertedAmount = parseFloat(amount);

    const mainBlance = document.getElementById('main-blasnce').innerText;
    convartedMainBlance = parseFloat(mainBlance);

    if (covatrtedPin === 1234) {
      const sum = convartedMainBlance - convatertedAmount;
      document.getElementById('main-blasnce').innerText = sum;
    } else {
      alert('inter valid Pin');
    }
  });
