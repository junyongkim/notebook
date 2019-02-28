Chart.defaults.global.defaultFontFamily="'LM Mono 10',Consolas";
Chart.defaults.global.defaultFontSize=11*96/72;
Papa.parse
(
    "/notebook/misc/190220chartjs1.csv",
    {
        download:true,
        complete:function(results)
        {
            results.data.splice(results.data.length-1,results.data.length-1);
            new Chart
            (
                document.getElementById("Figure01"),
                {
                    type:"line",
                    data:
                    {
                        labels:results.data[0],
                        datasets:
                        [
                            {
                                label:"Quadratic",
                                data:results.data[1],
                                backgroundColor:"transparent",
                                borderColor:"blue",
                                borderWidth:1,
                                fill:false
                            },
                            {
                                label:"Exponential",
                                data:results.data[2],
                                backgroundColor:"transparent",
                                borderColor:"red",
                                borderWidth:1,
                                fill:false
                            }
                        ]
                    },
                    options:
                    {
                        responsive:false
                    }
                }
            );
        }
    }
);
Papa.parse
(
    "/notebook/misc/190220chartjs2.csv",
    {
        download:true,
        header:true,
        complete:function(results)
        {
            results.data.splice(results.data.length-1,results.data.length-1);
            results.data.subdata=[[],[]];
            for(i=0;i<results.data.length;i++)
            {
                results.data.subdata[0][i]={};
                results.data.subdata[0][i].x=results.data[i].x;
                results.data.subdata[0][i].y=results.data[i].y1;
                results.data.subdata[1][i]={};
                results.data.subdata[1][i].x=results.data[i].x;
                results.data.subdata[1][i].y=results.data[i].y2;
            }
            new Chart
            (
                document.getElementById("Figure02"),
                {
                    type:"scatter",
                    data:
                    {
                        datasets:
                        [
                            {
                                label:"Quadratic",
                                data:results.data.subdata[0],
                                backgroundColor:"transparent",
                                borderColor:"blue",
                                borderWidth:1,
                                fill:false,
                                showLine:true
                            },
                            {
                                label:"Exponential",
                                data:results.data.subdata[1],
                                backgroundColor:"transparent",
                                borderColor:"red",
                                borderWidth:1,
                                fill:false,
                                showLine:true
                            }
                        ]
                    },
                    options:
                    {
                        responsive:false
                    }
                }
            );
        }
    }
);
Papa.parse
(
    "/notebook/misc/190220chartjs3.csv",
    {
        download:true,
        header:true,
        complete:function(results)
        {
            results.data.splice(results.data.length-1,results.data.length-1);
            results.data.subdata=[[],[]];
            for(i=0;i<results.data.length;i++)
            {
                results.data.subdata[0][i]={};
                results.data.subdata[0][i].x=results.data[i].x1;
                results.data.subdata[0][i].y=results.data[i].y1;
                results.data.subdata[1][i]={};
                results.data.subdata[1][i].x=results.data[i].x2;
                results.data.subdata[1][i].y=results.data[i].y2;
            }
            new Chart
            (
                document.getElementById("Figure03"),
                {
                    type:"scatter",
                    data:
                    {
                        datasets:
                        [
                            {
                                label:"call streaminit(1)",
                                data:results.data.subdata[0],
                                backgroundColor:"transparent",
                                borderColor:"blue",
                                fill:false
                            },
                            {
                                label:"call streaminit(2)",
                                data:results.data.subdata[1],
                                backgroundColor:"transparent",
                                borderColor:"red",
                                fill:false
                            }
                        ]
                    },
                    options:
                    {
                        responsive:false
                    }
                }
            );
        }
    }
);
Papa.parse
(
    "/notebook/misc/190220chartjs4.csv",
    {
        download:true,
        complete:function(results)
        {
            results.data.splice(results.data.length-1,results.data.length-1);
            new Chart
            (
                document.getElementById("Figure04"),
                {
                    type:"bar",
                    data:
                    {
                        labels:results.data[0],
                        datasets:
                        [
                            {
                                label:"call streaminit(1)",
                                data:results.data[1],
                                backgroundColor:"transparent",
                                borderColor:"blue",
                                fill:false
                            },
                            {
                                type:"line",
                                label:'rand("normal",0,1)',
                                data:results.data[2],
                                backgroundColor:"transparent",
                                borderColor:"red",
                                borderWidth:1,
                                fill:false,
                                pointRadius:0
                            }
                        ]
                    },
                    options:
                    {
                        responsive:false,
                        xAxes:[{barPercentage:1,categoryPercentage:1}],
                        yAxes:[{ticks:{beginAtZero:true}}]
                    }
                }
            );
        }
    }
);
Papa.parse
(
    "/notebook/misc/190220chartjs5.csv",
    {
        download:true,
        complete:function(results)
        {
            results.data.splice(results.data.length-1,results.data.length-1);
            new Chart
            (
                document.getElementById("Figure05"),
                {
                    type:"horizontalBar",
                    data:
                    {
                        labels:results.data[0],
                        datasets:
                        [
                            {
                                label:"call streaminit(1)",
                                data:results.data[1],
                                backgroundColor:"transparent",
                                borderColor:"blue",
                                fill:false
                            },
                            {
                                label:"call streaminit(2)",
                                data:results.data[2],
                                backgroundColor:"transparent",
                                borderColor:"red",
                                fill:false
                            }
                        ]
                    },
                    options:
                    {
                        responsive:false,
                        xAxes:[{ticks:{beginAtZero:true}}],
                        yAxes:[{barPercentage:1,categoryPercentage:1}]
                    }
                }
            );
        }
    }
);
Papa.parse
(
    "/notebook/misc/190226chartjs1.csv",
    {
        download:true,
        header:true,
        complete:function(results)
        {
            results.data.splice(results.data.length-1,results.data.length-1);
            new Chart
            (
                document.getElementById("Figure06"),
                {
                    type:"scatter",
                    data:
                    {
                        datasets:
                        [
                            {
                                label:"ICS_ALL",
                                data:results.data,
                                backgroundColor:"transparent",
                                borderColor:"blue",
                                borderWidth:1,
                                fill:false,
                                showLine:true,
                                lineTension:0,
                                pointRadius:0
                            }
                        ]
                    },
                    options:
                    {
                        responsive:false
                    }
                }
            );
        }
    }
);
Papa.parse
(
    "/notebook/misc/190226chartjs2.csv",
    {
        download:true,
        header:true,
        complete:function(results)
        {
            results.data.splice(results.data.length-1,results.data.length-1);
            new Chart
            (
                document.getElementById("Figure07"),
                {
                    type:"scatter",
                    data:
                    {
                        datasets:
                        [
                            {
                                label:"FEDFUNDS",
                                data:results.data,
                                backgroundColor:"transparent",
                                borderColor:"blue",
                                borderWidth:1,
                                fill:false,
                                showLine:true,
                                lineTension:0,
                                pointRadius:0
                            }
                        ]
                    },
                    options:
                    {
                        responsive:false
                    }
                }
            );
        }
    }
);
Papa.parse
(
    "/notebook/misc/190226chartjs3.csv",
    {
        download:true,
        header:true,
        complete:function(results)
        {
            results.data.splice(results.data.length-1,results.data.length-1);
            new Chart
            (
                document.getElementById("Figure08"),
                {
                    type:"scatter",
                    data:
                    {
                        datasets:
                        [
                            {
                                label:"cay",
                                data:results.data,
                                backgroundColor:"transparent",
                                borderColor:"blue",
                                borderWidth:1,
                                fill:false,
                                showLine:true,
                                lineTension:0,
                                pointRadius:0
                            }
                        ]
                    },
                    options:
                    {
                        responsive:false
                    }
                }
            );
        }
    }
);
Papa.parse
(
    "/notebook/misc/190226chartjs4.csv",
    {
        download:true,
        header:true,
        complete:function(results)
        {
            results.data.splice(results.data.length-1,results.data.length-1);
            results.data.subdata=[[],[],[],[],[],[]];
            for(i=0;i<results.data.length-1;i++)
            {
                results.data.subdata[0][i]={};
                results.data.subdata[0][i].x=results.data[i].x;
                results.data.subdata[0][i].y=results.data[i].y1;
                results.data.subdata[1][i]={};
                results.data.subdata[1][i].x=results.data[i].x;
                results.data.subdata[1][i].y=results.data[i].y2;
                results.data.subdata[2][i]={};
                results.data.subdata[2][i].x=results.data[i].x;
                results.data.subdata[2][i].y=results.data[i].y3;
                results.data.subdata[3][i]={};
                results.data.subdata[3][i].x=results.data[i].x;
                results.data.subdata[3][i].y=results.data[i].y4;
                results.data.subdata[4][i]={};
                results.data.subdata[4][i].x=results.data[i].x;
                results.data.subdata[4][i].y=results.data[i].y5;
                results.data.subdata[5][i]={};
                results.data.subdata[5][i].x=results.data[i].x;
                results.data.subdata[5][i].y=results.data[i].y6;
            }
            new Chart
            (
                document.getElementById("Figure09"),
                {
                    type:"scatter",
                    data:
                    {
                        datasets:
                        [
                            {
                                label:"Mkt-RF",
                                data:results.data.subdata[0],
                                backgroundColor:"transparent",
                                borderColor:"blue",
                                borderWidth:1,
                                fill:false,
                                showLine:true,
                                lineTension:0,
                                pointRadius:0
                            },{
                                label:"SMB",
                                data:results.data.subdata[1],
                                backgroundColor:"transparent",
                                borderColor:"red",
                                borderWidth:1,
                                fill:false,
                                showLine:true,
                                lineTension:0,
                                pointRadius:0
                            },{
                                label:"HML",
                                data:results.data.subdata[2],
                                backgroundColor:"transparent",
                                borderColor:"lime",
                                borderWidth:1,
                                fill:false,
                                showLine:true,
                                lineTension:0,
                                pointRadius:0
                            },{
                                label:"RMW",
                                data:results.data.subdata[3],
                                backgroundColor:"transparent",
                                borderColor:"fuchsia",
                                borderWidth:1,
                                fill:false,
                                showLine:true,
                                lineTension:0,
                                pointRadius:0
                            },{
                                label:"CMA",
                                data:results.data.subdata[4],
                                backgroundColor:"transparent",
                                borderColor:"aqua",
                                borderWidth:1,
                                fill:false,
                                showLine:true,
                                lineTension:0,
                                pointRadius:0
                            },{
                                label:"RF",
                                data:results.data.subdata[5],
                                backgroundColor:"transparent",
                                borderColor:"yellow",
                                borderWidth:1,
                                fill:false,
                                showLine:true,
                                lineTension:0,
                                pointRadius:0
                            }
                        ]
                    },
                    options:
                    {
                        responsive:false
                    }
                }
            );
        }
    }
);
Papa.parse
(
    "/notebook/misc/190227chartjs1.csv",
    {
        download:true,
        header:true,
        complete:function(results)
        {
            results.data.splice(results.data.length-1,results.data.length-1);
            new Chart
            (
                document.getElementById("Figure10"),
                {
                    type:"scatter",
                    data:
                    {
                        datasets:
                        [
                            {
                                label:"AggLiq",
                                data:results.data,
                                backgroundColor:"transparent",
                                borderColor:"blue",
                                borderWidth:1,
                                fill:false,
                                showLine:true,
                                lineTension:0,
                                pointRadius:0
                            }
                        ]
                    },
                    options:
                    {
                        responsive:false
                    }
                }
            );
        }
    }
);
Papa.parse
(
    "/notebook/misc/190227chartjs2.csv",
    {
        download:true,
        header:true,
        complete:function(results)
        {
            results.data.splice(results.data.length-1,results.data.length-1);
            results.data.subdata=[[],[],[],[]];
            for(i=0;i<results.data.length-1;i++)
            {
                results.data.subdata[0][i]={};
                results.data.subdata[0][i].x=results.data[i].x;
                results.data.subdata[0][i].y=results.data[i].y1;
                results.data.subdata[1][i]={};
                results.data.subdata[1][i].x=results.data[i].x;
                results.data.subdata[1][i].y=results.data[i].y2;
                results.data.subdata[2][i]={};
                results.data.subdata[2][i].x=results.data[i].x;
                results.data.subdata[2][i].y=results.data[i].y3;
                results.data.subdata[3][i]={};
                results.data.subdata[3][i].x=results.data[i].x;
                results.data.subdata[3][i].y=results.data[i].y4;
            }
            new Chart
            (
                document.getElementById("Figure11"),
                {
                    type:"scatter",
                    data:
                    {
                        datasets:
                        [
                            {
                                label:"Mean first-day return",
                                data:results.data.subdata[0],
                                backgroundColor:"transparent",
                                borderColor:"blue",
                                borderWidth:1,
                                fill:false,
                                showLine:true,
                                lineTension:0,
                                pointRadius:0
                            },{
                                label:"Number of IPOs",
                                data:results.data.subdata[1],
                                backgroundColor:"transparent",
                                borderColor:"red",
                                borderWidth:1,
                                fill:false,
                                showLine:true,
                                lineTension:0,
                                pointRadius:0
                            }
                        ]
                    },
                    options:
                    {
                        responsive:false
                    }
                }
            );
        }
    }
);
Papa.parse
(
    "/notebook/misc/190227chartjs3.csv",
    {
        download:true,
        header:true,
        complete:function(results)
        {
            results.data.splice(results.data.length-1,results.data.length-1);
            new Chart
            (
                document.getElementById("Figure12"),
                {
                    type:"scatter",
                    data:
                    {
                        datasets:
                        [
                            {
                                label:"CAPE",
                                data:results.data,
                                backgroundColor:"transparent",
                                borderColor:"blue",
                                borderWidth:1,
                                fill:false,
                                showLine:true,
                                lineTension:0,
                                pointRadius:0
                            }
                        ]
                    },
                    options:
                    {
                        responsive:false
                    }
                }
            );
        }
    }
);
Papa.parse
(
    "/notebook/misc/190227chartjs4.csv",
    {
        download:true,
        header:true,
        complete:function(results)
        {
            results.data.splice(results.data.length-1,results.data.length-1);
            new Chart
            (
                document.getElementById("Figure13"),
                {
                    type:"scatter",
                    data:
                    {
                        datasets:
                        [
                            {
                                label:"BAB",
                                data:results.data,
                                backgroundColor:"transparent",
                                borderColor:"blue",
                                borderWidth:1,
                                fill:false,
                                showLine:true,
                                lineTension:0,
                                pointRadius:0
                            }
                        ]
                    },
                    options:
                    {
                        responsive:false
                    }
                }
            );
        }
    }
);
