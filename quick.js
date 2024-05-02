/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(arr, leftIndex, rightIndex) {
    const pivotIndex = Math.floor((leftIndex + rightIndex) / 2);

    while (leftIndex <= rightIndex) {
        while (arr[leftIndex] < arr[pivotIndex]) {
            leftIndex++;
        }
        while (items[rightIndex] > items[pivotIndex]) {
            rightIndex--;

        }
        if(leftIndex <= rightIndex){
            [items[leftIndex], items[rightIndex]] = [items[rightIndex], items[leftIndex]];
            leftIndex++;
            rightIndex++;
        }
    }
    return leftIndex;



}

/*
quickSort accepts an array, left index, and right index
*/

function quickSort(arr, leftIndex, rightIndex) { 
    if(arr.length <= 1){
        return arr;
    }
    let pivot = arr[0];
    let leftArr = [];
    let rightArr = [];

    for(let i = 1; i < arr.length; i++){
        if(arr[i] < pivot){
            leftArr.push(arr[i]);
        } else {
            rightArr.push(arr[i]);
        }
        return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]
    }

}

module.exports = {quickSort, pivot};