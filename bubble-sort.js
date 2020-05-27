function bubble_draw(){
    
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
