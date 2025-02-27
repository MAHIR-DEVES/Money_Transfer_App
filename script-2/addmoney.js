document
  .getElementById('add-money-btn')
  .addEventListener('click', function (event) {
    event.preventDefault();
    const acountNmber = document.getElementById('account-number').value;
    const pin = document.getElementById('pin').value;
    const convartedPin = parseInt(pin);
    const mainBlance = document.getElementById('main-blasnce').innerText;
    const convertedMainBlance = parseFloat(mainBlance);
    const amount = document.getElementById('Amount').value;
    const convartedAmount = parseFloat(amount);
    console.log(convartedAmount);

    if (acountNmber.length === 11) {
      if (convartedPin === 1234) {
        const sum = convertedMainBlance + convartedAmount;
        console.log(sum);

        document.getElementById('main-blasnce').innerText = sum;
      } else {
        alert('enter valid pin');
      }
    } else {
      alert('enter valid account number');
    }
  });
