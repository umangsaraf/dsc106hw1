function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

//usage:
readTextFile("ucsd_cds_admission_data_2005_to_2018_json", function(text){
    var data = JSON.parse(text);
    

console.log(data);

var years = new Array();
var fulltime_m_admitted = new Array();
var full_time_w_admitted = new Array();
var test = data[0].year;
console.log(test);
for(var i = 13; i>= 0; i--){

    years.push(data[i]['year']);
    fulltime_m_admitted.push(parseInt(data[i].fulltime_men_admitted.replace(',', '')));
    full_time_w_admitted.push(parseInt(data[i].fulltime_women_admitted.replace(',', '')));
    };

console.log(full_time_w_admitted);


Highcharts.chart('container', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Full time admitted students by gender'
    },
   
    xAxis: {
        categories: years,
        title: {
            text: 'Year'
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Number of addmited students',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: ''
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -5,
        y: 10,
        floating: true,
        borderWidth: 1,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || '#FCFFC5',
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'fulltime men admitted',
        data: fulltime_m_admitted
    }, {
        name: 'fulltime women admitted',
        data: full_time_w_admitted
    }]
});

});
