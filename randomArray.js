function randomArray(length, upperLimit) {
    var newArray = [];
    for (var x = 0; x < length; x++) {
        newArray.push(Math.floor(Math.random()*((upperLimit+1) - 3 + 1)) + 3);
    }
    return newArray;
}

// *******************************************************************************************
// called inside 'reset' to generate new random values and load them into originalData array
// *******************************************************************************************

// $("#reset").click(function(){
//     stopSort = true;
//     loadPseudocode(-1);
//     var currentchart = svg.selectAll("g").remove();
//     randomArray(15,150);
//     initialBars(originalData);

// });