const arr = Array.from({ length: 100000 }, (_, i) => i + 1);
arr.sort(() => Math.random() - 0.5);


init();

function init() {
    standardSort();
}



// ### STANDARD ARRAY METHOD "SORT" ###

function standardSort() {
    const start = performance.now();

    arr.sort((a, b) => a - b); // OR JUST -> arr.sort();

    const end = performance.now();
    console.log('Elapsed time: ', (end - start).toFixed(2))
}



// ### SELECTION SORT ###

function selectionSort() {
    const start = performance.now();
    
    // CODE

    const end = performance.now();
    console.log('Elapsed time: ', (end - start).toFixed(2))
}



// ### BUBBLE SORT ###

function bubbleSort() {
    const start = performance.now();
    
    // CODE

    const end = performance.now();
    console.log('Elapsed time: ', (end - start).toFixed(2))
}



// ### INSERTION SORT ###

function insertionSort() {
    const start = performance.now();
    
    // CODE

    const end = performance.now();
    console.log('Elapsed time: ', (end - start).toFixed(2))
}
