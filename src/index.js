const numbers = {
    ones: ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
    tens: ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
}

module.exports = function toReadable (num) {
    if (!num || num === 0) return 'zero';

    let result = '';

    while (num > 0) {
        const oneThousandthPart = num % 1000;
        if (oneThousandthPart) {
            const currentPowers = Math.floor(oneThousandthPart / 100);
            const currentTens = Math.floor((oneThousandthPart % 100) / 10);
            const currentOnes = oneThousandthPart % 10;
            result =
                (currentPowers ? numbers.ones[currentPowers] + ' hundred ' : '')
                + (currentTens >= 2
                    ? numbers.tens[currentTens] + ' ' + numbers.ones[currentOnes]
                    : numbers.ones[currentTens * 10 + currentOnes]);
        }
        num = Math.floor(num / 1000);
    }

    return result.trim();
}

