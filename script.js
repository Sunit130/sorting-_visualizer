let v = 0;
let frame_rate;
let canv;

function sortMethod(){
    v = document.querySelector('#type').value;
    document.getElementById("type").disabled = true;
    document.getElementById("sort_button").disabled = true;
    document.getElementById("generateRandom").disabled = true;
    if(v == 1 && !isSorted(arr, arr.length)){
        i=0;
    }
    if(v == 2 && !isSorted(arr, arr.length))
        i=0;
    if(v == 3 && !isSorted(arr, arr.length))
        i=0;
    if(v == 4 && !isSorted(arr, arr.length))
        quicksort(arr, 0, arr.length-1);
    if(v == 5 && !isSorted(arr, arr.length))
        mergeSort(arr, 0, arr.length -1);
    // console.log(v);
}

function isSorted(arr, n)
{
    if (n == 1 || n == 0)
        return 1;
      if (arr[n - 1] < arr[n - 2])
        return 0;

    return isSorted(arr, n - 1);
}

function setup(){
    canv = createCanvas(_w, _h);
}

function draw(){
    let pos = (windowWidth - _w)/2;
    if(pos<0)
        pos = 0;
    canv.position(pos,30);
    background(color('#1c1c1c'));
    for(let j=0;j<length;j++){
        fill(255);
        strokeWeight(0.05);
        rect(gap + j*w, height - arr[j], w, arr[j]);
    }
    if(isSorted(arr, arr.length)){
        for(let j=0;j<length;j++){
            fill(150,255,150);
            strokeWeight(0.05);
            rect(gap + j*w, height - arr[j], w, arr[j]);
        }
        document.getElementById("type").disabled = false;
        document.getElementById("sort_button").disabled = false;
        document.getElementById("generateRandom").disabled = false;
        v = 0;
    }
    if(v == 1){
        frameRate(20);
        bubble_draw();
    }
    if(v == 2){
        frameRate(20);
        sellection_draw();
    }
    if(v == 3){
        frameRate(10);
        insertion_draw();
    }
    if(v == 4)
        quick_draw();
    if(v == 5)
        merge_draw();

}
