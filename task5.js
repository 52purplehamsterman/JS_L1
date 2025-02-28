
function primeFactors(n) {
    function isPrime(num) {
        if (num <= 1) return false;
        if (num <= 3) return true;
        if (num % 2 === 0 || num % 3 === 0) return false;
        for (let i = 5; i * i <= num; i += 6) {
            if (num % i === 0 || num % (i + 2) === 0) return false;
        }
        return true;
    }
    const factors = new Map();
    let divisor = 2;

    while (n > 1) {
        if (n % divisor === 0) {
            let count = 0;
            while (n % divisor === 0) {
                n /= divisor;
                count++;
            }
            factors.set(divisor, count);
        }
        divisor = isPrime(divisor + 1) ? divisor + 1 : divisor + 2;
    }

    let result = '';
    factors.forEach((count, prime) => {
        result += `(${prime}`;
        if (count > 1) {
            result += `**${count}`;
        }
        result += ')';
    });

    return result;
}
