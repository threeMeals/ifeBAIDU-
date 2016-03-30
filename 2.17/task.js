/* 数据格式演示
var aqiSourceData = {
  "北京": {
    "2016-01-01": 10,
    "2016-01-02": 10,
    "2016-01-03": 10,
    "2016-01-04": 10
  }
};
*/

// 以下两个函数用于随机模拟生成测试数据
function getDateStr(dat) {
  var y = dat.getFullYear();
  var m = dat.getMonth() + 1;
  m = m < 10 ? '0' + m : m;
  var d = dat.getDate();
  d = d < 10 ? '0' + d : d;
  return y + '-' + m + '-' + d;
}
function randomBuildData(seed) {
  var returnData = {};
  var dat = new Date("2016-01-01");
  var datStr = ''
  for (var i = 1; i < 92; i++) {
    datStr = getDateStr(dat);
    returnData[datStr] = Math.ceil(Math.random() * seed);
    dat.setDate(dat.getDate() + 1);
  }
  return returnData;
}
function aqiWeek(city){
	var averageWeek = [];
	var countWeek = 0;
	var weekSum = 0; 
	for(i in aqiSourceData[city]){
		weekSum += aqiSourceData[city][i];
		countWeek++;
		if(countWeek >=7 ){
			weekSum = Math.floor(weekSum/7); 
			averageWeek.push(weekSum);
		}		
	}
	console.log(averageWeek)
	
	
	
	
}





//这是日粒度
var aqiSourceData = {
  "北京": randomBuildData(500),
  "上海": randomBuildData(300),
  "广州": randomBuildData(200),
  "深圳": randomBuildData(100),
  "成都": randomBuildData(300),
  "西安": randomBuildData(500),
  "福州": randomBuildData(100),
  "厦门": randomBuildData(100),
  "沈阳": randomBuildData(500)
};
//周粒度



// 用于渲染图表的数据
var chartData = {
	day : aqiSourceData
};
console.log(aqiSourceData["北京"])
// 记录当前页面的表单选项
var pageState = {
  nowSelectCity: -1,
  nowGraTime: "day"
}

/**
 * 渲染图表
 */
function renderChart(city) {
	var aqiChartWrap = document.getElementsByClassName("aqi-chart-wrap")[0];
	var items = "";
	var a = 0;
	for( i in aqiSourceData[city]){
		items += '<span class="aqi-by-day" style="height: '+aqiSourceData[city][i]+';left: '+(a*13)+'px'+';"></span>' ;
		a++
	}
	aqiChartWrap.innerHTML = items;
	
	//计算周平均值
	//定义数组存储周平均值
	
	//计算月平均值
}

/**
 * 日、周、月的radio事件点击时的处理函数
 */
function graTimeChange() {
  // 确定是否选项发生了变化 
  // 设置对应数据
  // 调用图表渲染函数
  
	
  
}
/**
 * select发生变化时的处理函数
 */
function citySelectChange() {
  // 确定是否选项发生了变化 
  // 设置对应数据
  // 调用图表渲染函数
  	var citySelect = document.getElementById("city-select");
	citySelect.onchange = function(){
		var city = this.value;
		console.log(city);
		renderChart(city)		
	}
}
citySelectChange()
/**
 * 初始化日、周、月的radio事件，当点击时，调用函数graTimeChange
 */
function initGraTimeForm() {

}

/**
 * 初始化城市Select下拉选择框中的选项
 */
function initCitySelector() {
  // 读取aqiSourceData中的城市，然后设置id为city-select的下拉列表中的选项

  // 给select设置事件，当选项发生变化时调用函数citySelectChange

}

/**
 * 初始化图表需要的数据格式
 */
function initAqiChartData() {
  // 将原始的源数据处理成图表需要的数据格式
  // 处理好的数据存到 chartData 中
}

/**
 * 初始化函数
 */
function init() {
  initGraTimeForm()
  initCitySelector();
  initAqiChartData();
}

init();
