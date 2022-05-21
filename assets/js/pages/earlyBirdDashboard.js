//Bundle usage summary
var walletOptions = {
    series: [76, 67],
    chart: { height: 262, type: "radialBar" },
    plotOptions: {
        radialBar: {
            offsetY: 0,
            startAngle: 0,
            endAngle: 270,
            hollow: {
                margin: 5,
                size: "35%",
                background: "transparent",
                image: void 0
            },
            track: {
                show: !0,
                startAngle: void 0,
                endAngle: void 0,
                background: "#f2f2f2",
                strokeWidth: "97%",
                opacity: 1,
                margin: 12,
                dropShadow: {
                    enabled: !1,
                    top: 0,
                    left: 0,
                    blur: 3,
                    opacity: .5
                }
            },
            dataLabels: {
                name: {
                    show: !0,
                    fontSize: "16px",
                    fontWeight: 600,
                    offsetY: -10
                },
                value: { show: !0, fontSize: "14px", offsetY: 4, formatter: function(e) { return e + "%" } },
                total: {
                    show: !0,
                    label: "Total",
                    color: "#373d3f",
                    fontSize: "16px",
                    fontFamily: void 0,
                    fontWeight: 600,
                    formatter: function(e) {
                        return e.globals.seriesTotals.reduce(function(e, t) {
                            return e + t
                        }, 0) + "%"
                    }
                }
            }
        }
    },
    stroke: { lineCap: "round" },
    colors: ["#556ee6", "#e83e8c"],
    labels: ["Closed Events", "Upcoming Events"],
    legend: { show: !1 }
};
(chart = new ApexCharts(document.querySelector("#sent-bundles"), walletOptions)).render();

//Bunndle usage monthly summary
var options = {
        chart: {
            height: 360,
            type: "bar",
            stacked: !1,
            toolbar: {
                show: !1
            },
            zoom: {
                enabled: !0
            },

        },
        plotOptions: {
            bar: {
                horizontal: !1,
                columnWidth: "75%",
                // endingShape: "rounded"
            }
        },
        dataLabels: {
            enabled: !1,
        },
        stroke: { show: !0, width: 10, colors: ["transparent"] },

        yaxis: {
            labels: {
                formatter: function(value) {
                    // return "KES " + value;
                    return numeral(value).format('0,0 a')
                },
                // formatter: function(val, index) {

                //     return numeral(val).format('0,0')
                // },



            },
            title: {
                text: "Events in Hrs",
            }
        },
        series: [{
            name: "2021",
            data: [2000, 5123, 4145, 6712, 2212, 4378, 3678, 5232, 2402, 1801, 3603, 4802]
        }, {
            name: "2022",
            data: [13025, 2302, 2003, 8021, 1303, 2745, 18235, 2223, 10213, 1636, 2445, 2212]
        }],
        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        },
        colors: ["#556ee6", "#e83e8c", "#00a884"],
        legend: {
            position: "bottom"
        },
        fill: {
            opacity: 1
        },

        tooltip: {
            custom: function({ series, seriesIndex, dataPointIndex, w }) {
                var data = w.globals.initialSeries[seriesIndex].data[dataPointIndex];

                return '<ul>' +
                    '<li><b>Price</b>: ' + data.x + '</li>' +
                    '<li><b>Number</b>: ' + data.y + '</li>' +
                    '<li><b>Product</b>: \'' + data.product + '\'</li>' +
                    '<li><b>Info</b>: \'' + data.info + '\'</li>' +
                    '<li><b>Site</b>: \'' + data.site + '\'</li>' +
                    '</ul>';
            }
        },

        tooltip: {
            y: {
                formatter: function(value, { series, seriesIndex, dataPointIndex, w }) {
                    return "KES " + numeral(value).format('0,0')

                }
            }
        },
        tooltip: {
            y: [{ title: { formatter: function(e) { return e + " (mins)" } } },
                { title: { formatter: function(e) { return e + " per session" } } },
                { title: { formatter: function(e) { return e } } }
            ]
        },
        tooltip: {
            followCursor: true,
            shared: false,
            custom: function({ series, seriesIndex, dataPointIndex, w }) {
                let currentTotal = 0
                series.forEach((s) => {
                    currentTotal += s[dataPointIndex]
                })
                return '<div class="custom-tooltip">' +
                    '<span><b>Total: </b>' + currentTotal + '</span>' +
                    '</div>'
            }
        },
        tooltip: {
            enabled: true,
            enabledOnSeries: undefined,
            shared: true,
            followCursor: false,
            intersect: false,
            inverseOrder: false,
            custom: undefined,
            fillSeriesColor: false,
            theme: false,
            style: {
                fontSize: '12px',
                fontFamily: undefined
            },
            // custom: function({ series, seriesIndex, dataPointIndex, w }) {
            //     let currentTotal = 0
            //     series.forEach((s) => {
            //         currentTotal += s[dataPointIndex]
            //     })
            //     return '<div class="custom-tooltip">' +
            //         '<span><b>Total: </b>' + currentTotal + '</span>' +
            //         '</div>'
            // },
            y: {
                formatter: function(value, { series, seriesIndex, dataPointIndex, w }) {
                    let currentTotal = 0
                    series.forEach((s) => {
                        currentTotal += s[dataPointIndex]
                    })
                    return "<span class='text-right' > " + numeral(value).format('0,0') + "Sent</span> "

                }
            }
        },
        tooltip: {
            enabled: true,
            enabledOnSeries: undefined,
            shared: true,
            followCursor: false,
            intersect: false,
            inverseOrder: false,
            custom: undefined,
            fillSeriesColor: false,
            theme: false,
            style: {
                fontSize: '12px',
                fontFamily: undefined

            },
            fillSeriesColor: false,
            theme: "light",

            marker: {
                show: true,
            },
            onDatasetHover: {
                highlightDataSeries: true,
            },
            // custom: function({ series, seriesIndex, dataPointIndex, w }) {
            //     let currentTotal = 0
            //     series.forEach((s) => {
            //         currentTotal += s[dataPointIndex]
            //     })
            //     return '<div class="custom-tooltip">' +
            //         '<span><b>Total: </b>' + currentTotal + '</span>' +
            //         '</div>'
            // },
            y: {
                formatter: function(value, { series, seriesIndex, dataPointIndex, w }) {
                    let currentTotal = 0
                    series.forEach((s) => {
                        currentTotal += s[dataPointIndex]
                    })
                    return "<span class='text-right w-100 d-flex' > " + numeral(value).format('0,0') + " Hrs</span> "

                }
            }
        }



    },
    chart = new ApexCharts(document.querySelector("#member-salary-chart"), options);
chart.render();