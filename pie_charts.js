
Highcharts.chart('container', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Women admitted, enrolled and applied, 2018'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    },
    series: [{
        name: '',
        colorByPoint: true,
        data: [{
            name: 'full time women applied',
            y: 52265
        }, {
            name: 'full time women admitted ',
            y: 15821
        }, {
            name: 'fulltime women enrolled',
            y: 3484
        }]
    }]
});


