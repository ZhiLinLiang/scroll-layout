# scroll-layout
弹出层局部滚动与底层禁止滑动

/*核心知识点总结

1.DOMElement属性
scrollHeight,scrollLeft,scrollTop,scrollWidth;//滚动区域
offsetHeight,offsetLeft,offsetTop,offsetWidth;//对象区域

_isScroller;//滚动属性
bool = event.cancelable;//事件取消成功|返回一个布尔值TRUE or FALSE

2.事件监听与事件
document.Element.addEventListener(Events,fn,bool); 添加/注册监听事件
document.Element.removeEventListener(Events,fn,bool);删除/注销监听事件
addEventListener的匿名函数无法被注销，要么覆盖，要么封装为命名函数。

3.蒙版层
<div class="mark"></div>//通过CSS的z-index属性设置层级
<iframe></iframe> | (HTML5)//构建空白页蒙版

4.CSS属性
$("body").css({ overflow: "hidden" });
 $("html,body").css({ overflow: "hidden" });
 -webkit-overflow-scrolling : touch; //滚动反弹效果

*/
