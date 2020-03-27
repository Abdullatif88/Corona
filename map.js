"use strict";

var scale = 200,
    center = [10,10];
function flowMapSource(){

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
                  .data(con2.features)
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
                        .data(con2.features).enter()
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

          countries
                .on("mouseover", function (d){ d3.select(this).append("title") .text(function(d){ return d.properties.name})})
                // .on("mouseover", function (d){ d3.select(this).attr("fill", "#eeaa22")})
                // .on("mouseout", function (d){ d3.select(this).attr("fill", "#404040")})
          sources

                .on("mouseover", function(d){

                  sources.style("fill","none").style("stroke","none")
                  d3.select(this).style("fill","#ff0080").style("stroke","white")
                  .append("title") .text(function(d){ return d.properties.case_from}).style("font-size",30)

                  lines
                      .style("stroke", function (case_from){ return case_from.properties.case_from === d.properties.case_from ? '#ff0080' : '#none';})
                      .style("stroke-width", function (case_from){ return case_from.properties.case_from === d.properties.case_from ? 2 : 0;})
                })

                .on('mouseout', function (d) {
                        sources.style('fill', "red").style("stroke","white")
                        lines
                          .style('stroke', 'none')
                          .style('stroke-width', '1')
                      })


};


///////////// Another Map for the Destination Interactivity /////////////////////////////

function flowMapDestination(){
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
                  .data(con2.features)
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
                        .data(con2.features).enter()
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
