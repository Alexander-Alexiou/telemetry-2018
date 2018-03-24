//________________GLOBAL VARIABLES and FUNCTIONS__________________________________________
var updateInterval = 1000; //time taken for each update

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

var speedValue;
var batteryValue;
//________________________________________________________________________________________


//________________TIRE PRESSURE___________________________________________________________

// Variables
var max = 40;
var min = 30;
var ending = 60;

// Front-Left Tire Pressure Chart
var tirePressureLF = AmCharts.makeChart("chartdiv1", {
"theme": "light",
"type": "gauge",
"axes": [{
  "topTextFontSize": 16,
  "topTextYOffset": 70,
  "axisColor": "#31d6ea",
  "axisThickness": 1,
  "endValue": ending,
  "gridInside": true,
  "inside": true,
  "radius": "100%",
  "valueInterval": 10,
  "tickColor": "#67b7dc",
  "startAngle": -75,
  "endAngle": 75,
  "unit": "",
  "bandOutlineAlpha": 0,
  "bands": [{
    "color": "#0080ff",
    "endValue": min,
    "innerRadius": "90%",
    "radius": "100%",
    "gradientRatio": [0.5, 0, -0.5],
    "startValue": 0
  }, {
    "color": "#3cd3a3",
    "endValue": max,
    "innerRadius": "90%",
    "radius": "100%",
    "gradientRatio": [0.5, 0, -0.5],
    "startValue": min
  }, {
    "color": "#FF0000",
    "endValue": ending,
    "innerRadius": "90%",
    "radius": "100%",
    "gradientRatio": [0.5, 0, -0.5],
    "startValue": max
  }]
}],
"arrows": [{
  "alpha": 1,
  "innerRadius": "35%",
  "nailRadius": 0,
  "radius": "100%"
}]
});

// Front-Right Tire Pressure Chart
var tirePressureRF = AmCharts.makeChart("chartdiv2", {
"theme": "light",
"type": "gauge",
"axes": [{
  "topTextFontSize": 16,
  "topTextYOffset": 70,
  "axisColor": "#31d6ea",
  "axisThickness": 1,
  "endValue": ending,
  "gridInside": true,
  "inside": true,
  "radius": "100%",
  "valueInterval": 10,
  "tickColor": "#67b7dc",
  "startAngle": -75,
  "endAngle": 75,
  "unit": "",
  "bandOutlineAlpha": 0,
  "bands": [{
    "color": "#0080ff",
    "endValue": min,
    "innerRadius": "90%",
    "radius": "100%",
    "gradientRatio": [0.5, 0, -0.5],
    "startValue": 0
  }, {
    "color": "#3cd3a3",
    "endValue": max,
    "innerRadius": "90%",
    "radius": "100%",
    "gradientRatio": [0.5, 0, -0.5],
    "startValue": min
  }, {
    "color": "#FF0000",
    "endValue": ending,
    "innerRadius": "90%",
    "radius": "100%",
    "gradientRatio": [0.5, 0, -0.5],
    "startValue": max
  }]
}],
"arrows": [{
  "alpha": 1,
  "innerRadius": "35%",
  "nailRadius": 0,
  "radius": "100%"
}]
});

// Back-Left Tire Pressure Chart
var tirePressureLB = AmCharts.makeChart("chartdiv3", {
"theme": "light",
"type": "gauge",
"axes": [{
  "topTextFontSize": 16,
  "topTextYOffset": 70,
  "axisColor": "#31d6ea",
  "axisThickness": 1,
  "endValue": ending,
  "gridInside": true,
  "inside": true,
  "radius": "100%",
  "valueInterval": 10,
  "tickColor": "#67b7dc",
  "startAngle": -75,
  "endAngle": 75,
  "unit": "",
  "bandOutlineAlpha": 0,
  "bands": [{
    "color": "#0080ff",
    "endValue": min,
    "innerRadius": "90%",
    "radius": "100%",
    "gradientRatio": [0.5, 0, -0.5],
    "startValue": 0
  }, {
    "color": "#3cd3a3",
    "endValue": max,
    "innerRadius": "90%",
    "radius": "100%",
    "gradientRatio": [0.5, 0, -0.5],
    "startValue": min
  }, {
    "color": "#FF0000",
    "endValue": ending,
    "innerRadius": "90%",
    "radius": "100%",
    "gradientRatio": [0.5, 0, -0.5],
    "startValue": max
  }]
}],
"arrows": [{
  "alpha": 1,
  "innerRadius": "35%",
  "nailRadius": 0,
  "radius": "100%"
}]
});

