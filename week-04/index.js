const bagetPrice = 1.05;
const bagetQuantity = 2;

const butterPrice = 2;
const butterQuantity = 1;

const milkPrice = 0.86;
const milkQuantity = 2;

let totalPriceOfTheBasket = 0;

// Your functions will go below this line...
function calculatePriceWithQuantity(price, quantity) {
   return price * quantity;
}

function calculateTotalPriceOfTheBasket(price1, price2, price3) {
   return price1 + price2 + price3;
}

function formatThePrice(price) {
   return "The total price for your basket is: £" + price.toFixed(2);
}

const priceOfBaget = calculatePriceWithQuantity(bagetPrice, bagetQuantity);
const priceOfButter = calculatePriceWithQuantity(butterPrice, butterQuantity);
const priceOfMilk = calculatePriceWithQuantity(milkPrice, milkQuantity);

totalPriceOfTheBasket = calculateTotalPriceOfTheBasket(
   priceOfBaget,
   priceOfButter,
   priceOfMilk
);

console.log(formatThePrice(totalPriceOfTheBasket));

// The output should be "The total price for your basket is: £5.82"
