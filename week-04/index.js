const bagetPrice = 1.05;
const bagetQuantity = 2;

const butterPrice = 2;
const butterQuantity = 1;

const milkPrice = 0.86;
const milkQuantity = 2;

let totalPriceOfTheBasket = 0;


// Your functions will go below this line...

function calculatePriceWithQuantity(price, quantity){
    return price * quantity;
}
const totalBagetPrice = calculatePriceWithQuantity(bagetPrice, bagetQuantity);
const totalButterPrice = calculatePriceWithQuantity(butterPrice, butterQuantity);
const totalMilkPrice = calculatePriceWithQuantity(milkPrice, milkQuantity);

function calculateTotalPriceOfBasket(totalBagetPrice, totalButterPrice, totalMilkPrice){
    return totalBagetPrice + totalButterPrice + totalMilkPrice;
}

totalPriceOfTheBasket = calculateTotalPriceOfBasket(totalBagetPrice, totalButterPrice, totalMilkPrice);

function formatThePrice(totalPriceOfTheBasket){
    return "The total price of your basket is: £" + totalPriceOfTheBasket.toFixed(2);
}

console.log( formatThePrice(totalPriceOfTheBasket) );


// The output should be "The total price for your basket is: £5.82"