// Back-Right Tire Pressure Chart
var tirePressureRB = AmCharts.makeChart("chartdiv4", {
"theme": "light",
"type": "gauge",
"axes": [{
  "topTextFontSize": 16,
  "topTextYOffset": 70,
  "axisColor": "#31d6ea",
  "axisThickness": 1,
  "endValue": ending,
  "gridInside": true,
  "inside": true,
  "radius": "100%",
  "valueInterval": 10,
  "tickColor": "#67b7dc",
  "startAngle": -75,
  "endAngle": 75,
  "unit": "",
  "bandOutlineAlpha": 0,
  "bands": [{
    "color": "#0080ff",
    "endValue": min,
    "innerRadius": "90%",
    "radius": "100%",
    "gradientRatio": [0.5, 0, -0.5],
    "startValue": 0
  }, {
    "color": "#3cd3a3",
    "endValue": max,
    "innerRadius": "90%",
    "radius": "100%",
    "gradientRatio": [0.5, 0, -0.5],
    "startValue": min
  }, {
    "color": "#FF0000",
    "endValue": ending,
    "innerRadius": "90%",
    "radius": "100%",
    "gradientRatio": [0.5, 0, -0.5],
    "startValue": max
  }]
}],
"arrows": [{
  "alpha": 1,
  "innerRadius": "35%",
  "nailRadius": 0,
  "radius": "100%"
}]
});

setInterval(randomValue, 1000);



// set random value
function randomValue() {
var value1 = Math.round(Math.random() * ending);
tirePressureLF.arrows[0].setValue(value1);
tirePressureLF.axes[0].setTopText(value1 + " psi");
// adjust darker band to new value
//chart.axes[0].bands[1].setEndValue(value);

var value2 = Math.round(Math.random() * ending);
tirePressureRF.arrows[0].setValue(value2);
tirePressureRF.axes[0].setTopText(value2 + " psi");
// adjust darker band to new value
//chart.axes[0].bands[1].setEndValue(value);

var value3 = Math.round(Math.random() * ending);
tirePressureLB.arrows[0].setValue(value3);
tirePressureLB.axes[0].setTopText(value3 + " psi");
// adjust darker band to new value
//chart.axes[0].bands[1].setEndValue(value);

var value4 = Math.round(Math.random() * ending);
tirePressureRB.arrows[0].setValue(value4);
tirePressureRB.axes[0].setTopText(value4 + " psi");
// adjust darker band to new value
//chart.axes[0].bands[1].setEndValue(value);
}

//________________________________________________________________________________________

//________________SPEED GRAPH_____________________________________________________________
var g = new JustGage({
    id: "gauge",
    value: 0,
    counter: true,
    min: 0,
    max: 100,
    title: "Speed",
    titleFontColor: "black",
    label: "KM/H",
    levelColors: [
        "#6eff6c",
        "#03ad00",
        "#00ad93"
    ]
});
//________________________________________________________________________________________




//_____________IMU FUNCTIONALITY_________________________________________________________
/*
var counter = 0, transDeg = 0, transRadius = 0, RUNTIME = 50;

function imuMove(counter) {
   	if (counter % RUNTIME == 0)
   	{
    	transDeg =  Math.random() * 6.2;
    	transRadius =  Math.random() * 28;
    }
    if ((counter%RUNTIME)<(RUNTIME/2.0))
       	document.getElementById("Ball").style.WebkitTransform = "translate(" + (transRadius*Math.cos(transDeg))/(RUNTIME/2)*(counter%(RUNTIME/2)) + "px, "+ (transRadius*Math.sin(transDeg))/(RUNTIME/2)*(counter%(RUNTIME/2)) +"px)";
    else
    	document.getElementById("Ball").style.WebkitTransform = "translate(" + (transRadius*Math.cos(transDeg))/(RUNTIME/2)*((RUNTIME/2)-counter%(RUNTIME/2)) + "px, "+ (transRadius*Math.sin(transDeg))/(RUNTIME/2)*((RUNTIME/2)-counter%(RUNTIME/2)) +"px)";
}

setInterval(function() {
	imuMove(counter++)
}, RUNTIME/10);
*/
//________________________________________________________________________________________





