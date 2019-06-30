/* 
    js实现懒加载主要是通过判断视窗的大小距离
    通过在img属性列表里面添加 data-src属性

    当只用图片的top距离  < 可见区域的大小 + 滚动条的大小
*/

//纯js实现
var num = document.getElementsByTagName('img').length;
    var img = document.getElementsByTagName("img");
    var n = 0; //存储图片加载到的位置，避免每次都从第一张图片开始遍历

    lazyload(); //页面载入完毕加载可是区域内的图片

    window.onscroll = lazyload;

    function lazyload() { //监听页面滚动事件
        var seeHeight = document.documentElement.clientHeight; //可见区域高度
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop; //滚动条距离顶部高度
        for (var i = n; i < num; i++) {
            if (img[i].offsetTop < seeHeight + scrollTop) {
                if (img[i].getAttribute("src") == "default.jpg") {
                    img[i].src = img[i].getAttribute("data-src");
                }
                n = i + 1;
            }
        }
    }

//jquery实现
    var n = 0,
        imgNum = $("img").length,
        img = $('img');

    lazyload();

    $(window).scroll(lazyload);

    function lazyload(event) {
        for (var i = n; i < imgNum; i++) {
            if (img.eq(i).offset().top < parseInt($(window).height()) + parseInt($(window).scrollTop())) {
                if (img.eq(i).attr("src") == "default.jpg") {
                    var src = img.eq(i).attr("data-src");
                    img.eq(i).attr("src", src);

                    n = i + 1;
                }
            }
        }
    }