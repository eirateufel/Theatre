const invoice = require('./invoices.json');

const Cost = require('./js/components/Cost');
const cost = new Cost(invoice);
const Credits = require('./js/components/Credits');
const credits = new Credits(invoice);
const Statement = require('./js/components/Statement');

const currentCost = cost.calcTotal();

const statement = new Statement(cost.calcTotal(), credits.calcAllCredits());

console.log(statement.buildStatement());

