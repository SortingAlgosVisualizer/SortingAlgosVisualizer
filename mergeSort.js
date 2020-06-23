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

function merg(dataset, l, m, r){
    let n1 = m-l+1;
    let n2 = r-m;

    let left = [];
    let right = [];
    for(let i=0; i<n1; i++){
        left[i] = dataset[l+i];
    }
    for(let j=0; j<n2; j++){
        right[j] = dataset[m+l+j];
    }
    let i = 0;
    let j = 0; 
    let k = l;
    while(i<n1 && j<n2){
        if(left[i] <= right[j]){
            dataset[k] = left[i];
            i++;
        }else{
            dataset[k] = right[j];
            j++;
        }
        k++;
    }
    while(i<n1){
        dataset[k] = left[i];
        i++;
        k++;
    }
    while(j<n2){
        dataset[k] = right[j];
        j++;
        k++;
    }
}

function mergeSortNoRecursion(dataset){
    for(range = 1; range<dataset.length; range*=2){
        for(let i=0; i<dataset.length; i+=2*range){
           let mid = Math.min(i+range-1, dataset.length-1);
           let j = Math.min(i+2*range, dataset.length-1);
           merg(dataset, i, mid, j);
        }
    }
    return dataset;
}

// var data = randomArray(12,36);
// console.log(data);
// console.log(mergeSortNoRecursion(data));


//  now without recursion!

function bottomUpMergeSort(dataset) {
    var array = [];

    if (dataset) {
      array = dataset.map(function(data) { return data; });
    }
    bottomUpSort(array, array.length);
    return array;
  }
  
  function bottomUpSort(dataset, n) {
    var width,
        i;
    
    for (width=1; width<n; width=width*2) {
      for (i=0; i<n; i=i+2*width) {
        bottomUpMerge(dataset, i, Math.min(i+width, n), Math.min(i+2*width, n));
      }
    }
  }
  
  function bottomUpMerge(dataset, left, right, end) {
    var n = left,
        m = right,
        currentSort = [],
        j;
    
    for (j=left; j<end; j++) {
      if (n<right && (m>=end || dataset[n]<dataset[m])) {
        currentSort.push(dataset[n]);
        n++;
      }
      else {
        currentSort.push(dataset[m]);
        m++;
      }
    }
    console.log("sorting: ", dataset);
    currentSort.map(function(data,i) { dataset[left + i] = data; });
  }

  var data = randomArray(12,36);
  console.log(data);
  console.log(bottomUpMergeSort(data));