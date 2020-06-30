const invoice = require('./invoices.json');
const Cost = require('./js/components/Cost');
const Credits = require('./js/components/Credits');
const Statement = require('./js/components/Statement');

const cost = new Cost(invoice);
const credits = new Credits(invoice);
const statement = new Statement(cost.calcTotal(), credits.calcAllCredits());

console.log(statement.buildStatement());

