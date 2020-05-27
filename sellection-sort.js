function sellection_draw(){
    
    let k=i;
    for(let j=i;j<length;j++){
        if(arr[k] > arr[j]){
            k=j;
        }
    }

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
