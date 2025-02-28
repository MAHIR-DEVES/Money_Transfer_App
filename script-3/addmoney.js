document.addEventListener('DOMContentLoaded', function () {
  const selectBank = document.getElementById('allBank');

  selectBank.addEventListener('onChange', function () {
    let selectedBank = selectBank.value;
    console.log('Selected Bank:', selectedBank);
  });

  // Debugging: Check if the element exists
  if (!selectBank) {
    console.error("Error: Element with ID 'allBank' not found!");
  }
});
document
  .getElementById('add-money-btn')
  .addEventListener('click', function (event) {
    event.preventDefault();
    const amount = getInputValueById('Amount');
    const pin = getInputValueById('pin');
    const acount = document.getElementById('account-number').value;
    const mainBlance = getInerTextById('main-blasnce');

    if (amount < 0) {
      alert('Goribs 🤣');
      return;
    }

    if (acount.length === 11) {
      if (pin === 1234) {
        const sum = mainBlance + amount;
        // document.getElementById('main-blasnce').innerText = sum;
        setInnerTextByIdAndValue('main-blasnce', sum);
        const container = document.getElementById('treansetion-container');

        const p = document.createElement('p');
        p.classList.add('text-red-500', 'bg-red-200');
        p.innerText = `
        added ${amount} from ${acount} acount
        `;
        container.appendChild(p);
      } else {
        alert('enter valid pin');
      }
    } else {
      alert('enter valid acount number');
    }
  });
