
let pivot_time = 50;
let swap_time = 2;

async function partition(arr, start, end){
    pivot_index = start;
    states[end] = 1;
    pivot = arr[end];
    for(let i=start;i<end;i++){
        states[i]=0;
        if(arr[i] < pivot){

            await swap(arr, i, pivot_index);
            states[pivot_index]=-2;
            // let temp = arr[i];
            // arr[i] = arr[pivot_index];
            // arr[pivot_index] = temp;
            pivot_index++;

        }

    }
    await sleep(pivot_time);
    await swap(arr, end, pivot_index);
    // await sleep(500);
    if(pivot_index != end)
    {
        states[pivot_index] = 1;
        states[end] = 0;
    }
    await sleep(pivot_time);
    for(let i=start;i<=end;i++){
        states[i]=-1;
    }
    return pivot_index;
}

async function quicksort(arr, start, end){
    if(start>=end){
        return;
    }

    let index = await partition(arr, start, end);
    await quicksort(arr, start, index-1);
    await quicksort(arr, index+1, end);
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function swap( arr, i, j){
    await sleep(swap_time);
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp
}

function quick_draw(){
    // background(220);
    for(let j=0;j<length;j++){
        fill(255);
        if(states[j] == 0)
            fill(color('#b7f280'));
        if(states[j] == -2)
            fill(color('#6af7ec'));
        if(states[j] == 1)
            fill(255,0,255);
        strokeWeight(0.05)
        rect(gap + j*w, height - arr[j], w, arr[j]);
    }
}
