/*
 |--------------------------------------------------------------------------
 | Shards Dashboards: Blog Overview Template
 |--------------------------------------------------------------------------
 */

'use strict';

(function ($) {
  $(document).ready(function () {

    // Blog overview date range init.
    $('#blog-overview-date-range').datepicker({});

    var utilities_data = [53699.99,	46772.95,	41676.56,	44855.99,	36433.65,	32421.61,	28969.74,	23897.18,	22162.13,	20497.65].reverse()
    var financials_data = [248029.73,	209081.14,	179705.89,	183678.49,	164877.74,	123812.50,	87724.41,	126471.19,	104193.71,	67996.46].reverse()
    var it_data = [256530.98,	181264.68,	173188.90,	123671.60,	112606.73,	75907.79,	73552.49,	68108.33,	68633.61,	34395.13].reverse()
    var oil_data = [155411.23,	153700.65,	128383.37,	160282.65,	177625.57,	153767.86,	160189.80,	145641.99,	124751.28,	135678.44].reverse()
    var hc_data = [198208.82,	171633.52,	164294.20,	167108.95,	149295.88,	139476.66,	128202.51,	115514.44,	110596.95,	98279.86].reverse()
    //
    // Small Stats
    //

    // Datasets
    var boSmallStatsDatasets = [
      {
        backgroundColor: 'rgba(0,123,255,0.05)',
        borderColor: 'rgba(0,123,255,1)',
        data: utilities_data
      },
      {
        backgroundColor: 'rgba(23,198,113,0.1)',
        borderColor: 'rgb(23,198,113)',
        data: financials_data
      },
      {
        backgroundColor: 'rgba(255,180,0,0.1)',
        borderColor: 'rgb(255,180,0)',
        data: it_data
      },
      {
        backgroundColor: 'rgba(255,65,105,0.1)',
        borderColor: 'rgb(255,65,105)',
        data: oil_data
      },
      {
        backgroundColor: 'rgba(102,51,153, 0.3)',
        borderColor: 'rgba(102,51,153, 0.8)',
        data: hc_data
      }
    ];

    // Options
    function boSmallStatsOptions(max) {
      return {
        maintainAspectRatio: true,
        responsive: true,
        // Uncomment the following line in order to disable the animations.
        // animation: false,
        legend: {
          display: false
        },
        tooltips: {
          enabled: false,
          custom: false
        },
        elements: {
          point: {
            radius: 0
          },
          line: {
            tension: 0.3
          }
        },
        scales: {
          xAxes: [{
            gridLines: false,
            scaleLabel: false,
            ticks: {
              display: false
            }
          }],
          yAxes: [{
            gridLines: false,
            scaleLabel: false,
            ticks: {
              display: false,
              // Avoid getting the graph line cut of at the top of the canvas.
              // Chart.js bug link: https://github.com/chartjs/Chart.js/issues/4790
              suggestedMax: max
            }
          }],
        },
      };
    }

    // Generate the small charts
    boSmallStatsDatasets.map(function (el, index) {
      var chartOptions = boSmallStatsOptions(Math.max.apply(Math, el.data) + 1);
      var ctx = document.getElementsByClassName('blog-overview-stats-small-' + (index + 1));
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ["Label 1", "Label 2", "Label 3", "Label 4", "Label 5", "Label 6", "Label 7"],
          datasets: [{
            label: 'Today',
            fill: 'start',
            data: el.data,
            backgroundColor: el.backgroundColor,
            borderColor: el.borderColor,
            borderWidth: 1.5,
          }]
        },
        options: chartOptions
      });
    });


    //
    // Blog Overview Users
    //

    var bouCtx = document.getElementsByClassName('blog-overview-users')[0];
  function range(start, end) {
    if(start === end) return [start];
    return [start, ...range(start + 1, end)];
  }
    // Data
  
    var bouData = {
      // Generate the days labels on the X axis.
      // labels: Array.from(new Array(30), function (_, i) {
      //   return i === 0 ? 1 : i;
      // }),
      labels: range(2008,2017),
      datasets: [{
        label: 'Utilities',
        fill: 'start',
        data: utilities_data,
        backgroundColor: 'rgba(0,123,255,0.05)',
        borderColor: 'rgba(0,123,255,1)',
        pointBackgroundColor: '#ffffff',
        pointHoverBackgroundColor: 'rgb(0,123,255)',
        borderWidth: 1.5,
        pointRadius: 0,
        pointHoverRadius: 3
      }, {
        label: 'Financial',
        fill: 'start',
        data: financials_data,
        backgroundColor: 'rgba(0,255,0,0.1)',
        borderColor: 'rgba(0,255,1)',
        pointBackgroundColor: '#ffffff',
        pointHoverBackgroundColor: 'rgba(0,255,0,1)',
        // borderDash: [3, 3],
        borderWidth: 1.3,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBorderColor: 'rgba(0,255,0,1)'
      },  {
        label: 'Information Technology',
        fill: 'start',
        data: it_data,
        backgroundColor: 'rgba(255,255,0,0.1)',
        borderColor: 'rgba(255,255,1)',
        pointBackgroundColor: '#ffffff',
        pointHoverBackgroundColor: 'rgba(255,255,0,1)',
        // borderDash: [3, 3],
        borderWidth: 1.3,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBorderColor: 'rgba(255,255,0,1)'
      }, {
        label: 'Oil & Gas',
        fill: 'start',
        data: oil_data,
        backgroundColor: 'rgba(255,65,105,0.1)',
        borderColor: 'rgba(255,65,105,1)',
        pointBackgroundColor: '#ffffff',
        pointHoverBackgroundColor: 'rgba(255,65,105,1)',
        // borderDash: [3, 3],
        borderWidth: 1.3,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBorderColor: 'rgba(255,65,105,1)'
      },{
        label: 'Healthcare',
        fill: 'start',
        data: hc_data,
        backgroundColor: 'rgba(102,51,153, 0.2)',
        borderColor: 'rgba(102,51,153, 0.5)',
        pointBackgroundColor: '#ffffff',
        pointHoverBackgroundColor: 'rgba(102,51,153, 1)',
        // borderDash: [3, 3],
        borderWidth: 1.3,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBorderColor: 'rgba(102,51,153, 1)'
      }]
    };

    // Options
    var bouOptions = {
      responsive: true,
      legend: {
        position: 'top'
      },
      elements: {
        line: {
          // A higher value makes the line look skewed at this ratio.
          tension: 0.3
        },
        point: {
          radius: 0
        }
      },
      scales: {
        xAxes: [{
          gridLines: false,
          ticks: {
            callback: function (tick, index) {
              // Jump every 7 values on the X axis labels to avoid clutter.
              return index % 7 !== 0 ? '' : tick;
            }
          }
        }],
        yAxes: [{
          ticks: {
            suggestedMax: 45,
            callback: function (tick, index, ticks) {
              if (tick === 0) {
                return tick;
              }
              // Format the amounts using Ks for thousands.
              return tick > 999 ? (tick/ 1000).toFixed(1) + 'K' : tick;
            }
          }
        }]
      },
      // Uncomment the next lines in order to disable the animations.
      // animation: {
      //   duration: 0
      // },
      hover: {
        mode: 'nearest',
        intersect: false
      },
      tooltips: {
        custom: false,
        mode: 'nearest',
        intersect: false
      }
    };

    // Generate the Analytics Overview chart.
    window.BlogOverviewUsers = new Chart(bouCtx, {
      type: 'LineWithLine',
      data: bouData,
      options: bouOptions
    });

    // Hide initially the first and last analytics overview chart points.
    // They can still be triggered on hover.
    var aocMeta = BlogOverviewUsers.getDatasetMeta(0);
    aocMeta.data[0]._model.radius = 0;
    aocMeta.data[bouData.datasets[0].data.length - 1]._model.radius = 0;

    // Render the chart.
    window.BlogOverviewUsers.render();

    //
    // Users by device pie chart
    //

    var mySelect = document.getElementById('dropdown-selector');

    mySelect.onchange = function() {
      var x = document.getElementById("dropdown-selector").value;
      // ubdData.datasets[0].data = [utilities_data[x], financials_data[x], it_data[x], oil_data[x], hc_data[x]]
      ubdData.datasets[0].data = [utilities_data[x], financials_data[x], it_data[x], oil_data[x], hc_data[x]]
      ubdChart.update();
      // window.ubdChart = new Chart(ubdCtx, {
      //   type: 'pie',
      //   data: [utilities_data[x], financials_data[x], it_data[x], oil_data[x], hc_data[x]],
      //   options: ubdOptions
      // });
    }

    // Industry Sizes
    var ubdData = {
      datasets: [{
        hoverBorderColor: '#ffffff',
        data: [utilities_data[0], financials_data[0], it_data[0], oil_data[0], hc_data[0]],
        backgroundColor: [
          'rgba(0,123,255,0.7)',
          'rgba(0,255,0,0.5)',
          'rgba(255,255,0,0.5)',
          'rgba(255,65,105,0.7)',
          'rgba(102,51,153, 0.7)'

        ]
      }],
      labels: ["Utilities", "Financials", "IT", "Oil & Gas", "Healthcare"]
    };

    // Options
    var ubdOptions = {
      legend: {
        position: 'bottom',
        labels: {
          padding: 25,
          boxWidth: 20
        }
      },
      cutoutPercentage: 0,
      // Uncomment the following line in order to disable the animations.
      // animation: false,
      tooltips: {
        custom: false,
        mode: 'index',
        position: 'nearest'
      }
    };

    var ubdCtx = document.getElementsByClassName('blog-users-by-device')[0];

    // Generate the users by device chart.
    window.ubdChart = new Chart(ubdCtx, {
      type: 'pie',
      data: ubdData,
      options: ubdOptions
    });

  });
})(jQuery);
