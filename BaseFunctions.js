//Move item down
function moveDown(index){
    //Set how far we move the item down
    var downDistance = 100;
    var item = findElement(index);
    var coord = parseTransform(item);
    coord[1] = coord[1] + downDistance;
    item.transition().duration(1000).attr("transform", "translate(" + coord[0] + "," + coord[1] + ")");
}

//Move item up
function moveUp(index){
    //Set how far we move the item down
    var upDistance = 100;
    var item = findElement(index);
    var coord = parseTransform(item);
    coord[1] = coord[1] - upDistance;
    item.transition().duration(1000).attr("transform", "translate(" + coord[0] + "," + coord[1] + ")");
}

//Move item left
function moveLeft(index){
    //Set how far we move the item down
    var leftDistance = barWidth;
    var item = findElement(index);
    var coord = parseTransform(item);
    coord[0] = coord[0] - leftDistance;
    item.transition().duration(1000).attr("transform", "translate(" + coord[0] + "," + coord[1] + ")");
}

//Move item right
function moveRight(index){
    //Set how far we move the item down
    var rightDistance = barWidth;
    var item = findElement(index);
    var coord = parseTransform(item);
    coord[0] = coord[0] + rightDistance;
    item.transition().duration(1000).attr("transform", "translate(" + coord[0] + "," + coord[1] + ")");
}

//Pass in entire element and output is an array with the [x, y] of the transform attribute
function parseTransform(element){
    if(element == null) return null;
    var transform = element.attr("transform");
    var coord = transform.match(/\d+/g);
    return [parseInt(coord[0]), parseInt(coord[1])];
}

//swap color function, takes bar num and color
function changeColor(num, color){
    if (num===-1) {
        let bars = svg.selectAll("g")
        bars.select("rect").transition().attr("fill","blue");
        return;
    }
    let bar = findElement(num);
    bar.select("rect").transition().attr("fill",color);
}

//Finds by position ID and returns the entire element
function findElement(position){
    position += 1;
    return svg.selectAll("g").filter(function() {return d3.select(this).attr("positionID") == "p" + position;});
}

//Swaps position IDs of the elements at the two given position IDs
function swapPositionID(item1, item2){
    var item1 = findElement(item1);
    var item2 = findElement(item2);
    var temp = item1.attr("positionID");
    item1.attr("positionID", item2.attr("positionID"));
    item2.attr("positionID", temp);
}

//Function to show initial data in graph and generate initial elements
function initialBars(data){
    loadPseudocode(-1);
    ////// create a g tag first to group rect and text
    var barChart = svg.selectAll("g")  
    .data(data)
    .enter()
    .append("g")
    // .attr("id", function(d,i){return 'item'+i;})
    .attr("transform", function(d, i){return "translate(" + (barWidth * i) + "," + (svgHeight-d) + ")";})               
    .attr("positionID", function(d,i){return "p"+(i+1);});
    
    barChart.append("rect")
    .attr("height",function(d) {return d;})
    .attr("width",barWidth-barPadding)
    .attr("rx",5)
    .attr('fill', '#3c763d');

    barChart.append("text")
    .attr("x",(barWidth-barPadding)/2)
    .attr("text-anchor", "middle")
    .text(function(d) {return d;});

}

function swapPosition(num1, num2) { 
    let gRight = findElement(num1);
    let gLeft = findElement(num2);
    let hRight = parseInt(gRight.select("rect").attr("height"));
    let hLeft = parseInt(gLeft.select("rect").attr("height"));
    gRight.transition().attr("transform", "translate(" + (barWidth * (num2-1)) + "," + (svgHeight-hRight) + ")");
    gLeft.transition().attr("transform", "translate(" + (barWidth * (num1-1)) + "," + (svgHeight-hLeft) + ")");
    swapPositionID(num1, num2);
}