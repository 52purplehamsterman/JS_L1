function expandedForm(num) {
    const numStr = num.toString();
    const expandedTerms = [];

    for (let i = 0; i < numStr.length; i++) {
        const digit = numStr[i];
        if (digit !== '0') {
            const placeValue = digit + '0'.repeat(numStr.length - i - 1);
            expandedTerms.push(placeValue);
        }
    }

    return expandedTerms.join(' + ');
}

