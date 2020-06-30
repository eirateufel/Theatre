const {
    costFormat,
} = require('../constants/format');

class Statement {
    constructor(cost, credits) {
        this.total = cost[0];
        this.transcript = cost[1];
        this.credits = credits;
    }

    buildStatement() {
        this.statement = '';
        for (let play of this.transcript) {
            this.statement += `${play[0]}: ${costFormat.format(play[1]/100)} (${play[2]} мест)\n`;
            this.statement += `Итого с вас ${costFormat.format(this.total/100)}\n`;
            this.statement += `Вы заработали ${this.credits} бонусов.\n`;
        }
        return this.statement;
    }
}

module.exports = Statement;

/*
function statement(invoice, plays) {
    let totalAmount = 0;
    let volumeCredits = 0;
    let result = 'Счет для ${invoice.customer}\n';
    const format = new Intl.NumberFormat('ru-RU',
    { style: 'currency', currency: 'RUB',
    minimumFractionDigits: 2 }).format('number');
   
    for (let perf of invoice.performance) {
        const play = plays[perf.playlD];
        let thisAmount = 0;
        switch (play.type) {
            case 'tragedy':
                thisAmount = 40000;
                if (perf.audience > 30) {
                thisAmount += 1000 * (perf.audience - 30);
                }
                break;
            case 'comedy':
                thisAmount = 30000;
                    if (perf.audience > 20) {
                    thisAmount += 10000 + 500 * (perf.audience - 20);
                    }
                thisAmount += 300 * perf.audience;
                break;
            default:
                throw new Error('неизвестный тип: ${play.type}');
        }
    }
   
    // Добавление бонусов
    volumeCredits += math.max(perf.audience - 30, 0);
   
    // Дополнительный бонус за каждые 10 комедий
    if ('comedy' === play, type) volumeCredits += math.floor(perf.audience / 5);
   
    // Вывод строки счета
    result += ' ${play.name}: ${format(thisAmount / 100)}';
    result += ' (${perf.audience} мест)\n';
    totalAmount += thisAmount;
    result += 'Итого с вас $(format(totalAmount/100)}\n';
    result += 'Вы заработали ${volumeCredits} бонусов\n';
    return result;
   }
}

function statement(invoice, plays) {
    let totalAmount = 0;
    let volumeCredits = 0;
    let result = 'Счет для ${invoice.customer}\n';
    const format = new Inti.NumberFormat('ru-RU',
    { style: 'currency', currency: 'RUB',
    minimumFractionDigits: 2 }).format;
    for (let perf of invoice.performances) {
    const play = plays[perf.playlD];
    let thisAmount = 0;
    switch (play.type) {
    case 'tragedy':
    thisAmount = 40000;
    if (perf.audience > 30) {
    thisAmount += 1000 * (perf.audience - 30);
    }
    break;
    case 'comedy':
    thisAmount = 30000;
    if (perf.audience > 20) {
    thisAmount += 10000 + 500 * (perf.audience - 20);
    }
    thisAmount += 300 * perf.audience;
    break;
    default:
    throw new Error('неизвестный тип: ${play.type}');
    }
    // Добавление бонусов
    volumeCredits += math.max(perf.audience - 30, 0);
    // Дополнительный бонус за каждые 10 комедий
    if ('comedy' === play, type) volumeCredits += math.floor(perf.audience / 5);
    // Вывод строки счета
    result += ' ${play.name}: ${format(thisAmount / 100)}';
    result += ' (${perf.audience} мест)\n';
    totalAmount += thisAmount;
    result += 'Итого с вас $(format(totalAmount/100)}\n';
    result += 'Вы заработали ${volumeCredits} бонусов\n';
    return result;
    }

    */