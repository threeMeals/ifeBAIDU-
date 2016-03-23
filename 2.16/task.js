/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};
var cityInput = document.getElementById("aqi-city-input");
var valueInput = document.getElementById("aqi-value-input");

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
	var city = cityInput.value.trim();
	var aqi = valueInput.value.trim();
	
	if(!city.match(/^[a-zA-Z\u4e00-\u9fa5]+$/)){
		alert("请输入中英文");
		return;
	}
	
	if(!aqi.match(/^[\d]+$/)){
		alert("空气指数必须为整数");
		return;
	}
	
	aqiData[city] = aqi;
}

/**
   * 渲染aqi-table表格
   */
function renderAqiList() {
	var items = "<td>城市</td><td>空气质量</td><td>操作</td>";
	for(var city in aqiData){
		 items += "<tr><td>"+city+"</td><td>"+aqiData[city]+"</td><td><button data-city='"+city+"'>删除</button></td></tr>"		 
	}
	document.getElementById("aqi-table").innerHTML = city ? items : "";
}

/**
   * 点击add-btn时的处理逻辑
   * 获取用户输入，更新数据，并进行页面呈现的更新
   */
function addBtnHandle() {
	addAqiData();
	renderAqiList();
}
/**
   * 点击各个删除按钮的时候的处理逻辑
   * 获取哪个城市数据被删，删除数据，更新表格显示
   */
function delBtnHandle() {
// do sth.
	var cityAtrr = this.getAttribute("data-city");//获取按钮的标识属性
	delete aqiData[cityAtrr];//从aqiData删除
	console.log(cityAtrr);//重新绘制表格
	//renderAqiList();
}


function init() {

// 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
	var addBtn = document.getElementById("add-btn");
	addBtn.onclick = addBtnHandle;
// 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
	var table = document.getElementById("aqi-table");
	var delBtns = table.getElementsByTagName("button");
	for(var i=0; i<delBtns.length;i++){
		delBtns[i].onclick = delBtnHandle;
	}
}

init();