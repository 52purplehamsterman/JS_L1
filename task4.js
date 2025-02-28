function findMissing(arr) {
    const d1 = arr[1] - arr[0];
    const d2 = arr[arr.length - 1] - arr[arr.length - 2];
    const d = Math.min(d1, d2);
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] !== d) {
            return arr[i - 1] + d;
        }
    }
    return null;
}
