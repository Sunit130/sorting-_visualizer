
// let arr = [];
// let length = 400;
// let w = 2;
// let min = 5;
// let max = 500;
// let gap;
// let i=0;

// function setup(){
//     createCanvas(800,600);
//     frameRate(30);
//     gap = (width - (w*length))/2;
//     for(let i=0;i<length;i++){
//         let e = random(min,max);
//         arr.push(e);
//     }
//     i=0;
// }

function sellection_draw(){
    // background(220);

    let k=i;
    for(let j=i;j<length;j++){
        if(arr[k] > arr[j]){
            k=j;
        }
    }

    // for(let j=0;j<length;j++){
    //     fill(255);
    //     strokeWeight(0.25);
    //     rect(gap + j*w ,height - arr[j],w,arr[j]);
    // }
    fill(255,0,255);
    strokeWeight(0.25);
    rect(gap + i*w ,height - arr[i],w,arr[i]);
    fill(color('#6af7ec'));
    strokeWeight(0.25);
    rect(gap + k*w ,height - arr[k],w,arr[k]);
    if(arr[i] > arr[k]){
        let temp = arr[i];
        arr[i] = arr[k];
        arr[k] = temp;
    }
    i++;
    if(i > length){
        return;
    }
}
