// Класс позволяет расчитать бонусы
const audienceThreshold = require('../constants/creditsSettings');

class Credits {
    constructor(invoice){
        this.invoice = invoice;
    }

    calcAllCredits() {
        this.creditsVolume = 0;
        this.comedyCounter = 0;
        for (let perf of this.invoice.performance) {
            this.creditsVolume += Math.max(perf.audience - audienceThreshold, 0);
            if (perf.type === 'comedy') {
                this.calcComedyCredits(perf);
            }
        }
        return this.creditsVolume;
    }

    calcComedyCredits(perf) {
            this.comedyCounter += 1;
        if (this.comedyCounter === 10) {
            this.creditsVolume += math.floor(perf.audience / 5);
            this.comedyCounter = 0;
        }
    }
}

module.exports = Credits;
