const priceElement = document.getElementById("product");
const numberElement = document.getElementById("number");

function add(){
    const price = parseInt(priceElement.value);
    const number = parseInt(numberElement.value);
    const purchase={
    price: price,
    number: number,
  }
  purchase.push(purchase);
}

function calc() {
    let sum = 0;
    for(let index = 0; index < purchases.length; index++) {
      sum += purchases[index].price * purchases[index].number;
    }
    window.alert('El total es de '+ sum +' yenes');
    purchases = [];
    priceElement.value= "";
    numberElement.value = "";
}
