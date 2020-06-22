function randomArray(length, maxVal){
    let data = [];
    for(i=0; i<length; i++){
        data.push(Math.floor(Math.random()*(maxVal+1)));
    }
    return data;
}

function merge(left, right){
    let result = [];
    let i = 0;
    let j = 0;
    while(i<left.length && j<right.length){
        if(left[i] < right[j]){
            result.push(left[i])
            i++;
        }else{
            result.push(right[j]);
            j++
        }
    }
    while(i < left.length){
        result.push(left[i]);
        i++;
    }
    while(j < right.length){
        result.push(right[j]);
        j++;
    }
    return result;
}

function mergeSort(dataset){
    if(dataset.length<2){
        return dataset;
    }else{
        let middle = Math.floor(dataset.length/2);
        let left = mergeSort(dataset.slice(0,middle));
        let right = mergeSort(dataset.slice(middle, dataset.length));
        return merge(left, right);
    }
}

var data = randomArray(12,36);
console.log(data);
console.log(mergeSort(data));


