// 1. Declare customerName in global scope
var customerName = 'bob';

// 2. Function to uppercase customerName
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

// 3. Function to declare bestCustomer in global scope
function setBestCustomer() {
    bestCustomer = 'not bob'; // Implicitly global
}

// 4. Function to overwrite bestCustomer
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

// 5. Declare leastFavoriteCustomer as a constant
const leastFavoriteCustomer = 'someone';

// 6. Function to attempt changing leastFavoriteCustomer
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'someone else'; // This will cause an error
}

