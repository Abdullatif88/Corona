"use strict";

var scale = 350,
    center = [10,10];
function kuMap(){

var width = 1200,
    height = 700;

  var svg = d3.select(".svgKu")
            .append("svg")
            .attr("class", "kuSource")
            .attr("width", width)
            .attr("height", height)






  var projection = d3.geoNaturalEarth1()
      .scale(scale)
      .center(center)
      .translate([width/1.75, height/1.25]);


  // const zoom = d3.zoom()
  //                     .scaleExtent([1,6])
  //                     .on("zoom", zoomed);

  // const g = svg.append('g');
  // svg.call(zoom);

    var countries = svg.append("g")
        .selectAll("path")
        .data(world.features)
        .enter().append("path")
            .filter(function(d){ return d.properties.name !== "Antarctica"})
            .attr("class","world")
            .attr("fill", "#404040")
            .attr("d", d3.geoPath()
                .projection(projection)
            )
            .style("stroke", "#ffffff")
            .style("stroke-width","0.5");

          var lines =   svg.append("g")
                  .selectAll("line")
                  .data(line_src.features)
                  .enter().append("line")

                      .attr("x1", function(d){
                        return projection(d.geometry.coordinates[0][0])[0];
                      })

                      .attr("y1", function(d){
                        return projection(d.geometry.coordinates[0][0])[1];
                      })

                      .attr("x2",  function(d){
                        return projection(d.geometry.coordinates[0][1])[0];
                      })

                      .attr("y2",  function(d){
                        return projection(d.geometry.coordinates[0][1])[1];
                      })

                      .attr("class", "lineKu")


            var sources =
                        svg.append("g")
                        .selectAll("circle")
                        .data(point_src.features).enter()
                        .append("circle")

                        .attr("class", "sourceKu")

                        // .filter(function(d){ return d.properties.case_from !== "China"})
                              .attr("cx", function(d){
                        return projection(d.geometry.coordinates)[0];
                    })
                              .attr("cy", function(d){
                        return projection(d.geometry.coordinates)[1];
                      })
                              // .attr("r", "3.25px")
                              .attr("r", function(d){
                                return d.properties.rank*1.5
                              })


                              // .attr("fill", "red")



            sources
                    .on('mouseover', function(d){
                        d3.select(".infoCountry").text(d.properties.name_ar_from)
                        d3.select(".infoCases").text("عدد الحالات: " + d.properties.cases)

                    } )
                    .on('mouseout', function(d){
                        d3.select(".infoCountry").text("")
                        d3.select(".infoCases").text("")

                    } )




            var info = svg.append("text")
                          .attr('class', 'infoHead')
                          .attr('x', 1000)
                          .attr('y', 50)
                          .style('text-anchor', 'end')
                          .text('اختر أي مصدر')
                          // .style('fill', 'blue')
                          // .style('font-size', 50)
                          .style('stroke', 'none')
                          .style('font-weight', 'bold')
                          .style('text-align', 'right')

              var info = svg.append("text")
                            .attr('class', 'infoCountry')
                            .attr('x', 1000)
                            .attr('y', 100)
                            .style('text-anchor', 'end')
                            // .text('اختر أي مصدر')
                            // .style('fill', 'blue')
                            // .style('font-size', 50)
                            .style('stroke', 'none')
                            .style('font-weight', 'bold')
                            .style('text-align', 'right')

              var info = svg.append("text")
                            .attr('class', 'infoCases')
                            .attr('x', 1000)
                            .attr('y', 135)
                            .style('text-anchor', 'end')
                            // .text('اختر أي مصدر')
                            // .style('fill', 'blue')
                            // .style('font-size', 50)
                            .style('stroke', 'none')
                            .style('font-weight', 'bold')
                            .style('text-align', 'right')

// sankey diagram

};
