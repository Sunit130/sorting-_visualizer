let i=0;

function insertion_draw(){
    
    if(i>=length){
        return;
    }

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
