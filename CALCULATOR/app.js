let inputBox = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = '';
buttons.forEach(element => {
    element.addEventListener('click', (b) => {
        if (b.target.innerText == '=') {
            try {
                string = String(eval(string));
            } catch (e) {
                string = 'Error';
            }
            inputBox.value = string;
        } else if (b.target.innerText == 'AC') {
            string = '';
            inputBox.value = string;
        } else if (b.target.innerText == 'DEL') {
            string = string.substring(0, string.length - 1);
            inputBox.value = string;
        } else if (b.target.id == 'plusMinus') {
            try {
                string = String(-eval(string));
            } catch (e) {
                string = 'Error';
            }
            inputBox.value = string;
        } else {
            string += b.target.innerText;
            inputBox.value = string;
        }
    });
});
