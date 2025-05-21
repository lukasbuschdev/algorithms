const arr = Array.from({ length: 100000 }, (_, i) => i + 1);
arr.sort(() => Math.random() - 0.5);


init();

function init() {
    standardSort();
    selectionSort();
    insertionSort();
    bubbleSort();
    // mergeSort();
}



// ### STANDARD ARRAY METHOD "SORT" ###
// Time complexity: O()

function standardSort() {
    const start = performance.now();

    arr.sort((a, b) => a - b);

    const end = performance.now();
    console.log('Standard sort time: ', (end - start).toFixed(2))
}



// ### SELECTION SORT ###
// Time complexity: O(n²)

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
// Time complexity: O(n²)

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
// Time complexity: O(n)

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

function mergeSort() {
    const start = performance.now();
    
    // CODE

    const end = performance.now();
    console.log('Merge sort time: ', (end - start).toFixed(2))
}
