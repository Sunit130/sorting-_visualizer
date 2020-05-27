
let sleep_time = 10;

async function merge(arr, l, m, r){
    let n1 = m - l +1;
    let n2 = r - m;
    let L = [];
    let R = [];
    for(let i=0;i<n1;i++){
        L.push(arr[l + i]);
        states[l + i] = 0;
    }
    for(let i=0;i<n2;i++){
        R.push(arr[m+1+i]);
        states[m+1+i] = 1;
    }
    let i = 0, j =0, k = l;
    while(i<n1 && j<n2){

        if (L[i] <= R[j]) {
            await sleep(sleep_time);
            states[k] = 0;
            arr[k] = L[i];
            i++;
        }
        else{
            states[k] = 1;
            await sleep(sleep_time);
            arr[k] = R[j];
            j++;
        }
        k++;
    }

    while (i < n1) {
        await sleep(sleep_time);
        arr[k] = L[i];
        i++;
        k++;
    }

    while (j < n2) {
        await sleep(sleep_time);
        arr[k] = R[j];
        j++;
        k++;
    }
    for(let i=l;i<=r;i++)
        states[i]=-1;
}

async function mergeSort(arr, l, r){
    if(l < r){
        let m = floor((l+r)/2);
        await mergeSort(arr, l, m);
        await mergeSort(arr, m+1, r);
        await merge(arr, l, m, r);
    }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function merge_draw(){
    for(let j=0;j<length;j++){
        fill(255);
        if(states[j] == 0)
            fill(color('#fb94ff'));
        if(states[j] == 1)
            fill(color('#99ffee'));
        strokeWeight(0.05)
        rect(gap + j*w, height - arr[j], w, arr[j]);
    }
}
