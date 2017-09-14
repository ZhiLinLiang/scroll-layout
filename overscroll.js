/*<script type="text/javascript">*/
//阻止默认事件
function preventDef(event){
	 if (!event._isScroller)event.preventDefault(); //判断是否局部
}
//注册事件
function addHandler(){
	document.body.addEventListener("touchmove",preventDef,false);
}
//注销事件
function removeHandler(){
	document.body.removeEventListener("touchmove",preventDef,false);//不能注销匿名函数
}
//局部滚动事件
function overscroll(aElement){
	var el=document.querySelector(aElement);
	el.addEventListener('touchmove', function (evt) {
        		if (el.offsetHeight < el.scrollHeight) {
            		evt._isScroller = true; //判断条件设为真
        		}
    	});
}
/*</script>*/
