
function merge(a, b) {
    let result = [];
    let i = 0, j = 0;
    while (a.length > i && b.length > j) {
        if (a[i] < b[j]) {
            result.push(a[i]);
            i++;
        } else {
            result.push(b[j]);
            j++;
        }
    }
    if (a.length > i) {
        result.push(...a.slice(i));
    } else if (b.length > j) {
        result.push(...b.slice(j));
    }
    return result;
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    let left = arr.slice(Math.floor(arr.length / 2), arr.length);
    let right = arr.slice(0, Math.floor(arr.length / 2));

    left = mergeSort(left);
    right = mergeSort(right);

    let result = merge(left, right);
    return result;
}

