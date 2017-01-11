
const BUDGET_CONSTRAINT = 200;
const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;

var balance = 303.91
var amount = 0;

function calculateTax(amount) {
    return amount * TAX_RATE;
}

function formatAmount(amount) {
    return "$"  + amount.toFixed(2);
}

while(amount < balance) {

    amount += PHONE_PRICE;

    if( amount < BUDGET_CONSTRAINT) {
        amount += ACCESSORY_PRICE;
    }
}

amount += calculateTax(amount);

console.log( "Your purchase: " + formatAmount(amount) );

if (amount > balance){
    console.log( "Can't afford this" );
}


