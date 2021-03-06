var doc = document,
    topbtn = doc.getElementById("totop");
//显示“回到顶部”按钮
function showTopbtn() {
    var scrollTop = window.pageYOffset || doc.body.scrollTop || doc.documentElement.scrollTop;
    //显示回到顶部图标
    if (scrollTop >= 100 && topbtn.style.display !== "block") {
        topbtn.style.display = "block";
    }
    //隐藏回到顶部图标
    if (scrollTop <= 10 && topbtn.style.display === "block") {
        topbtn.style.display = "none";
    }
    scrollFixed();
}
//回到页面顶部，“回到顶部”按钮消失
function toTop() {
    var scrolly = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
    //平滑回到顶部
    var timer = setInterval(function () {
        scrolly -= 200;
        if (scrolly >= 200) {
            window.scrollTo(0, scrolly);
        } else {
            window.scrollTo(0, 0);
            clearInterval(timer);
            topbtn.style.display = "none";
        }
    }, 1);
}
//使position:fixed样式水平滚动的方法
//原理就是当window对象发生scroll事件和resize事件时，更新div块的left或right的值，使其相对浏览器左边或右边的位置实时改变。
function scrollFixed(){
   var scrollLeft=window.pageXOffset||doc.body.scrollLeft||doc.documentElement.scrollLeft;
    if(scrollLeft>0){
        doc.getElementById("header").style.left=-scrollLeft+"px";//原始left值为0
    }
}
//窗口滚动事件，当滚动时，显示“回到顶部”按钮
doc.addEventListener("scroll", showTopbtn, false);
//点击“回到顶部”按钮，回到页面顶部
topbtn.addEventListener("click", toTop, false);
//搜索按钮
doc.getElementById("search").addEventListener("submit", queryArticle, false);
//页面大小改变时
window.addEventListener("resize",scrollFixed,false);
//提交表单，根据关键字搜索符合条件的文档列表
function queryArticle() {
    var keyword = doc.getElementById("query").value,
        xmlhttp, result;
    //提交ajax请求
    //if (window.XMLHttpRequest) {
    //    xmlhttp = new XMLHttpRequest();
    //} else {
    //    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    //}
    //xmlhttp.open("POST", "#", true);
    //xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    //xmlhttp.send("keyword=" + keyword);
    //xmlhttp.onreadystatechange = function () {
    //    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
    //        result = xmlhttp.responseText;
    //        console.log(result);
    //    }
    //};
    return false; //不提交表单
}