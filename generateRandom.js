
let _w = 1000;
let _h = 600;

let arr = [];
let states = [];
let length = 190;
let w = 5;

let min = 5;
let max = 500;

randomArr();

function randomArr(){
    arr = [];
    for(i=0;i<length;i++){
        states.push(-1);
        arr.push(Math.floor(Math.random() * (max - min) ) + min);
    }
    gap = (_w - (length * w))/2;
    // console.log(arr);
}
