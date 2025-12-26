let currentDisplay = '';
document.querySelector('#display').value = currentDisplay;

const display = document.querySelector('#display');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const id = button.id;

    if (id === 'clear') {
      currentDisplay = '';
    } else if (id === 'equals') {
      try {
        currentDisplay = eval(currentDisplay);
      } catch {
        currentDisplay = 'Error';
      }
    } else {
      const value = button.textContent;
      currentDisplay += value;
    }

    display.value = currentDisplay;
  });
});

