export const data = {
    default: {
        type: 'Algorithm',
        description: 'A sorting algorithm is a method for reorganizing a large number of items into a specific order, such as alphabetical, highest-to-lowest value or shortest-to-longest distance. Sorting algorithms take lists of items as input data, perform specific operations on those lists and deliver ordered arrays as output.',
        runtime: 'An algorithm\'s run time is essentially a measure of its efficiency based on how long it takes to process a given input',
        space: 'Space complexity is a measure of the amount of working storage an algorithm needs.'
    },
    quickSort: {
        type: 'Quick Sort',
        description: '',
        runtime: '',
        space:''
    },
    insertionSort: {
        type: 'Insertion Sort',
        description: 'Insertion Sort is a simple sorting algorithm in which the elements are transferred one at a time to the right position. In other words, an insertion sort helps in building the final sorted list, one item at a time, with the movement of higher-ranked elements. This logic is similar to the one used by most people when sorting a hand of playing cards.',
        runtime: 'Insertion Sort is inefficient with large input lists given its average and worst case run time of O(n2). However, this algorithm has a best case run time of O(n) when the input list is sorted.',
        space: 'The space complexity for Insertion Sort is O(1), because only a single additional memory space is required i.e. for a temp variable when swapping two elements in the list.'
    },
    bubbleSort: {
        type: 'Bubble Sort',
        description: 'Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted. Though bubble sort is simple and easy to implement, it is highly impractical for solving most problems due to its slow running time.',
        runtime: 'Bubble Sort has an average and worst-case running time of O(n2), and can only run in its best-case running time of O(n) when the input list is already sorted.',
        space: 'The space complexity for Bubble Sort is O(1), because only a single additional memory space is required i.e. for a temp variable when swapping two elements in the list.'
    },
    selectionSort: {
        type: 'Selection Sort',
        description: 'Selection Sort is a simple sorting algorithm in which the list is divided into two parts: the sorted part at the left end and the unsorted part at the right end. Initially, the sorted part is empty and the unsorted part is the entire list. The smallest element is selected from the unsorted list and swapped with the leftmost element, and that element becomes a part of the sorted list. This process continues moving the unsorted list boundary by one element to the right until the entire list is sorted.',
        runtime: 'In all cases, the run time for Selection Sort is O(n2). This is because selecting the lowest element requires scanning all n elements. Finding the next lowest element requires scanning the remaining n - 1 elements, and so on. The result is a runtime of n(n-1)/2, or O(n2)',
        space: 'The space complexity for Selection Sort is O(1), because only a single additional memory space is required i.e. for a temp variable when swapping two elements in the list.'
    },
    heapSort: {
        type: 'Heap Sort',
        description: '',
        runtime: '',
        space: ''
    },
    cocktailShakerSort: {
        type: 'Cocktail Shaker Sort',
        description: 'Cocktail Shaker sort is a slight variation of bubble sort. It differs in that instead of repeatedly passing through the list from bottom to top, it passes alternately from bottom to top and then from top to bottom. It has the same runtime as Bubble Sort, but in practice, it can achieve a slightly better performance.',
        runtime: 'Cocktail Shaker Sort has an average and worst-case running time of O(n2), and can only run in its best-case running time of O(n) when the input list is already sorted.',
        space: 'The space complexity for Cocktail Shaker Sort is O(1), because only a single additional memory space is required i.e. for a temp variable when swapping two elements in the list.'
    },
    countSort: {
        type: 'Count Sort',
        description: '',
        runtime: '',
        space: ''
    },
    mergeSort: {
        type: 'Merge Sort',
        description: '',
        runtime: '',
        space: ''
    }
};