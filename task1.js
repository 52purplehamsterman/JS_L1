function hasTwoCubeSums(n) {
    const pairs = new Set();
    for (let a = 1; a <= Math.cbrt(n); a++) {
        for (let b = a + 1; b <= Math.cbrt(n); b++) {
            if (Math.pow(a, 3) + Math.pow(b, 3) === n) {
                pairs.add(`${a},${b}`);
            }
        }
    }
    return pairs.size >= 2;
}
