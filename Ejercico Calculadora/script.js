const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let current = '';

buttons.forEach(button => {
button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === 'RESET') {
    current = '';
    display.textContent = '0';
    } else if (value === 'DEL') {
    current = current.slice(0, -1);
    display.textContent = current || '0';
    } else if (value === '=') {
    try {
        current = eval(current).toString();
        display.textContent = Number(current).toLocaleString();
    } catch {
        display.textContent = 'Error';
        current = '';
    }
    } else {
    current += value;
    display.textContent = current;
    }
});
});