var w=window.innerWidth,
    h=window.innerHeight,
    z = d3.scale.category20(),
    i = 0;


var svg = d3.select("body")
            .append("svg:svg")
            .attr("width",w)
            .attr("height",h)
            .style("pointer-events", "all")
            .on("mousemove",hyperdraw)
            .on("mousedown",hyperdraw);


function erase() {
  d3.selectAll('circle').remove();
}

function hyperdraw() {

  var m = d3.mouse(this);
  
    
  svg.append("svg:circle")
        .attr("transform","rotate(-3000," + m[0] + "," + m[1] +")")
        .attr("cx",m[0])
        .attr("cy",m[1])
        .attr("r",0)
        .style("stroke",z(++i))
        .style("fill",z(i))
        .style("stroke-opacity",0.5)
        .transition()
        .delay(100)
        .attr("transform","translate(500,0)")
        .duration(5000)
        .ease(Math.sqrt)
        .attr("r",1)
        .style("stroke-opacity",1e-6)
        .style("fill-opacity",1);
  svg.append("svg:circle")
        .attr("transform","rotate(3000," + m[0] + "," + m[1] +")")
        .attr("cx",m[0])
        .attr("cy",m[1])
        .attr("r",0)
        .style("stroke",z(++i))
        .style("fill",z(i))
        .style("stroke-opacity",0.5)
        .transition()
        .delay(500)
        .attr("transform","translate(-500,0)")
        .duration(5000)
        .ease(Math.sqrt)
        .attr("r",10)
        .style("stroke-opacity",1e-6)
        .style("fill-opacity",1)
        .remove();
    svg.append("svg:rect")
        .attr("transform","rotate(-3000," + m[0] + "," + m[1] +")")
        .attr("x", m[0])
        .attr("y", m[1])
        .attr("width", 1)
        .attr("height", 1)
        .style("stroke-width",5)
        .style("stroke", z(++i))
        .style("stroke-opacity", 1)
        .transition()
        .delay(1000)
        .attr("transform","translate(0,500)")
        .duration(5000)
        .ease(Math.sqrt)
        .attr("width", 75)
        .attr("height",75)
        .style("stroke-width",10)
        .style("stroke-opacity", 1e-6)
        .remove();
    svg.append("svg:rect")
        .attr("transform","rotate(3000," + m[0] + "," + m[1] +")")
        .attr("x", m[0])
        .attr("y", m[1])
        .attr("width", 1)
        .attr("height", 1)
        .style("stroke-width",5)
        .style("stroke", z(++i))
        .style("stroke-opacity", 1)
        .transition()
        .delay(1000)
        .attr("transform","translate(500,0)")
        .duration(5000)
        .ease(Math.sqrt)
        .attr("width", 75)
        .attr("height",75)
        .style("stroke-width",10)
        .style("stroke-opacity", 1e-6)
        .remove();
}













