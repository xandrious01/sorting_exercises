function bubbleSort(arr) {
    const length = arr.length;
    let isSwapped;

    for (let i = 0; i < length; i++) {
        isSwapped = false;

        for (let j = 0; j < length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                isSwapped = true;
            }
        }
        if (!isSwapped)
            break;
    }
    return arr;
}

module.exports = bubbleSort;