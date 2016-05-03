$(function() {
    $('#chart1').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Участники соток'
        },
        subtitle: {
            text: 'На сотку в 2015 зарегистрировалось рекордное число участников, но доехали до финиша почти столько же, сколько в прошлом году',
            align: 'left'
        },
        xAxis: {
            categories: [
                '2015', 
                '2014', 
                '2013', 
                '2012'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: ''
            }
        },
        plotOptions: {
            column: {
                pointPadding: 0.1,
                borderWidth: 2,
                dataLabels: {
                    enabled: true
                }
            }
        },
        series: [{
                name: 'Всего зарегистрировано',
                data: [1693, '', 792, 1028]
            
            }, {
                name: 'Доехали до финиша',
                data: [1247, 1124, 639, 990]
            
            }]
    });
    
    $('#chart2').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: ''
        },
        subtitle: {
            text: 'Процент участниц-женщин остается неизменным на протяжении 4х лет, всего 15% :)',
            align: 'left'
        },
        xAxis: {
            categories: ['2015', '2014', '2013', '2012']
        },
        yAxis: {
            min: 0,
            title: {
                text: ''
            }
        },
        tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
            shared: true
        },
        plotOptions: {
            column: {
                stacking: 'percent'
            }
        },
        series: [{
                name: 'Мужчины',
                data: [1432, 965, 677, 871]
            }, {
                name: 'Женщины',
                data: [261, 159, 115, 157]
            }]
    });
    
    $('#chart3').highcharts({
        title: {
            text: 'Среднее время прохождения сотки',
        },
        subtitle: {
            text: 'С каждым годов все хуже, возможно потому что время меряют по разному. А может новичков все больше',
            align: 'left'
        },
        xAxis: {
            categories: ['2015', '2014', '2013', '2012']
        },
        yAxis: {
            title: {
                text: ''
            },
            type: 'datetime',
            plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
        },
        tooltip: {
            /* formatter: function() {
                    return  '<b> {series.name}<br/>' +
                        Highcharts.dateFormat('%H:%M',
                                              new Date('{point.y}'));
                },*/
            pointFormat: '{series.name}: <b>{point.y:%H:%M}</b><br/>',
            shared: true,
        },
        series: [{
                name: 'Мужчины',
                data: [Date.UTC(0, 0, 0, 6, 58), Date.UTC(0, 0, 0, 6, 0), Date.UTC(0, 0, 0, 5, 23), Date.UTC(0, 0, 0, 5, 09)]
            }, {
                name: 'Женщины',
                data: [Date.UTC(0, 0, 0, 7, 47), Date.UTC(0, 0, 0, 7, 0), Date.UTC(0, 0, 0, 6, 21), Date.UTC(0, 0, 0, 6, 3)]
            }, {
                name: 'Все',
                data: [Date.UTC(0, 0, 0, 7, 5), Date.UTC(0, 0, 0, 6, 9), Date.UTC(0, 0, 0, 5, 31), Date.UTC(0, 0, 0, 5, 16)]
            }]
    });
    
    $('#chart4').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Возрастной состав участников'
        },
        xAxis: {
            categories: ['до 20', '20-30', '31-40', '41-50', '>50']
        },
        yAxis: {
            min: 0,
            title: {
                text: ''
            },
            stackLabels: {
                enabled: true,
                style: {
                    fontWeight: 'bold',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                }
            }
        },
        legend: {
            align: 'right',
            x: -30,
            verticalAlign: 'top',
            y: 25,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
            borderColor: '#CCC',
            borderWidth: 1,
            shadow: false
        },
        tooltip: {
            formatter: function() {
                return '<b>' + this.x + '</b><br/>' + 
                this.series.name + ': ' + this.y + '<br/>' + 
                'Всего: ' + this.point.stackTotal;
            }
        },
        plotOptions: {
            column: {
                pointPadding: -0.33,
                stacking: 'normal',
                dataLabels: {
                    enabled: true,
                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                    style: {
                        textShadow: '0 0 3px black'
                    }
                },
            },
        },
        series: [{
                name: '2015',
                data: [166, 831, 461, 154, 76]
            }, {
                name: '2014',
                data: [97, 565, 284, 107, 57]
            }, {
                name: '2013',
                data: [51, 329, 163, 59, 33]
            }]
    });
	$('#chart5').highcharts({
        title: {
            text: 'Зависимость среднего времени от возраста участника',
        },
        subtitle: {
            text: 'Оказывается, возраст никак не влияет на время прохождения сотки<br>Наоборот, с возрастом время прохождения дистанции улучшается)',
            align: 'left'
        },
        xAxis: {
			title: 'Возраст',
            categories: ['до 20', '20-30', '31-40', '41-50', '>50']
        },
        yAxis: {
            title: {
                text: 'Среднее время'
            },
            type: 'datetime',
			min: Date.UTC(0, 0, 0, 6, 00),
			max: Date.UTC(0, 0, 0, 7, 30), 
            plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.y:%H:%M}</b><br/>',
            shared: true,
        },
        series: [
		   {
                name: 'Мужчины',
                data: [Date.UTC(0, 0, 0, 6, 24), Date.UTC(0, 0, 0, 6, 18), Date.UTC(0, 0, 0, 6, 19), Date.UTC(0, 0, 0, 6, 03), Date.UTC(0, 0, 0, 6, 09)]
            },
		   {
                name: 'Женщины',
                data: [Date.UTC(0, 0, 0, 6, 52), Date.UTC(0, 0, 0, 7, 17), Date.UTC(0, 0, 0, 7, 04), Date.UTC(0, 0, 0, 7, 02), Date.UTC(0, 0, 0, 7, 18)]
            },
			{
                name: 'Все',
                data: [Date.UTC(0, 0, 0, 6, 28), Date.UTC(0, 0, 0, 6, 27), Date.UTC(0, 0, 0, 6, 25), Date.UTC(0, 0, 0, 6, 08), Date.UTC(0, 0, 0, 6, 17)]
            }]
    });

	
 /**/
 $(function () {

    // Prepare demo data
    var data = [
        {
            "hc-key": "ua-my",
            "value": 0
        },
        {
            "hc-key": "ua-ks",
            "value": 1
        },
        {
            "hc-key": "ua-kc",
            "value": 2
        },
        {
            "hc-key": "ua-zt",
            "value": 3
        },
        {
            "hc-key": "ua-sm",
            "value": 4
        },
        {
            "hc-key": "ua-dt",
            "value": 5
        },
        {
            "hc-key": "ua-dp",
            "value": 6
        },
        {
            "hc-key": "ua-kk",
            "value": 7
        },
        {
            "hc-key": "ua-lh",
            "value": 8
        },
        {
            "hc-key": "ua-pl",
            "value": 9
        },
        {
            "hc-key": "ua-zp",
            "value": 10
        },
        {
            "hc-key": "ua-sc",
            "value": 11
        },
        {
            "hc-key": "ua-kr",
            "value": 12
        },
        {
            "hc-key": "ua-ch",
            "value": 13
        },
        {
            "hc-key": "ua-rv",
            "value": 14
        },
        {
            "hc-key": "ua-cv",
            "value": 15
        },
        {
            "hc-key": "ua-if",
            "value": 16
        },
        {
            "hc-key": "ua-km",
            "value": 17
        },
        {
            "hc-key": "ua-lv",
            "value": 18
        },
        {
            "hc-key": "ua-tp",
            "value": 19
        },
        {
            "hc-key": "ua-zk",
            "value": 20
        },
        {
            "hc-key": "ua-vo",
            "value": 21
        },
        {
            "hc-key": "ua-ck",
            "value": 22
        },
        {
            "hc-key": "ua-kh",
            "value": 23
        },
        {
            "hc-key": "ua-kv",
            "value": 24
        },
        {
            "hc-key": "ua-mk",
            "value": 25
        },
        {
            "hc-key": "ua-vi",
            "value": 26
        }
    ];

    // Initiate the chart
    $('#map').highcharts('Map', {

        title : {
            text : 'География участников сотки'
        },

        subtitle : {
            text : 'Source map: <a href="http://code.highcharts.com/mapdata/countries/ua/ua-all.js">Ukraine</a>'
        },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        colorAxis: {
            min: 0
        },

        series : [{
            data : data,
            mapData: Highcharts.maps['countries/ua/ua-all'],
            joinBy: 'hc-key',
            name: 'Random data',
            states: {
                hover: {
                    color: '#BADA55'
                }
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }]
    });
});

 /**/
	

});
