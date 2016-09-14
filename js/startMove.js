// JavaScript Document  //获取dom元素样式属性的。//获取对象obj 的样式，属性为 attr 的值；
function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];//ie
	}else{
		return window.getComputedStyle(obj,false)[attr];//非IE
	}
}



//设置元素的样式
function setStyle(obj, json)
{
	var attr='';
	
	for(attr in json)
	{
		obj.style[attr]=json[attr];
	}
}




function startMove(obj, json, fn) {
	clearInterval(obj.timer);
	obj.timer = setInterval(function() {
		var isClear = true;
		for(attr in json) {
			//获取属性值
			if(attr == 'opacity') {
				var iCur = Math.round(parseFloat(getStyle(obj, attr)) * 100);
			} else {
				var iCur = Math.round(parseFloat(getStyle(obj, attr)));
			}
			var sPeed = (json[attr] - iCur) / 8;
			sPeed = sPeed > 0 ? Math.ceil(sPeed) : Math.floor(sPeed);
			if(iCur == json[attr]) {

			} else {
				isClear = false;
				if(attr == 'opacity') {
					obj.style.filter = 'alpha(opacity=' + parseInt(iCur + sPeed) + ')';
					obj.style.opacity = (iCur + sPeed) / 100;
				} else {
					obj.style[attr] = (iCur + sPeed) + 'px';
				}
			}

		}
		if(isClear){//如果达到当前目标个数，清除定时器
			clearInterval(obj.timer);
			if(fn){
				fn();
			}
		}

	}, 30);
}