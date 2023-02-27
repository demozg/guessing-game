class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.resultNumbers = Math.round((this.min + this.max)/2);
        return this.resultNumbers;
    }

    lower() {
        this.max = this.resultNumbers;
    }

    greater() {
        this.min = this.resultNumbers;
    }
}

module.exports = GuessingGame;