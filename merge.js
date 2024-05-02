function merge(arr1, arr2) {
    let mergedNums = [];
    let i = 0;
    let j = 0;
    
    while (i < arr1.length && j < arr2.length){
        if (arr2[j] > arr1[i]){
            mergedNums.push(arr1[i]);
            i++;
        } else {
            mergedNums.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length){
        mergedNums.push(arr1[i]);
        i++;
    }
    while (j < arr2.length){
        mergedNums.push(arr2[j]);
        j++;
    }

    return mergedNums;
}

function mergeSort(arr) {
    if(arr.length <= 1) return arr;
    const mid = Math.floor(arr.length/2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

module.exports = { merge, mergeSort};