var wrap = document.getElementById("result");
var btnli = document.getElementById("left-in");
var btnri = document.getElementById("right-in");
var btnlo = document.getElementById("left-out");
var btnro = document.getElementById("right-out");



function creatEle(){
	var ele = document.createElement("div");
	var inputBtn = document.getElementById("inputText")
	var inputText =  inputBtn.value;
	
	if(inputText.match(/^[1-9]\d{0,2}$/)){
		ele.className = "num-block";
		ele.innerHTML = inputText;

		ele.onclick = function(){
			wrap.removeChild(this);
			alert(this.innerText);
		}

		return ele;		
	}else{
		alert("请输入三位数以内的数字");
		return;
	}
	
}

function leftIn(){
	var newEle = creatEle();
	if(wrap.firstElementChild){
		wrap.insertBefore(newEle, wrap.firstElementChild)		
	}else{
		wrap.appendChild(newEle)
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
	btnli.onclick = function(){
		console.log(1);
	}
	btnli.onclick = leftIn;
	btnri.onclick = rightIn;
	btnlo.onclick = leftOut;
	btnro.onclick = rightOut;
}


function init(){
	btnHandle();	
}



init();