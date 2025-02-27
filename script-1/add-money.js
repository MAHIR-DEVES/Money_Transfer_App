document
  .getElementById('add-money')
  .addEventListener('click', function (event) {
    event.preventDefault();
    const amount = document.getElementById('Amount').value;
    const convartedAmont = parseFloat(amount);
    const pin = document.getElementById('pin').value;
    const convartedPin = parseInt(pin);

    const mainBlance = document.getElementById('main-blasnce').innerText;
    const mainBlanceConvarted = parseFloat(mainBlance);

    if (convartedPin === 1234) {
      const sum = convartedAmont + mainBlanceConvarted;
      document.getElementById('main-blasnce').innerText = sum;
    } else {
      console.log('add hba na');
    }
  });
