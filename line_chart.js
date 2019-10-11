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
var fulltime_m_applied = new Array();
var fulltime_m_enrolled = new Array();
var test = data[0].year;
console.log(test);
for(var i = 13; i>= 0; i--){

    years.push(data[i]['year']);
    fulltime_m_admitted.push(parseInt(data[i].fulltime_men_admitted.replace(',', '')));
    fulltime_m_applied.push(parseInt(data[i].fulltime_men_applied.replace(',', '')));
    fulltime_m_enrolled.push(parseInt(data[i].fulltime_men_enrolled.replace(',', '')));
    };

console.log(fulltime_m_enrolled);



Highcharts.chart('container', {

    title: {
        text: 'Number of students applied, enrolled and admitted, 2005-2018'
    },

   

    yAxis: {
        title: {
            text: 'Number of Students'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2005
        }
    },

    series: [{
        name: 'full time men admitted',
        data: fulltime_m_admitted
    }, {
        name: 'full time men applied',
        data: fulltime_m_applied
    }, {
        name: 'full time mem enrolled',
        data: fulltime_m_enrolled
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});
});
