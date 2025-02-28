function whatCentury(year) {
    const yearInt = parseInt(year, 10);
    const century = Math.ceil(yearInt / 100);
    let suffix;
    if (century % 100 >= 11 && century % 100 <= 13) {
        suffix = 'th';
    } else {
        switch (century % 10) {
            case 1:
                suffix = 'st';
                break;
            case 2:
                suffix = 'nd';
                break;
            case 3:
                suffix = 'rd';
                break;
            default:
                suffix = 'th';
        }
    }
    return `${century}${suffix}`;
}