//______________WHEEL ANGLE SIM____________________________________________________________

var rotateSteering = function(event) {
    var deg = (Math.random() * 180) - 90;;
    document.getElementById("steering").style.WebkitTransform = "rotate(" + deg + "deg)";
}
//________________________________________________________________________________________





//____________EVERYTHING IS ADDED ONCE THE WINDOW LOADS___________________________________
window.onload = function() {

    var speed = []; // data variable 1
    var battery = []; // data variable 2
    var dps3 = []; // data variable 3
    var dps4 = []; // data variable 4
    var dps5 = []; // data variable 5

    //Creating the multi part chart
    var graph = new CanvasJS.Chart("chartContainer", {
        backgroundColor: '',
        zoomEnabled: true,
        axisY: {
            includeZero: false
        },
        axisX: {
            title: "Time (s)"
        },
        toolTip: {
            shared: true
        },
        legend: {
            cursor: "pointer",
            verticalAlign: "bottom",
            fontSize: 12,
            fontColor: "Black",
            itemclick: toggleDataSeries
        },
        data: [{
            type: "line",
            dataPoints: speed,
            xValueType: "number",
            showInLegend: true,
            name: "Speed",
        }, {
            visible: false,
            type: "line",
            dataPoints: battery,
            xValueType: "number",
            showInLegend: true,
            name: "Battery",
        }, {
            visible: false,
            type: "line",
            dataPoints: dps3,
            xValueType: "number",
            showInLegend: true,
            name: "Measurement C",
        }, {
            visible: false,
            type: "line",
            dataPoints: dps4,
            xValueType: "number",
            showInLegend: true,
            name: "Measurement D",
        }, {
            visible: false,
            type: "line",
            dataPoints: dps5,
            xValueType: "number",
            showInLegend: true,
            name: "Measurement E",
        }]
    });

        //function that toggles the visible lines
    function toggleDataSeries(e) {
        if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        } else {
            e.dataSeries.visible = true;
        }
        graph.render();
    }

    var xVal = 0; //set an initial value in the x axis
    var yVal3 = 90; //set an initial value in the y axis
    var yVal4 = 90; //set an initial value in the y axis
    var yVal5 = 90; //set an initial value in the y axis
    var dataLength = 30; // number of dataPoints visible at any point
    var currentLength = -1;

        //function that updtaes the current y values
    var updateGraphs = function(count) {
        count = count || 1;
        for (var j = 0; j < count; j++) {
            yVal3 = yVal3 + Math.round(5 + Math.random() * (-5 - 5));
            yVal4 = yVal4 + Math.round(5 + Math.random() * (-5 - 5));
            yVal5 = yVal5 + Math.round(5 + Math.random() * (-5 - 5));
            speed.push({
                x: xVal,
                y: speedValue
            });
            battery.push({
                x: xVal,
                y: batteryValue
            });
            dps3.push({
                x: xVal,
                y: yVal3
            });
            dps4.push({
                x: xVal,
                y: yVal4
            });
            dps5.push({
                x: xVal,
                y: yVal5
            });
            xVal++;
        }
        if (currentLength < dataLength)
        {
             currentLength = currentLength + 1;
        }
        else {
            speed.shift();
            battery.shift();
            dps3.shift();
            dps4.shift();
            dps5.shift();
        }
        graph.render();
    };


    //creating the chart for battery voltage
    var voltageChart = new CanvasJS.Chart("voltageChart", {
        backgroundColor: '',
        animationEnabled: true,
        theme: "dark1",
        tooltip: {
            animationEnabled: true
        },
        axisY: {
            title: "Voltage (V)",
            titleFontColor: "black",
            titleFontSize: 13,
            labelFontColor: "black"
        },
        axisX: {
            labelFontColor: "black"
        },
        data: [{
            type: "column",
            dataPoints: [
                {y: 30,label: "1"},
                {y: 29,label: "2"},
                { y: 25, label: "3" },
                { y: 32, label: "4" },
                { y: 30, label: "5" },
                { y: 12, label: "6" },
                { y: 15, label: "7" },
                { y: 17, label: "8" },
                { y: 19, label: "9" },
                { y: 22, label: "10" },
                { y: 25, label: "11" },
                { y: 24, label: "12" },
                { y: 2, label: "13" },
                { y: 40, label: "14" },
                { y: 35, label: "15" },
                { y: 12, label: "16" },
                { y: 30, label: "17" },
                { y: 23, label: "18" },
                { y: 25, label: "19" },
                { y: 15, label: "20" },
                { y: 40, label: "21" },
                { y: 35, label: "22" },
                { y: 16, label: "23" },
                { y: 32, label: "24" },
                { y: 20, label: "25" },
                { y: 27, label: "26" },
                { y: 20, label: "27" },
                { y: 35, label: "28" },
                { y: 23, label: "29" },
                { y: 12, label: "30" },
                { y: 30, label: "31" },
                { y: 29, label: "32" },
                { y: 25, label: "33" },
                { y: 32, label: "34" },
                { y: 30, label: "35" },
                { y: 12, label: "36" },
                { y: 15, label: "37" },
                { y: 17, label: "38" },
                { y: 19, label: "39" },
                { y: 22, label: "40" },
                { y: 25, label: "41" },
                { y: 24, label: "42" },
                { y: 2, label: "43" },
                { y: 40, label: "44" },
                { y: 35, label: "45" },
                { y: 12, label: "46" },
                { y: 30, label: "47" },
                { y: 23, label: "48" },
                { y: 25, label: "49" },
                { y: 15, label: "50" },
                { y: 40, label: "51" },
                { y: 35, label: "52" },
                { y: 16, label: "53" },
                { y: 32, label: "54" },
                { y: 20, label: "55" },
                { y: 27, label: "56" },
                { y: 20, label: "57" },
                { y: 35, label: "58" },
                { y: 23, label: "59" },
                { y: 12, label: "60" },
                { y: 40, label: "61" },
                { y: 35, label: "62" },
                { y: 16, label: "63" },
                { y: 32, label: "64" },
                { y: 20, label: "65" },
                { y: 27, label: "66" },
                { y: 20, label: "67" },
                { y: 35, label: "68" },
                { y: 23, label: "69" },
                { y: 12, label: "70" },
                { y: 20, label: "71" },
                { y: 27, label: "72" }]
        }]
    });
    voltageChart.render();

        //creating random values for the voltages
    var updateVoltageChart = function() {
        for (var i = 1; i <= 72; i++) {
            voltageChart.options.data[0].dataPoints[i] = {
                y: Math.floor(Math.random() * 30 + 1)
            };
        }

        voltageChart.render();
    }



    //__________BATTERY POWER GRAPH_______________________________________________________
    var batteryChart = new CanvasJS.Chart("batteryFill", {
        backgroundColor: '',
        animationEnabled: true,
        axisX:{
            labelFontSize: 12
        },
        axisY: {
            labelFontSize: 12,
            suffix: "%",
            maximum: 100,
            minimum: 0
        },
        dataPointWidth: 85,
        data: [{
            type: "column",
            color: "#014D65",
            dataPoints: [
                {label: "Battery Charge", y: 3}
            ]
        }]
    });
    batteryChart.render();

    var updateBatteryChart = function() {
        batteryChart.options.data[0].dataPoints[0] = {
            y: batteryValue,
            label: "Battery Charge"
        };

        batteryChart.render();
    }
    //____________________________________________________________________________________




    //____________ERRORS AND RAW DATA GENERATION__________________________________________
    var rawData = function(count) {
        //document.getElementById("raw").innerHTML = document.getElementById("raw").innerHTML + Math.random();
        var symbol = Math.floor(Math.random() * 8 + 1);
    }

        //generate random 'RAW Data'
    function randomRawData(section, lines) {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        document.getElementById(section).innerHTML = "";

        for (var j = 0; j < lines; j++) {
            for (var i = 0; i < 20; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            text += "<br>";
        }

        document.getElementById(section).innerHTML += text;
    }
        //generate random 'Error Data'
    function randomError(section, lines) {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        document.getElementById(section).innerHTML = "";

        for (var j = 0; j < lines; j++) {
            text += "ERROR: "
            for (var i = 0; i < 15; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            text += "!<br>";
        }

        document.getElementById(section).innerHTML += text;
    }
    //____________________________________________________________________________________




    //_______________________________HEATMAP SCRIPTS______________________________________
    var xValues = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U'];
    var yValues = ['O', 'N', 'M', 'L', 'K', 'J', 'I', 'H', 'G', 'F', 'E', 'D', 'C', 'B', 'A'];
    var zValues = [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0.95, 0.95, 0.95, 0.95, 0.95, 0.95, 0.95, 0.95, 0.95, 0.95, 0.95, 0.95, 0.95, 0.95, 0.95, 0.95, 0.95, 0.95, 0.95, 0.95, 0.95],
      [0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9],
      [0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8],
      [0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75],
      [0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7],
      [0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6],
      [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5],
      [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4],
      [0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3],
      [0.25, 0.25, 0.25, 0.25, 0.25,0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25],
      [0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2],
      [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1],
      [0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05],
      [0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0]
    ];

    function colorPerc(perc) {
        var r = 255, g = 43, b = g;
        var stopper = r-g;
        var g0 = g, r0 = r;
        var count1 = perc/100.0 * stopper * 3;
        var count2 = perc/100.0 * g;
        if(count1 < stopper) {
            g = g0 + Math.round(count1/1.5);
            b -= Math.round(count2);
        }
         if(count1 > stopper) {
            g = 255;
            r = r0 - Math.round(count1/3);
        }
        var h = r * 0x10000 + g * 0x100 + b * 0x1;
        return '#' + ('000000' + h.toString(16)).slice(-6);
    }

    var colorscaleValue = [
      [0, colorPerc(100)],
      [.6, colorPerc(30)],
      [.8, colorPerc(20)],
      [.9, colorPerc(10)],
      [1, colorPerc(0)]
    ];


    var data = [{
      x: xValues,
      y: yValues,
      z: zValues,
      type: 'heatmap',
      colorscale: colorscaleValue,
      showscale: false
    }];

    var layout = {
      annotations: [],
       margin: {
        l: 25,
        r: 0,
        b: 0,
        t: 25,
        pad: 0
      },

      xaxis: {
        ticks: '',
        side: 'top'
      },
      yaxis: {
        ticks: '',
        ticksuffix: ' ',
        width: 700,
        height: 700,
        autosize: true
      }
    };

    for ( var i = 0; i < yValues.length; i++ )
    {
      for ( var j = 0; j < xValues.length; j++ ) {
            var textColor = 'black';

            var result = {
                xref: 'x1',
                yref: 'y1',
                x: xValues[j],
                y: yValues[i],
                text: zValues[i][j],
                font: {
                    family: 'Arial',
                    size: 10,
                    color: 'rgb(50, 171, 96)'
                },
                showarrow: false,
                font: {
                    color: textColor
                }
            };

            layout.annotations.push(result);
         }
    }

    Plotly.newPlot('heatMap', data, layout);
    //____________________________________________________________________________________





    //_________UPDATING NUMBERS FOR EVERYTHING____________________________________________
    updateGraphs(currentLength);

    setInterval(function() {
        speedValue = getRandomInt(10, 100);
        batteryValue = getRandomInt(10, 100);
        updateGraphs();
        updateVoltageChart();
        updateBatteryChart();
        randomRawData("raw", 28);
        randomError("errors", 20);
        g.refresh(speedValue);
        rotateSteering();
    }, updateInterval);
    //____________________________________________________________________________________



}
//________________________________________________________________________________________
