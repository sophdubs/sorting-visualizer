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

export const populateGraph = function() {
    const list = document.querySelector('.bar-list');
    const barList = [];
    const nums = generateShuffledArray();
    for (let i = 0; i < nums.length; i++) {
        barList.push(`<li class="bar index${nums[i]}" style="grid-area: a${i}; height:${nums[i]}%;">${nums[i]}</li>`);
    }
    list.innerHTML = barList.join('');
}

export const swap = (arr, speed, self) => {
    for (let i = 0; i < arr.length; i++) {
        let timeout = setTimeout (() => {
            if (self.state.abort){
                clearTimeout(timeout);
                return;
            };
            let a = arr[i][0];
            let b = arr[i][1];
            
            let barA = document.querySelector(`.index${a}`);
            let barB = document.querySelector(`.index${b}`);
            
            let tempArea = barA.style.gridArea;
            barA.style.gridArea = barB.style.gridArea;
            barB.style.gridArea = tempArea;
        }, i * (150- speed));
    }
    setTimeout(() => {
        sorted();
    }, (arr.length + 0.8) * (150 - speed));
    
 }

 const sorted = () => {
     let bars = document.querySelectorAll('.bar');
     bars.forEach(bar => bar.classList.add('sorted'));
 }





 