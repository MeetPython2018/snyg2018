/*
* @Author: cao424519431
* @Date:   2018-07-22 14:57:35
* @Last Modified by:   cao424519431
* @Last Modified time: 2018-07-23 22:14:24
*/
window.onload=function() {
    //轮播图的侧选项卡
    let firstScreen = document.getElementsByClassName("firstScreen")[0];
    let indexlist = firstScreen.getElementsByClassName("indexlist");
    let item = firstScreen.getElementsByClassName("item");
    for (let i = 0; i < indexlist.length; i++) {
        indexlist[i].onmouseenter = function () {
            item[i].style.display = "block";
        }
        indexlist[i].onmouseleave = function () {
            item[i].style.display = "none";
        }
    }
    //搜索框的js
    let search=document.querySelector(".search-keyword");
    let listFor=search.querySelector(".item")
    let input=search.querySelector(".input")
    let guanbi=search.querySelector(".icon-SearchIcon")
    input.onfocus=function(){
        listFor.style.display="block"
        input.style.placeholder=""
    }
    input.onblur=function(){
        listFor.style.display="none"
    }
    guanbi.onclick=function(){
        listFor.style.display="none"
    }
    //播动的评价
    let toutiao=document.querySelector(".toutiao");
    let yiping=toutiao.querySelectorAll(".yiping")
    let hight=96
    let nowW=0;
    let nextT=0;
    let tt=setInterval(active,4000)
    function active(){
        nextT++;
        if(nextT==yiping.length){
            nextT=0;
        }
        yiping[nextT].style.top=hight+"px";
        animate(yiping[nowW],{top:-hight});
        animate(yiping[nextT],{top:0});
        nowW=nextT;
        }
    toutiao.onmouseenter=function(){
         clearInterval(tt)
    }
    toutiao.onmouseleave=function(){
        tt=setInterval(move,4000)
    }
    //轮播图JS事件
    // let banner=document.getElementsByClassName("banner");
    let wapper = firstScreen.getElementsByClassName("wapper")[0];
    let lunboyu = wapper.getElementsByClassName("lunboyu");
    let back = document.getElementsByClassName("uiprev");
    let forward = document.getElementsByClassName("uinext");
    let t = setInterval(move, 3000);
    let num = 0;
    function move() {
        num++;
        if (num == lunboyu.length) {
            num = 0;
        }
        for (let i = 0; i < lunboyu.length; i++) {
            lunboyu[i].style.zIndex = 5;
        }
        lunboyu[num].style.zIndex = 10;
        for(let i=0;i<lunboyu.length;i++){
            li[i].style.backgroundPosition="-26px -100px";
        }
        li[num].style.backgroundPosition="0 -100px";

    }

    //移入轮播图JS事件
    wapper.onmouseenter = function () {
        clearInterval(t);
    };
    //移出轮播图JS事件
    wapper.onmouseleave = function () {
        t = setInterval(move, 3000);
    };
    let anniu = 0;
    forward[0].onclick = function () {
        move();
        anniu++;
        if(anniu==lunboyu.length){
            anniu=0;
        };
    }
        function move1() {
            num--;
            if (num < 0) {
                num = lunboyu.length - 1;
            }
            for (let i = 0; i < lunboyu.length; i++) {
                lunboyu[i].style.zIndex = 5;
            }
            lunboyu[num].style.zIndex = 10;
            for(let i=0;i<lunboyu.length;i++){
                li[i].style.backgroundPosition="-26px -100px";
            }
            li[num].style.backgroundPosition="0 -100px";
        }

        back[0].onclick = function () {
            move1();
            anniu--;
            if(anniu<0){
                anniu=lunboyu.length-1;
            };
        };
    let button=wapper.getElementsByClassName("button")[0];
    let li=button.getElementsByTagName("li");
    for(let i=0;i<li.length;i++){
        li[i].onclick=function () {
            for(let k=0;k<lunboyu.length;k++){
                lunboyu[k].style.zIndex=5;
                li[k].style.backgroundPosition="-26px -100px";

            }
            num=i;
            lunboyu[i].style.zIndex=10;
            li[i].style.backgroundPosition="0 -100px";
        }
    }
    //大聚汇  排行榜  视频  乐拼购的多图轮播js效果
    let juhui=document.querySelector(".content-wrapper");
    let video=document.querySelector(".smallshow-wrapper");
    let lpg=document.querySelector(".list-wrapper");
    function lbTojvl(value){
        let bl=value.querySelector(".bannerList");
        let item=value.querySelectorAll(".items");
        let wid=parseInt(getComputedStyle(bl,null).width);
        let moveGo=value.querySelector(".btn-next");
        let moveBack=value.querySelector(".btn-prev");
        let now=0;
        let next=0;
        let flag=true;
        function move(){
            next++;
            if(next==item.length){
                next=0;
            }
            item[next].style.left=wid+"px";
            animate(item[now],{left:-wid});
            animate(item[next],{left:0},function(){
                flag=true;
            });
            now=next;
        }
        function move1() {
            next--;
            if(next<0){
                next=item.length-1;
            }
            item[next].style.left=-wid+"px";
            animate(item[now],{left:wid});
            animate(item[next],{left:0},function () {
                flag=true;
            });
            now=next;
        }
        moveGo.onclick=function(){
            if(flag==false){
                return;
            }
            move();
            flag=false;
        }
        moveBack.onclick=function(){
            if(flag==false){
                return;
            }
            move1();
            flag=false;
        }
    }
    lbTojvl(juhui);
    lbTojvl(video);
    lbTojvl(lpg);
    let paihang=document.querySelector(".phb-module");
    let btn=paihang.querySelector(".btn")
    let btns=btn.querySelectorAll(".btns");
    function lbTojv2(value){
        let bl=value.querySelector(".bannerList");
        let item=value.querySelectorAll(".items");
        let wid=parseInt(getComputedStyle(bl,null).width);
        let moveGo=value.querySelector(".btn-next");
        let moveBack=value.querySelector(".btn-prev");
        let t=setInterval(move,60000)
        let now=0;
        let next=0;
        let flag=true;
        function move(){
            next++;
            if(next==item.length){
                next=0;
            }
            btns[now].classList.remove("changcolor");
            btns[next].classList.add("changcolor");
            item[next].style.left=wid+"px";
            animate(item[now],{left:-wid});
            animate(item[next],{left:0},function(){
                flag=true;
            });
            now=next;
        }
        function move1() {
            next--;
            if(next<0){
                next=item.length-1;
            }
            btns[now].classList.remove("changcolor");
            btns[next].classList.add("changcolor");
            item[next].style.left=-wid+"px";
            animate(item[now],{left:wid});
            animate(item[next],{left:0},function () {
                flag=true;
            });
            now=next;
        }
        moveGo.onclick=function(){
            if(flag==false){
                return;
            }
            move();
            flag=false;
        }
        moveBack.onclick=function(){
            if(flag==false){
                return;
            }
            move1();
            flag=false;
        }
        btns.forEach(function (element,index) {
            element.onmouseenter=function () {
                btns[now].classList.remove("changcolor");
                if(index>now){
                    item[index].style.left=wid+"px";
                    animate(item[now],{left:-wid});
                    animate(item[index],{left:0});
                    element.classList.add("changcolor");
                    now=index;
                }
                else if(index<now){
                    item[index].style.left=-wid+"px";
                    animate(item[now],{left:wid});
                    animate(item[index],{left:0});
                    element.classList.add("changcolor");
                    now=index;
                }
                else{
                    element.style.background="#D8D8D8";
                }
            };
        });
    }
    lbTojv2(paihang);
    //顶部导航的js效果
    let Headerbar=document.querySelector(".ng-toolbar")
    let dh=Headerbar.querySelector(".daohang");
    let rz=Headerbar.querySelector(".ruzhu");
    let fw=Headerbar.querySelector(".fuwu");
    let lact=Headerbar.querySelector(".box");
    let close=lact.querySelector(".icon-guanbi");
    lact.onclick=function(){
        let ul=lact.querySelector("ul");
        ul.style.display="block";
        ul.style.boxShadow="0 2px 4px 0 rgba(225,225,225,0.50)";
        lact.style.background="#fff";
    }
    /* close.onclick=function(){
        let ul=lact.querySelector("ul");
        ul.style.display="none";
    } */
    lact.onmouseleave=function(){
        let ul=lact.querySelector("ul");
        ul.style.display="none";
        lact.style.background="none";
    }
    let mo=Headerbar.querySelector(".myorder");
    let ms=Headerbar.querySelector(".mysuning");
    let car=Headerbar.querySelector(".shop-car");
    let msn=Headerbar.querySelector(".suning-mini");
    function HeaderJS(value,H){
        value.onmouseenter=function(){
            let ul=value.querySelector("ul");
            animate(ul,{height:H});
            ul.style.border="1px solid #eee";
            value.style.background="#fff";
            /* value.style.borderLeft="2px solid #eee";
            value.style.borderRight="1px solid #eee"; */
        }
        value.onmouseleave=function(){
            let ul=value.querySelector("ul");
            animate(ul,{height:0});
            ul.style.border="none";
            value.style.background="none";
        }
    }
    HeaderJS(dh,240);
    HeaderJS(rz,124);
    HeaderJS(fw,124);
    HeaderJS(car,360);
    HeaderJS(mo,120);
    HeaderJS(ms,150);
    HeaderJS(msn,185);
    //下拉至时出现的搜索框  底部的广告
    let bottomAD=document.querySelector(".bottomAD");
    let minSearch=document.querySelector(".minSearch")
    let leftBanner=document.querySelector(".leftBanner");
    let items=leftBanner.querySelectorAll("li");
    let floor=document.querySelectorAll(".floor");
    let arr=[];
    floor.forEach(element => {
       arr.push(element.offsetTop)
    });
    let mustBuy=document.querySelector(".must-buy");
    let glassLike=document.querySelector(".glass-like");
    arr.push(mustBuy.offsetTop)
    arr.push(glassLike.offsetTop)
    window.onscroll=function(){
        let scrollH=document.body.scrollTop||document.documentElement.scrollTop;
        if(scrollH>850){
            animate(minSearch,{top:0})
        }
        if(scrollH<950){
            animate(minSearch,{top:-50})
        }
        if(scrollH>1100){
            animate(bottomAD,{bottom:0})
        }
        if(scrollH<1100){
            animate(bottomAD,{bottom:-150})
        }
        if(scrollH>2200){
            animate(leftBanner,{display:"block"})
        }
        if(scrollH<2200){
            animate(leftBanner,{display:"none"})
        }
        items.forEach(function(element,index){
            if(scrollH>arr[index]-100){
                items.forEach(function(element){
                    element.classList.remove("changebg")
                })
                element.classList.add("changebg")
            }
        })
    }
    items.forEach(function(element,index){
        element.onclick=function(){
            animate(document.body,{scrollTop:arr[index]});
            animate(document.documentElement,{scrollTop:arr[index]});
        }
    })
    let backUp=document.querySelector(".backTop");
    backUp.onclick=function(){
        animate(document.body,{scrollTop:0});
        animate(document.documentElement,{scrollTop:0});
    }
    //顶部图片处理
    let topActiv=document.querySelector(".top-active");
    let co=document.querySelector(".CO");
    co.addEventListener("dblclick",function(e){
        topActiv.style.display="block";
        co.style.backgroundPosition="-241px -145px";
    })
    co.addEventListener("click",function(e){
        topActiv.style.display="none";
        co.style.backgroundPosition="-241px -145px";
        co.style.position="absolute"
        co.style.right="-20px";
        co.style.top="10px";
    })
    //右侧导航的js效果
    let rightBar=document.querySelector(".sn-sidebar")
    function enterBar(value){
        let aa=value.querySelector("a")
        value.onmouseenter=function(){
            aa.style.display="block"
        }
        value.onmouseleave=function(){
            aa.style.display="none"
        }
    }
    let message=rightBar.querySelector(".message")
    enterBar(message)
    let money=rightBar.querySelector(".money")
    enterBar(money)
    let track=rightBar.querySelector(".track")
    enterBar(track)
    let sign=rightBar.querySelector(".sign-in")
    enterBar(sign)
    let advisory=rightBar.querySelector(".advisory")
    enterBar(advisory)
    let coupleBack=rightBar.querySelector(".couple-back")
    enterBar(coupleBack)
    let top=rightBar.querySelector(".top")
    enterBar(top)
    $(".sn-sidebar .code").mouseenter(function(){
        $(".sn-sidebar .code .saowo").css("display","block")
    })
    $(".sn-sidebar .code").mouseleave(function(){
        $(".sn-sidebar .code .saowo").css("display","none")
    })

    
}
