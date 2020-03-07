export const algorithms = {
    default: null,
    bubbleSort: (nums) => {
        let moves=[];
        let swapped;

        function bubbleSort(arr) {
            swapped = false;
            let end = arr.length -1;
            for (let i = 0; i < end; i++) {
                if (parseInt(arr[i].innerHTML) > parseInt(arr[i+1].innerHTML)) {
                    swapped = true;
                    moves.push([arr[i].innerHTML, arr[i+1].innerHTML])

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
            while (j >= 0 && parseInt(nums[j].innerHTML) > parseInt(key.innerHTML)) {
                moves.push([nums[j].innerHTML, key.innerHTML]);
                nums[j+1] = nums[j];
                j = j-1;
            }
            nums[j+1] = key;
        }
        return moves;
    } 

};

