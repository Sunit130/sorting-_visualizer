//
// let arr = [];
// let length = 150;
// let w = 5;
// let min = 5;
// let max = 500;
// let gap;
let i=0;

// function setup(){
//     createCanvas(800,600);
//     frameRate(5);
//     for(i=0;i<length;i++){
//         arr.push(random(min,max));
//     }
//     gap = (width - (length * w))/2;
//     i=0;
// }

function insertion_draw(){
    if(i>=length){
        return;
    }
    // for(let l=0;l<length;l++){
    //     fill(255);
    //     rect(gap + l*w, height - arr[l], w, arr[l]);
    // }
    fill(255,0,255);
    rect(gap + i*w, height - arr[i], w, arr[i]);

    let j,k;
    j = i-1;
    k = arr[i];
    while(j>=0 && arr[j]> k){
        if(j+1!=i){
            fill(color('#6af7ec'));
            rect(gap + (j+1)*w, height - arr[j+1], w, arr[j+1]);
        }
        arr[j+1] = arr[j];
        j--;
    }
    fill(0,200,255);
    rect(gap + (j+1)*w, height - arr[j+1], w, arr[j+1]);
    arr[j+1] = k;


    i++;
}
