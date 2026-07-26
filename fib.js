function fibRec(n) {

    if (n === 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
    const sequence = fib(n - 1);
    sequence.push(sequence[sequence.length - 1] + (sequence[sequence.length - 2]));
    return sequence;
}


function fibReg(n) {

    let arr = [0, 1]
    if (n === 0) return [];
    if (n === 1) return arr[0];
    for (let i = 2; i < n; i++) {
        arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    }
    return arr;
}
