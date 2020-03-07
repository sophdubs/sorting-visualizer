const MAX = 99;
const LENGTH = 20;

export const generateShuffledArray = function() {
    let myArr = [];
    while (myArr.length < LENGTH) {
        let num = Math.floor(Math.random() * Math.floor(MAX)) + 1;
        if (!myArr.includes(num)) {
            myArr.push(num);
        }
    }
    return myArr;
}

export const swap = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        setTimeout (() => {
            let a = arr[i][0];
            let b = arr[i][1];
            
            let barA = document.querySelector(`.index${a}`);
            let barB = document.querySelector(`.index${b}`);
 
            let tempArea = barA.style.gridArea;
            barA.style.gridArea = barB.style.gridArea;
            barB.style.gridArea = tempArea;
 
 
        }, i * 200);
    }
 }