let content = document.querySelector('.counter');

let decrement = () => {
    let value = parseInt(content.innerText);
    value = value - 1;
    content.innerText = value;
}

let increment = () => {
    let value = parseInt(content.innerText);
    value++;
    content.innerText = value;

}