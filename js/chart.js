			
			var years = [2015,2016,2017,2018,2019,2020];
			var gdp = [5.5,6.9,3.4,8,12,9];
			var ifr = [10,8,12,9,13,8];

			var provinces = ["VTE","PHO","SVN","KHM","LPB","BOK"];
			var pop = [820000,580200,700000,900000,1800000,860000];
			var province2 = ["VTE","PHO","LTH","BOK","ODX","XBL","LPB","XEK","HUP","VTP","BKX","KHM","SVK","SVN","XEK","CHP","ATP","XSB",];
			var b_2019 = [5,6,9,4,6,5,5,5,8,6,5,5,6,9,5,7,5,5];
			var b_2020 = [7,8,11,6,9,6,7,8,13,7,6,5,7,10,8,9,7,8];

			//console.log(province2,b_2019,b_2020);

			var ctx = document. getElementById("myChart");
			var myChart = new Chart(ctx,{
				type : "line",
				data:{
					labels: years,
					datasets:[{
						label:"GDP growth Rate",
						data:gdp,
						borderColor:"#a99a86",
						fill:false,
						lineTension:0,
					}]
				},
				options:{
					scales:{
						yAxes:[{
							ticks:{
								beginAtZero:true,
								stepSize:2,
								maxTicksLimit:5,
							}
						}]
					},
					legend:{
						display:false,
					}
				}
			});//end of chart

           	var ctx = document.getElementById("barChart");
           	var barChart = new Chart(ctx,{
           		type:"bar",
           		data:{
           			labels:years,
           			datasets:[{
           				label:"Inflation rate",
           				data: ifr,
           				backgroundColor:["#d0b086","#c9a473","#c0955d","#bf935a","#ba8c4f","#b88747"],
           			}]
           		},
           		options:{
					scales:{
						yAxes:[{
							ticks:{
								beginAtZero:true,
								stepSize:2,
								maxTicksLimit:5,
							}
						}]
					},
					legend:{
						display:false,
					}
				}


           	});//end of chart
			//console.log(years,gdp);
			var ctx = document.getElementById("pieChart");
           	var pieChart = new Chart(ctx,{
           		type:"pie",
           		data:{
           			labels:years,
           			datasets:[{
           				label:"Inflation rate",
           				data: ifr,
           				backgroundColor:["#e0ffff","#afeeee","#b0e0e6","#00ced1","#008b8b","#009494"],
           			}]
           		}
           	});//end pie

           	var ctx = document.getElementById("pChart");
           	var pChart = new Chart(ctx,{
           		type:"horizontalBar",
           		data:{
           			labels:provinces,
           			datasets:[{
           				label:"Poppulation",
           				data: pop,
           				backgroundColor:["#00dbdb","#00bdbd","#009e9e","#006161","#004242","#002424"],
           			}]
           		},
           		options:{
					scales:{
						yAxes:[{
							ticks:{
								beginAtZero:true,
								stepSize:2,
								maxTicksLimit:5,
							}
						}]
					},
					legend:{
						display:false,
					}
				}
           	});
           	var ctx = document.getElementById("bChart");
           	var bChart = new Chart(ctx,{
           		type:"bar",
           		data:{
           			labels:province2,
           			datasets:[{
           				label:"Birth rate 2019",
           				data: b_2019,
           				backgroundColor:"#80daeb",
           			},
           			{
           				label:"Birth rate 2020",
           				data: b_2020,
           				backgroundColor:"#318ce7",
           		}]

           		},
           		options:{
					scales:{
						yAxes:[{
							ticks:{
								beginAtZero:true,
								stepSize:2,
								maxTicksLimit:8,
							}
						}]
					},
					legend:{
						labels:{
							fontColor:"#665d1e",
							fontSize: 30,
					
					}
				}
			}
           	});