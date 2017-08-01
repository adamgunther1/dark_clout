var showPost = function(year) {
  return $.ajax({
    url: '/api/v1/facebook/photos_comments',
    method: 'GET',
    data: { year: year }
  }).done(function(post){
        var canvas = document.getElementById("photos-comments");
        var ctx = canvas.getContext('2d');

        // Global Options:

        Chart.defaults.global.defaultFontColor = 'black';
        Chart.defaults.global.defaultFontSize = 16;

        var data = {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          datasets: [{
              label: "Photos",
              fill: false,
              lineTension: 0.1,
              backgroundColor: "rgba(225,0,0,0.4)",
              borderColor: "red", // The main line color
              borderCapStyle: 'square',
              borderDash: [], // try [5, 15] for instance
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: "black",
              pointBackgroundColor: "white",
              pointBorderWidth: 1,
              pointHoverRadius: 8,
              pointHoverBackgroundColor: "yellow",
              pointHoverBorderColor: "brown",
              pointHoverBorderWidth: 2,
              pointRadius: 4,
              pointHitRadius: 10,
              // notice the gap in the data and the spanGaps: true
              data: Object.values(post.photos),
              spanGaps: true,
            }, {
              label: "Comments",
              fill: true,
              lineTension: 0.1,
              backgroundColor: "rgba(167,105,0,0.4)",
              borderColor: "rgb(167, 105, 0)",
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: "white",
              pointBackgroundColor: "black",
              pointBorderWidth: 1,
              pointHoverRadius: 8,
              pointHoverBackgroundColor: "brown",
              pointHoverBorderColor: "yellow",
              pointHoverBorderWidth: 2,
              pointRadius: 4,
              pointHitRadius: 10,
              // notice the gap in the data and the spanGaps: false
              data: Object.values(post.commments),
              spanGaps: false,
            }

          ]
        };

        // Notice the scaleLabel at the same level as Ticks
        var options = {
          scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        },
                        scaleLabel: {
                             display: true,
                             labelString: 'FB Photos & Comments',
                             fontSize: 20
                          }
                    }]
                }
        };

        // Chart declaration:
        var myBarChart = new Chart(ctx, {
          type: 'line',
          data: data,
          options: options
        });





var showPost = function(year) {
  return $.ajax({
    url: API + '/api/v1/facebook/photos_comments',
    method: 'GET',
    data: { year: year }
  }).done(function(post){

  })
};

showPost("2014");
