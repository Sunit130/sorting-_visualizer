
// let arr = [];
// let length = 160;
// let w = 5;
// let min = 5;
// let max = 500;
// let gap;
// let i;

// function setup(){
//     createCanvas(800,600);
//     frameRate(20);
//     for(i=0;i<length;i++){
//         arr.push(random(min,max));
//     }
//     gap = (width - (length * w))/2;
//
//     i=0;
//
// }

function bubble_draw(){
    // background(220);

    // for(let j=0;j<length;j++){
    //     fill(255);
    //     strokeWeight(0.25)
    //     rect(gap + j*w, height - arr[j], w, arr[j]);
    // }
    fill(color('#6af7ec'));
    rect(gap + (0)*w, height - arr[0], w, arr[0]);



    for(let j=0;j< length -i-1; j++){
        fill(color('#6af7ec'));
        rect(gap + (j+1)*w, height - arr[j+1], w, arr[j+1]);
        if(arr[j] > arr[j+1]){
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
    fill(255,0,255,100);
    rect(gap + (length -i-1)*w, height - arr[length -i-1], w, arr[length -i-1]);

    i++;
    if(i>length){
        return;
    }

}
