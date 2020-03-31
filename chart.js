function chart(){

google.charts.load('current', {'packages':['sankey']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = new google.visualization.DataTable();

        data.addColumn('string', 'From');
        data.addColumn('string', 'To');
        data.addColumn('number', 'Count');


        // };
// //
// console.log(point_src.features[0].properties.case_from)
// console.log(point_src.features[0].properties.case_to)
// console.log(point_src.features[0].properties.cases)


        data.addRows([
          // [ 'Iran', 'Kuwait', 17 ],
          [ 'Iran', 'male', 6 ],
          [ 'Iran', 'female', 6 ],
          // [ 'Saudi Arabia', 'Kuwait', 3 ],
          [ 'Saudi Arabia', 'male', 3 ],
          [ 'Saudi Arabia', 'female', 0 ],
          // [ 'UK', 'Kuwait', 12 ],
          [ 'UK', 'male', 5 ],
          [ 'UK', 'female', 5 ],
          // [ 'US', 'Kuwait', 3 ],
          [ 'US', 'male', 1 ],
          [ 'US', 'female', 2 ],
          // [ 'Spain', 'Kuwait', 1 ],
          [ 'Spain', 'male', 0 ],
          [ 'Spain', 'female', 1 ],
          // [ 'Qatar', 'Kuwait', 1 ],
          [ 'Qatar', 'male', 1 ],
          [ 'Qatar', 'female', 0 ],
          // [ 'Azerbaijan', 'Kuwait', 7 ],
          [ 'Azerbaijan', 'male', 3 ],
          [ 'Azerbaijan', 'female', 0 ],
          // [ 'Jordan', 'Kuwait', 1 ],
          [ 'Jordan', 'male', 1 ],
          [ 'Jordan', 'female', 0 ],
          // [ 'Switzerland', 'Kuwait', 3 ],
          [ 'Switzerland', 'male', 5 ],
          [ 'Switzerland', 'female', 0 ],
          // [ 'United Arab Emirates', 'Kuwait', 2 ],
          [ 'United Arab Emirates', 'male', 1 ],
          [ 'United Arab Emirates', 'female', 0 ],
          // [ 'Egypt', 'Kuwait', 5 ],
          [ 'Egypt', 'male', 3 ],
          [ 'Egypt', 'female', 0 ],
          // [ 'France', 'Kuwait', 4 ],
          [ 'France', 'male', 2 ],
          [ 'France', 'female', 2 ],

          ["male","Kuwait",31],
          ["female","Kuwait",16],
        ]);



        // Sets chart options.
        var colors = ['#780206', '#061161'];

  var options = {
    // iterations:32,
    height: 500,
    sankey: {
      node: {
        // width:10,
        // interactivity: "true",
        colors: colors,
        labelPadding: 20,
        label:{

          fontSize: 15,
          color:"navy",
          bold:"true"
        },
        color:{
          fillOpacity:1,
        },
      },
      link: {
        colorMode: 'gradient',


        colors: colors
      },
      iterations:200,
    }
  };


        // Instantiates and draws our chart, passing in some options.
        var chart = new google.visualization.Sankey(document.getElementById('sankey_basic'));
        chart.draw(data, options);
      };


};
