const arr = Array.from({ length: 100000 }, (_, i) => i + 1);
arr.sort(() => Math.random() - 0.5);


init();

function init() {
    // standardSort();
    // selectionSort();
    // insertionSort();
    // bubbleSort();
    // quickSortFunction();
    // mergeSortFunction();
}



// ### STANDARD ARRAY METHOD "SORT" ###

// Time complexity:     O(n log n)
// Best case:           O(n)
// Space complexity:    O(n)

function standardSort() {
    const start = performance.now();

    arr.sort((a, b) => a - b);

    const end = performance.now();
    console.log('Standard sort time: ', (end - start).toFixed(2))
}



// ### SELECTION SORT ###

// Time complexity:     O(n²)
// Space complexity:    O(1) -> (in-place)

function selectionSort() {
    const start = performance.now();
    
    for(let i = 0; i < arr.length; i++) {                       // outer loop: iterating over each position of arr
        let minIndex = i;                                       // assume: smallest number is a index i 

        for(let j = i + 1; j < arr.length; j++) {               // inner loop: looking for smallest number; starting at index 'i + 1' -> everything before is already sorted
            if(arr[j] < arr[minIndex]) {                        // check if: number at current index 'arr[j]' is smaller than number at index arr[minIndex]
                minIndex = j;                                   // if true: set the index 'minIndex' to the current index 'j'
            }

        }

        if(minIndex !== i) {                                    // check if: index 'minIndex' is not the same as the index 'i' of the current outer loop
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];  // swap: the number 'arr[i]' with the number 'arr[minIndex]'
        }
    }

    const end = performance.now();
    console.log('Selection sort time: ', (end - start).toFixed(2))
}



// ### INSERTION SORT ###

// Best case:           O(n)
// Average:             O(n²)
// Worst case:          O(n²)
// Space complexity:    O(1) -> (in-place)

function insertionSort() {
    const start = performance.now();
    
    for(let i = 0; i < arr.length; i++) {                       
        const current = arr[i];
        let j = i - 1;

        while(j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = current;
    }

    const end = performance.now();
    console.log('Insertion sort time: ', (end - start).toFixed(2))
}



// ### BUBBLE SORT ###

// Best case:           O(n)
// Average:             O(n²)
// Worst case:          O(n²)
// Space complexity:    O(1) -> (in-place)

function bubbleSort() {
    const start = performance.now();
    
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length - i - 1; j++) {
            if(arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }

    const end = performance.now();
    console.log('Bubble sort time: ', (end - start).toFixed(2))
}



// ### MERGE SORT ###

// All cases:           O(n log n)
// Space complexity:    O(n) -> (needs extra arrays)

function mergeSortFunction() {
    const start = performance.now();
    
    const sorted = mergeSort(arr);

    const end = performance.now();
    console.log('Merge sort time: ', (end - start).toFixed(2))
}

function mergeSort(array) {
    if(array.length <= 1) return array;

    let mid = Math.floor(array.length / 2);

    let left = mergeSort(array.slice(0, mid));
    let right = mergeSort(array.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    let sortedArray = [];

    while(left.length && right.length) {
        if(left[0] < right[0]) {
            sortedArray.push(left.shift());
        } else {
            sortedArray.push(right.shift());
        }
    }

    return [...sortedArray, ...left, ...right];
}



// ### QUICK SORT ###

function quickSortFunction() {
    const start = performance.now();

    const sorted = quickSort(arr);
    
    const end = performance.now();
    console.log('Quick sort time: ', (end - start).toFixed(2))
}

// Best case:           O(n log n)
// Average:             O(n log n)
// Worst case:          O(n²)
// Space complexity:    O(n) -> (not in-place)

function quickSort(array) {
    if(array.length <= 1) return array;

    const pivot = array[0];
    const left = [];
    const right = [];

    for(let i = 1; i < array.length; i++) {
        if(array[i] < pivot) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}
