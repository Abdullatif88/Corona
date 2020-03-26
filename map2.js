"use strict";

function mainMap(){
  var width = 1000,
      height = 600;
 var svg = d3.select("body")
            .append("svg")
            .attr("class", "mainMap");

            // .style("width", 1200)
            // .style("height", 600);

  var projection = d3.geoNaturalEarth1()
      .scale(210)
      .translate([width/2.05, height/1.8]);





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

    var circle = svg.append("circle")
    					.attr("cx",100)
    					.attr("cy",50)
    					.attr("r",10)
    					.style("fill","red")

    	circle
    	.on("mouseover", function sources(){
    		
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
                              .attr("r", "4.25px")
    	})
    	.on("mouseoute", function sources(){
    		d3.select(this).remove()
    	})

    countries
    .on("mouseover", function (d){ d3.select(this).append("title") .text(function(d){ return d.properties.name})})

};

