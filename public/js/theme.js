function Mover(title) {
    this.obj = title;
    this.startx = 0;
    this.starty;
    this.startRight;
    this.startTop;
    this.mainDiv = title.parentNode;
    var that = this;
    this.isDown = false;
    this.movedown = function (e) {
        e = e ? e : window.event;
        if (!window.captureEvents) {
            this.setCapture();
        }  //事件捕获仅支持ie
//            函数功能：该函数在属于当前线程的指定窗口里设置鼠标捕获。一旦窗口捕获了鼠标，
//            所有鼠标输入都针对该窗口，无论光标是否在窗口的边界内。同一时刻只能有一个窗口捕获鼠标。
//            如果鼠标光标在另一个线程创建的窗口上，只有当鼠标键按下时系统才将鼠标输入指向指定的窗口。
//            非ie浏览器 需要在document上设置事件
        that.isDown = true;
        that.startx = e.clientX;
        that.starty = e.clientY;

        that.startRight = parseInt(that.mainDiv.style.right);
        that.startTop = parseInt(that.mainDiv.style.top);
    }
    this.move = function (e) {
        e = e ? e : window.event;
        if (that.isDown) {
            that.mainDiv.style.right = (that.startx + that.startRight) - e.clientX + "px";
            that.mainDiv.style.top = e.clientY - (that.starty - that.startTop) + "px";
        }
    }
    this.moveup = function () {
        that.isDown = false;
        if (!window.captureEvents) {
            this.releaseCapture();
        } //事件捕获仅支持ie
    }
    this.obj.onmousedown = this.movedown;
    this.obj.onmousemove = this.move;
    this.obj.onmouseup = this.moveup;

    //非ie浏览器
    document.addEventListener("mousemove", this.move, true);
}
var mover = new Mover(document.getElementById("theme-title"));

//定义 themeBtn themeBox themeClose
var themeBtn = document.getElementById("theme-btn");
var themeBox = document.getElementById("theme-box");
var themeClose = document.getElementById("theme-close");
//点击theme-btn弹出themeBox
themeBtn.onclick = function(){
    
    themeBox.style.opacity = "1";
    themeBox.style.display = "block";
}
//点击theme-close关闭themeBox
themeClose.onclick = function(){
    themeBox.style.display = "none";
}
// 主题链接跳转
var themePic = document.getElementsByClassName("theme-pic");
themePic[0].onclick = function(){
    window.location.href = themeUrl[0];
}
themePic[1].onclick = function(){
    window.location.href = themeUrl[1];
}
themePic[2].onclick = function(){
    window.location.href = themeUrl[2];
}

//广告跳转
var qfPic = document.getElementsByClassName("qf");
qfPic[0].onclick = function(){
    window.location.href = qfUrl[0];
}
qfPic[1].onclick = function(){
    window.location.href = qfUrl[1];
}


//主题信息print到“关于“
document.getElementById("theme-name").innerHTML = themeName;
document.getElementById("theme-author").innerHTML = themeAuthor;