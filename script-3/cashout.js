// cashout
document
  .getElementById('cashOutBtn')
  .addEventListener('click', function (event) {
    event.preventDefault();
    const acountNumber = document.getElementById('account-number').value;
    const pin = getInputValueById('pin');
    const mainBlance = getInerTextById('main-blasnce');
    const amonut = getInputValueById('cashOut-Amount');

    if (amonut > mainBlance) {
      alert('hba na');
      return;
    }

    if (acountNumber.length === 11) {
      if (pin === 1234) {
        const sum = mainBlance - amonut;
        setInnerTextByIdAndValue('main-blasnce', sum);

        const container = document.getElementById('treansetion-container');
        const p = document.createElement('p');
        p.innerText = `
         cashout ${amonut} form${acountNumber}
         `;
        container.appendChild(p);
      } else {
        alert('enter valid Pin');
      }
    } else {
      alert('enter valid acount number');
    }
  });
