var wrap = document.getElementById("result");
	btnli = document.getElementById("left-in"),
 	btnri = document.getElementById("right-in"),
 	btnlo = document.getElementById("left-out"),
 	btnro = document.getElementById("right-out"),
 	sortBtn = document.getElementById("sortBtn"),
	rentenTree = document.getElementById("render-tree"),
	data = [];//存储数据的

function getDate(){
	data = [];
	var eles = wrap.getElementsByTagName("div");
	for(var i=0; i<eles.length;i++){
		var numText = parseInt(eles[i].innerText);
		data.push(numText);		
	}		
}

function sortDate(data){
	for(var i=0; i<data.length ;i++){		
		for(var j=0 ; j<data.length-i; j++ ){	
			if(data[j] > data[j+1]){				
				var temp = data[j];
				data[j] = data[j+1];
				data[j+1] = temp;
			}				
		}			
	}
	
}

function render(data){
	for(var i=0; i<data.length; i++){
		var items = document.createElement("div");
		items.className = "render-item";
		items.style.height = data[i];
		items.style.left = 15*i + "px";
		rentenTree.appendChild(items);
	}	
}

function creatEle(){
	var ele = document.createElement("div");
	var inputBtn = document.getElementById("inputText")
	var inputText =  inputBtn.value;
	
	if(inputText.match(/^(?:[1-9]\d|100)$/)){
		ele.className = "num-block";
		ele.innerHTML = parseInt(inputText);

		ele.onclick = function(){
			wrap.removeChild(this);
			alert(this.innerText);
		}

		return ele;		
	}else{
		alert("请输入10-100的数字");
		return;
	}
	
}

function leftIn(){
	var newEle = creatEle();
	if(wrap.firstElementChild){
		wrap.insertBefore(newEle, wrap.firstElementChild);
	}else{
		wrap.appendChild(newEle);
	}
	
}

function rightIn(){
	var newEle = creatEle();
	wrap.appendChild(newEle)
}

function leftOut(){
	if(wrap.firstElementChild){
		wrap.removeChild(wrap.firstElementChild);
	}else{
		wrap.removeChild(wrap.firstChild)
	}
}

function rightOut(){
	if(wrap.lastElementChild){
		wrap.removeChild(wrap.lastElementChild);
	}else{
		wrap.removeChild(wrap.lastChild)
	}	
}

function btnHandle(){
	btnli.onclick = leftIn;
	btnri.onclick = rightIn;
	btnlo.onclick = leftOut;
	btnro.onclick = rightOut;
	sortBtn.onclick = function(){
		
		getDate();		
		sortDate(data);
		console.log(data);
		render(data);
	}
}


function init(){
	btnHandle();	
}

init();