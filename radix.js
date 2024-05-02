function getDigit(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) +1;
}

function mostDigits(arr) {
    let maxDigits = 0;
    for (let i = 0; i<arr.length; i++){
        maxDigits = Math.max(maxDigits, digitCount(arr[i]))
    }
    return maxDigits;
}

function radixSort(arr) {

    let maxDigitCount = mostDigits(arr);

    for(let k = 0; k < maxDigitCount; k++){
        let buckets = Array.from({length : 10}, () => []);
        for (let i = 0; i < arr.length; i++){
            let digit = getDigit(arr[i], k)

            buckets[digit].push(arr[i]);
        }
        arr = [].concat(...buckets)
    }
    return arr;
}

const testArray = [22, 34, 8979, 1]
console.log(mostDigits(testArray))

    
module.exports = { getDigit, digitCount, mostDigits, radixSort }