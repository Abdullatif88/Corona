"use strict";

// var scale = 300,
//     center = [10,10];
function flowMapSource(){
  var scale = 210,
      center = [10,10];

var width = 1000,
    height = 600;

  var svg = d3.select(".svgSource")
            .append("svg")
            .attr("class", "source")
            .attr("width", width)
            .attr("height", height)

  var projection = d3.geoNaturalEarth1()
      .scale(scale)
      .center(center)
      .translate([width/2, height/2]);


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
                  .data(con3.features)
                  .enter().append("line")
                  .filter(function(d){ return d.properties.case_from !== "China";})

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

                      .attr("class", "line")


            var sources = svg.selectAll("circle")
                        .data(con3.features).enter()
                        .append("circle")

                              .attr("class", "source")
                              .filter(function(d){ return d.properties.case_from !== "China";})
                        // .filter(function(d){ return d.properties.case_from !== "China"})
                              .attr("cx", function(d){
                        return projection(d.geometry.coordinates[0][0])[0];
                    })
                              .attr("cy", function(d){
                        return projection(d.geometry.coordinates[0][0])[1];
                      })
                              .attr("r", "3.25px")


                              // .attr("fill", "red")


        //   function zoomed(){
        //       svg
        // .selectAll(".world,.line, .source") // To prevent stroke width from scaling
        // // .select('line')
        // .attr('transform', d3.event.transform);

        //   }

          // countries
          //       .on("mouseover", function (d){ d3.select(this).append("title") .text(function(d){ return d.properties.name})})
                // .on("mouseover", function (d){ d3.select(this).attr("fill", "#eeaa22")})
                // .on("mouseout", function (d){ d3.select(this).attr("fill", "#404040")})
          sources

                .on("mouseover", function(d){

                  sources.style("fill","none").style("stroke","none")
                  d3.select(this).style("fill","#ff0080").style("stroke","white")
                  d3.select(".infoHead").text(d.properties.case_from)

                  lines
                      .style("stroke", function (case_from){ return case_from.properties.case_from === d.properties.case_from ? '#ff0080' : '#none';})
                      .style("stroke-width", function (case_from){ return case_from.properties.case_from === d.properties.case_from ? 2 : 0;})
                })

                .on('mouseout', function (d) {
                        sources.style('fill', "red").style("stroke","white")
                        d3.select(".infoHead").text("اختر أي مصدر")
                        lines
                          .style('stroke', 'none')
                          .style('stroke-width', '1')
                      })

          // var info = svg.append("text")
          //               .attr('class', 'infoHead')
          //               .attr('x', 750)
          //               .attr('y', 525)
          //               .text('اختر أي مصدر')
          //               .style('color', 'red')
          //               .style('font-size', 30)
          //               .style('stroke', 'none')
          //               .style('font-weight', 'bold')
          //               .style('text-align', 'right')
          //
          // var info = svg.append("text")
          //               .attr('class', 'infoFacts')
          //               .attr('x', 625)
          //               .attr('y', 575)
          //               .text(':عدد الدول المتصلة بالمصدر')
          //               .style('color', 'red')
          //               .style('font-size', 30)
          //               .style('stroke', 'none')
          //               .style('font-weight', 'bold')
          //               .attr('text-ancor', 'end')
          //
          // // sources.on("mouseover", function (d){ d3.select(".infoHead").text(d.properties.case_from)})

};


///////////// Another Map for the Destination Interactivity /////////////////////////////

function flowMapDestination(){
  var scale = 210,
      center = [10,10];
  var width = 1000,
      height = 600;


  var svg = d3.select(".svgDest")
            .append("svg")
            .attr("class", "destination")
            .attr("width", width)
            .attr("height", height)


  var projection = d3.geoNaturalEarth1()
      .scale(scale)
      .translate([width/2., height/2])
      .center(center);

  // Setting the zoom interactivity
  // const zoom = d3.zoom()
  //                     .scaleExtent([1,6])
  //                     .on("zoom", zoomed);

  // const g = svg.append('g');
  // svg.call(zoom);

      // Draw the map
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


          // Draw the connection lines
          var lines =   svg.append("g")
                  .selectAll("line")
                  .data(con3.features)
                  .enter().append("line")
                  .filter(function(d){ return d.properties.case_to !== "China";})

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

                      .attr("class", "line")

            // Draw the Destination points

            var destination = svg.selectAll("circle")
                        .data(con3.features).enter()
                        .append("circle")

                              .attr("class", "destination")
                              // .filter(function(d){ return d.properties.case_to !== "China";})
                        // .filter(function(d){ return d.properties.case_from !== "China"})
                              .attr("cx", function(d){
                        return projection(d.geometry.coordinates[0][1])[0];
                    })
                              .attr("cy", function(d){
                        return projection(d.geometry.coordinates[0][1])[1];
                      })
                              .attr("r", "3.25px")


          // Adding the zoom functionality
        //   function zoomed(){
        //       svg
        // .selectAll(".world,.line, .destination, .text_to")
        // .attr('transform', d3.event.transform);

        //   }

          // Adding the map interactivity
          countries
                .on("mouseover", function (d){ d3.select(this).append("title") .text(function(d){ return d.properties.name})})


          destination

                .on("mouseover", function(d){



                  destination.style("fill","none").style("stroke","none")
                  d3.select(this).style("fill","#ff0080").style("stroke","white")
                  .append("title") .text(function(d){ return d.properties.case_to})

                  lines
                      .style("stroke", function (case_from){ return case_from.properties.case_to === d.properties.case_to ? '#ff0080' : '#none';})
                      .style("stroke-width", function (case_from){ return case_from.properties.case_to === d.properties.case_to ? 2 : 0;})
                })

                .on('mouseout', function (d) {
                        destination.style('fill', "#056bfa").style("stroke","white")
                        lines
                          .style('stroke', 'none')
                          .style('stroke-width', '1')
                      })

};
////////////////////////////////////////////////////

function kuMap(){
  var scale = 300,
      center = [10,10];
var width = 1000,
    height = 600;

  var svg = d3.select(".svgKu")
            .append("svg")
            .attr("class", "kuwait")
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
              .data(line_src2.features)
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
                        .data(point_src2.features).enter()
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
                        d3.select(".infoCountry").text(d.properties.name_ar_from + " (" + d.properties.cases + ") حالة ")
                        // d3.select(".infoCases").text("عدد الحالات: " + d.properties.cases)

                    } )
                    .on('mouseout', function(d){
                        d3.select(".infoCountry").text("")
                        d3.select(".infoCases").text("")

                    } )




            var info = svg.append("text")
                          .attr('class', 'infoHead')
                          .attr('x', 950)
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
                            .attr('x', 950)
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
                            .attr('x', 700)
                            .attr('y', 100)
                            .style('text-anchor', 'end')
                            // .text('اختر أي مصدر')
                            // .style('fill', 'blue')
                            // .style('font-size', 50)
                            .style('stroke', 'none')
                            .style('font-weight', 'bold')
                            .style('text-align', 'right')

};
