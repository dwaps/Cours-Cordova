document.addEventListener('deviceready', onDeviceReady, false);
function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');

}

const formPizza = document.querySelector('form');
const listPizza = document.querySelector('.pizzas');

formPizza.onsubmit = (e) => {
    e.preventDefault();
    const pizza = document.createElement("p");
    pizza.classList.add('pizza')
    pizza.textContent = document.getElementById('addPizza').value;
    listPizza.appendChild(pizza);
}
