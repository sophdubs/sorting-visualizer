export const algorithms = {
    default: null,
    bubbleSort: (nums) => {
        let moves=[];
        let swapped;

        function bubbleSort(arr) {
            swapped = false;
            let end = arr.length -1;
            for (let i = 0; i < end; i++) {
                if (arr[i] > arr[i+1]) {
                    swapped = true;
                    moves.push([arr[i], arr[i+1]]);
                    let temp = arr[i];
                    arr[i] = arr[i+1];
                    arr[i+1] = temp;
                }
            }
            end --;
        }
        do {
            bubbleSort(nums);
        } while (swapped);
        return moves; 
    },
    insertionSort: (nums) => {
        let moves = [];
        const length = nums.length;

        for (let i = 1; i < length; i++) {
            let key = nums[i];
            let j = i - 1;
            while (j >= 0 && nums[j] > key) {
                moves.push([nums[j], key]);
                nums[j+1] = nums[j];
                j = j-1;
            }
            nums[j+1] = key;
        }
        return moves;
    },
    selectionSort: (nums) => {
        let moves = [];
        for (let i = 0; i < nums.length; i++) {
            let minIdx = i;
            let minVal = nums[i];
            for (let j = i+1; j < nums.length; j++) {
                if (nums[j] < minVal) {
                    minVal = nums[j];
                    minIdx = j;
                }
            }
            if (minIdx !== i) {
                moves.push([nums[minIdx], nums[i]]);
                let temp = nums[i];
                nums[i] = minVal;
                nums[minIdx] = temp;

            }
        }
        return moves;
    }

};

// const mergeSort = (arr) => {
//     if (arr.length < 2) return arr;
//     const middle = Math.floor(arr.length / 2);
//     const left = arr.slice(0, middle);
//     const right = arr.slice(middle, arr.length);
//     return merge(mergeSort(left), mergeSort(right));
// }

// const merge = (left, right) =>  {
//     const result = [];
//     while (left.length && right.length) {
//         if (left[0] <= right[0]) {
//             result.push(left.shift());
//         } else {
//             result.push(right.shift());
//         }
//     }
//     while(left.length) {
//         result.push(left.shift());
//     }
//     while(right.length) {
//         result.push(right.shift());
//     }
//     return result;
// }





