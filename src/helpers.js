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