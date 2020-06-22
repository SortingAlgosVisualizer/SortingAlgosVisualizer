function randomArray(length, maxVal){
    let data = [];
    for(i=0; i<length; i++){
        data.push(Math.floor(Math.random()*(maxVal+1)));
    }
    return data;
}


var data = randomArray(12,36);

function merge(left, right){
    let result = [];
    let i = 0;
    let j = 0;
    while(i<length(left) && j<length(right)){
        if(left[i] < right[j]){
            result.push(left[i])
            i++;
        }else{
            result.push(right[j]);
            j++
        }
    }
    while(i < length(left)){
        result.push(left[i]);
        i++;
    }
    while(j < length(right)){
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
        let right = mergeSort(dataset.slice(middle, dataset.length)
    }
}


// def merge(left, right):
//     result = []
//     i,j = 0,0
//     while i < len(left) and j < len(right):
//         if left[i] < right[j]:
//             result.append(left[i])
//             i += 1
//         else:
//             result.append(right[j])
//             j += 1
//     while (i < len(left)):
//         result.append(left[i])
//         i += 1
//     while (j < len(right)):
//         result.append(right[j])
//         j += 1
//     print('merge: ' + str(left) + '&' + str(right) + ' to ' +str(result))
//     return result

// def merge_sort(L):
//     print('merge sort: ' + str(L))
//     if len(L) < 2:
//         return L[:]
//     else:
//         middle = len(L)//2
//         left = merge_sort(L[:middle])
//         right = merge_sort(L[middle:])
//         return merge(left, right)
        
// testList = [1,3,5,7,2,6,25,18,13]

// #print('')
// #print(merge_sort(testList))