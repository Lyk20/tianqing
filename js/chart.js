let baseUrl="https://edu.telking.com/api/?type="
let baseColor = [
		    '#c23531',
		    '#2f4554',
		    '#61a0a8',
		    '#d48265',
		    '#91c7ae',
		    '#749f83',
		    '#ca8622',
		    '#bda29a',
		    '#6e7074',
		    '#546570',
	    	'#c4ccd3'
	]

//数据请求函数
function getData(u,id) {
	let url = baseUrl+u
	fetch(url).then((res)=>{
		if(res.status == 200) {
			res.json().then(data=>{
				console.log(data.data)
				if(id == 'pie') {
					let pieData = []
					for(let i = 0;i<data.data.series.length;i++) {
						pieData.push({
							name:data.data.xAxis[i],
							value:data.data.series[i]
						})
					}
					console.log(pieData)
					makePie(id,pieData)
					return;
				}
				makeCharts(id,data.data.xAxis,data.data.series)
		})	
		}
		else {
			 console.log('Looks like there was a problem. Status Code: ' +response.status);
		}
	})
}

function makeCharts(ID,a,b) {
	let oneChart = echarts.init(document.getElementById(ID));
	let option = {
  		color: baseColor,
	    xAxis: {
	    	name:'日期',
	      	type:'category',
	      	data: a
	    },
	    yAxis: {
	    	name:'商品数',
			axisLine:{
				show:true
			}
	    },
		series: [
		  {
		  	name:"日期",
		    type: ID,
		    data: b
		  },
		]
  };
  oneChart.setOption(option)
}

function makePie(id,pieData) {
	let twoChart = echarts.init(document.getElementById(id))
	let option = {
		color:baseColor,
		series:[
		{
			type:'pie',
			data:pieData
		}
		]
	}
	twoChart.setOption(option)
}

window.onload=function() {
	getData('week','bar')
	getData('month','line')
	getData('week','pie')
}




