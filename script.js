//The text evaporating
const text = document.getElementById('smoke-text').innerHTML;
const return_array = text.split(' ');

let return_text = '';

for (let i = 0; i < return_array.length; i++) {
    return_text = return_text + ' <span>' + return_array[i] + '</span>';
}

document.getElementById('smoke-text').innerHTML = return_text;

function load_listners() {
    const letters = document.querySelectorAll('span');
    for (let x = 0; x < letters.length; x++) {
        letters[x].addEventListener("mouseover", function
        (){
            letters[x].classList.add("active");
        })
    }
}

load_listners();